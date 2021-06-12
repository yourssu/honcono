import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import {
  Button,
  ButtonSize,
  ButtonType,
  Text,
  Typography,
} from '@yourssu/design-system'

import SongList from '../../components/SongList'
import Selector from '../../redux/selectors'
import { actions } from '../../redux/actions'
import * as Styled from './Recent.styled'
import { parseBrand, toggleBrand } from '../../utils'
import { Brand, BrandNameMap } from '../../constants'

function Recent() {
  const dispatch = useDispatch()
  const brand = useSelector(Selector.getBrand)
  const recentReducer = useSelector(Selector.getRecentReducer)
  const currentBrand = useSelector(Selector.getBrand)

  useEffect(() => {
    if (_.isEmpty(recentReducer.songs)) {
      dispatch(actions.requestGetRecentSongs())
    }
  }, [
    dispatch,
    recentReducer.songs,
  ])

  const otherBrand = useMemo<Brand>(() => toggleBrand(brand), [brand])

  const handleClickToggleBrand = useCallback(() => {
    dispatch(actions.changeBrand({ brand: otherBrand }))
    dispatch(actions.requestGetRecentSongs())
  }, [
    dispatch,
    otherBrand,
  ])

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Title>
          <Text typo={Typography.Title1}>
            { `${parseBrand(currentBrand)} 최신곡` }
          </Text>
        </Styled.Title>

        <Styled.ButtonWrapper>
          <Button
            onClick={handleClickToggleBrand}
            text={`${BrandNameMap[otherBrand]}으로 바꾸기`}
            buttonType={ButtonType.Secondary}
            size={ButtonSize.S}
          />
        </Styled.ButtonWrapper>
      </Styled.Header>

      <SongList
        songs={recentReducer.songs}
        isLoading={recentReducer.isFetching}
      />
    </Styled.Wrapper>
  )
}

export default Recent
