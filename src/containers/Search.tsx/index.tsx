import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import _ from 'lodash'
import { Text, Typography } from '@yourssu/design-system'

import Selector from '../../redux/selectors'
import { actions } from '../../redux/actions'
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
    dispatch(actions.requestGetSearchSongs({ keyword: urlKeyword }))
    console.log()
  }, [
    dispatch,
    location.pathname,
  ])

  useEffect(function resetPageNumber() {
    setPageNumber(0)
  }, [
    searchSegment,
    keyword,
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
            { `'${keyword}' 검색 결과` }
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
    keyword,
    isFetching,
    scrollTriggerRef,
    searchedSongList,
  ])

  return (
    <Styled.Wrapper>
      { ResultComponent }
    </Styled.Wrapper>
  )
}

export default Search
