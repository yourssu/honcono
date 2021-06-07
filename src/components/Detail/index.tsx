import React from 'react'
import {
  Text,
  Typography,
} from '@yourssu/design-system'

import { SongType } from '../../types'
import * as Styled from './Detail.styled'

interface DetailProps {
  song?: SongType,
}

function Detail({
  song = {},
}: DetailProps) {

  return (
    <Styled.Wrapper>
      <Styled.Number>
        <Text typo={Typography.Title2}>
          { song.no }
        </Text>
      </Styled.Number>
      { song.title }
    </Styled.Wrapper>
  )
}

export default Detail
