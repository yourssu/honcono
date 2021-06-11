import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import _ from 'lodash'
import { Text, Typography } from '@yourssu/design-system'

import Selector from '../../redux/selectors'
import { actions } from '../../redux/actions'
import { SegmentedControl } from '../../elements/SegmentedControl'
import { SearchSegment, SearchSegmentMap } from '../../types'
import SongList from '../../components/SongList'
import * as Styled from './Search.styled'

function Search({ location }: RouteComponentProps) {
  const dispatch = useDispatch()

  const [pageNumber, setPageNumber] = useState(0)

  const searchSegment = useSelector(Selector.getSearchSegment)
  const keyword = useSelector(Selector.getSearchKeyword)
  const searchedSongList = useSelector(Selector.getSearchSongsPage(pageNumber))
  const isFetching = useSelector(Selector.isFetchingSearchSongs)
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

  useEffect(function intializeKeyword() {
    const urlKeyword = location.pathname.split('/search/')[1]
    if (urlKeyword !== keyword) {
      dispatch(actions.requestGetSearchSongs({ keyword: urlKeyword }))
    }
    console.log()
  }, [
    dispatch,
    keyword,
    location,
  ])

  useEffect(function resetPageNumber() {
    setPageNumber(0)
  }, [
    searchSegment,
    keyword,
  ])

  const controlItems = useMemo(() => ([
    SearchSegment.Title,
    SearchSegment.Singer,
    SearchSegment.Number,
  ]), [])

  const selectedIndex = useMemo(() => (
    controlItems.findIndex(item => item === searchSegment)
  ), [
    controlItems,
    searchSegment,
  ])

  const handleChangeSearchSegment = useCallback((index) => {
    dispatch(actions.changeSearchSegment({segment: controlItems[index]}))
  }, [
    controlItems,
    dispatch,
  ])

  const ResultComponent = useMemo(() => {
    if (!isFetching && _.isEmpty(searchedSongList)) {
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
          isLoading={isFetching}
          scrollTriggerRef={scrollTriggerRef}
        />
      </>
    )
  }, [
    isFetching,
    scrollTriggerRef,
    searchedSongList,
  ])

  return (
    <Styled.Wrapper>
      <Styled.SegmentedControlWrapper>
        <SegmentedControl
          contents={controlItems.map((item) => SearchSegmentMap[item])}
          selectedOptionIndex={selectedIndex}
          onChangeOption={handleChangeSearchSegment}
        />
      </Styled.SegmentedControlWrapper>

      { ResultComponent }
    </Styled.Wrapper>
  )
}

export default Search
