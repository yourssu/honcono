import React, { useCallback, useEffect, useMemo } from 'react'
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
  const searchType = useSelector(Selector.getSearchType)
  const searchResult = useSelector(Selector.getSearchSongs)

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

  const handleSelectIndex = useCallback((index) => {
    dispatch(actions.changeSearchType({type: controlItems[index]}))
  }, [
    controlItems,
    dispatch,
  ])

  useEffect(() => {
    dispatch(actions.requesetGetSearchSongs({ keyword: '10cm' }))
  }, [dispatch])

  const ResultComponent = useMemo(() => {
    if (_.isEmpty(searchResult)) {
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
        <SongList songs={searchResult}/>
      </>
    )
  }, [searchResult])

  return (
    <Styled.Wrapper>
      <Styled.SegmentedControlWrapper>
        <SegmentedControl
          contents={controlItems.map((item) => SearchTypeMap[item])}
          selectedOptionIndex={selectedIndex}
          onChangeOption={handleSelectIndex}
        />
      </Styled.SegmentedControlWrapper>

      { ResultComponent }
    </Styled.Wrapper>
  )
}

export default Search
