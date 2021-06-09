import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import {
  Text,
  Typography,
} from '@yourssu/design-system'

import SongList from '../../components/SongList'
import Selector from '../../redux/selectors'
import { actions } from '../../redux/actions'
import * as Styled from './Home.styled'
import { parseBrand } from '../../utils'

function Home() {
  const dispatch = useDispatch()
  const recentSongs = useSelector(Selector.getRecentSongs)
  const currentBrand = useSelector(Selector.getBrand)

  useEffect(() => {
    if (_.isEmpty(recentSongs)) {
      dispatch(actions.requestGetRecentSongs())
    }
  }, [
    dispatch,
    recentSongs,
  ])

  return (
    <Styled.Wrapper>

      <Styled.Title>
        <Text typo={Typography.Title1}>
          { `${parseBrand(currentBrand)} 최신곡` }
        </Text>
      </Styled.Title>
      <SongList
        songs={recentSongs}
      />
    </Styled.Wrapper>
  )
}

export default Home
