import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'

import RecentSongs from '../../components/RecentSongs'
import Selector from '../../redux/selectors'
import { actions } from '../../redux/actions'
import * as Styled from './Home.styled'
import { Brand } from '../../types'

function Home() {
  const dispatch = useDispatch()
  const recentSongs = useSelector(Selector.getRecentSongs)

  useEffect(() => {
    if (_.isEmpty(recentSongs.tj)) {
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
        songs={recentSongs?.tj}
        brand={Brand.TJ}
      />
      <RecentSongs
        songs={recentSongs?.ky}
        brand={Brand.KY}
      />
    </Styled.Wrapper>
  )
}

export default Home
