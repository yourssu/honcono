import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'

import RecentSongs from '../../components/RecentSongs'
import Selector from '../../redux/selectors'
import { actions } from '../../redux/actions'
import * as Styled from './Home.styled'

function Home() {
  const dispatch = useDispatch()
  const recentSongs = useSelector(Selector.getRecentSongs)
  const currentBrand = useSelector(Selector.getBrand)

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
      <RecentSongs
        songs={recentSongs}
        brand={currentBrand}
      />
    </Styled.Wrapper>
  )
}

export default Home
