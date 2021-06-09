import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { Text, Typography } from '@yourssu/design-system'

import Selector from '../../redux/selectors'
import { actions } from '../../redux/actions'
import * as Styled from './Search.styled'
import { SegmentedControl } from '../../elements/SegmentedControl'
import { SearchType, SearchTypeMap } from '../../types'
import SongList from '../../components/SongList'

function Search() {
  const dispatch = useDispatch()
  const [pageNumber, setPageNumber] = useState(0)

  const searchType = useSelector(Selector.getSearchType)
  const keyword = useSelector(Selector.getSearchKeyword)
  const searchedSongList = useSelector(Selector.getSearchSongsPage(pageNumber))
  const hasNextPage = useSelector(Selector.hasNextSearchSongsPage(pageNumber))

  const observer = useRef<IntersectionObserver>()
  const scrollTriggerRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting && hasNextPage) {
        setPageNumber(pageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [
    pageNumber,
    hasNextPage,
  ])

  useEffect(function resetPageNumber() {
    setPageNumber(0)
  }, [
    searchType,
    keyword,
  ])

  const controlItems = useMemo(() => ([
    SearchType.Title,
    SearchType.Singer,
    SearchType.Number,
  ]), [])

  const selectedIndex = useMemo(() => (
    controlItems.findIndex(item => item === searchType)
  ), [
    controlItems,
    searchType,
  ])

  const handleChangeSearchType = useCallback((index) => {
    dispatch(actions.changeSearchType({type: controlItems[index]}))
  }, [
    controlItems,
    dispatch,
  ])

  const ResultComponent = useMemo(() => {
    if (_.isEmpty(searchedSongList)) {
      return (
        <Styled.Title>
          <Text typo={Typography.Title1}>
            결과 없음 😕
          </Text>
        </Styled.Title>
      )
    }
    return (
      <>
        <Styled.Title>
          <Text typo={Typography.Title1}>
            검색 결과
          </Text>
        </Styled.Title>

        <SongList
          songs={searchedSongList}
          scrollTriggerRef={scrollTriggerRef}
        />
      </>
    )
  }, [
    scrollTriggerRef,
    searchedSongList,
  ])

  return (
    <Styled.Wrapper>
      <Styled.SegmentedControlWrapper>
        <SegmentedControl
          contents={controlItems.map((item) => SearchTypeMap[item])}
          selectedOptionIndex={selectedIndex}
          onChangeOption={handleChangeSearchType}
        />
      </Styled.SegmentedControlWrapper>

      { ResultComponent }
    </Styled.Wrapper>
  )
}

export default Search
