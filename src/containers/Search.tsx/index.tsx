import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Selector from '../../redux/selectors'
import { actions } from '../../redux/actions'
import * as Styled from './Search.styled'
import { SegmentedControl } from '../../elements/SegmentedControl'
import { SearchType } from '../../types'
import SongComponent from '../../components/SongComponent'
import SongList from '../../components/SongList'

const SearchTypeMap = {
  [SearchType.Title]: '곡명',
  [SearchType.Singer]: '가수명',
  [SearchType.Number]: '번호',
}

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

  return (
    <Styled.Wrapper>
      <SegmentedControl
        contents={controlItems.map((item) => SearchTypeMap[item])}
        selectedOptionIndex={selectedIndex}
        onChangeOption={handleSelectIndex}
      />
      <SongList songs={searchResult}/>
    </Styled.Wrapper>
  )
}

export default Search
