import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'

import Selector from '../../redux/selectors'
import { actions } from '../../redux/actions'
import * as Styled from './Search.styled'
import { SegmentedControl } from '../../elements/SegmentedControl'
import { SearchType } from '../../types'

const SearchTypeMap = {
  [SearchType.Title]: '곡명',
  [SearchType.Singer]: '가수명',
  [SearchType.Number]: '번호',
}

function Search() {
  const dispatch = useDispatch()
  const recentSongs = useSelector(Selector.getRecentSongs)
  const controlItems = useMemo(() => ([
    SearchType.Title,
    SearchType.Singer,
    SearchType.Number,
  ]), [])

  const [selectedIndex, setIndex] = useState<number>(0)

  useEffect(() => {
    if (_.isEmpty(recentSongs)) {
      dispatch(actions.requesetGetRecentSongs())
    }
  }, [
    dispatch,
    recentSongs,
  ])

  useEffect(() => {
    console.log(recentSongs)
  }, [
    recentSongs,
  ])

  return (
    <Styled.Wrapper>
      <SegmentedControl
        contents={controlItems.map((item) => SearchTypeMap[item])}
        selectedOptionIndex={selectedIndex}
        onChangeOption={setIndex}
      />
    </Styled.Wrapper>
  )
}

export default Search
