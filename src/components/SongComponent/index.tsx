import React, { useMemo } from 'react'
import {
  Icon,
  Text,
  Typography,
} from '@yourssu/design-system'

import { SongType } from '../../types'
import * as Styled from './SongComponent.styled'

interface SongComponentProps {
  song?: SongType
}

function SongComponent({
  song = {},
}: SongComponentProps) {
  const HeaderComponent = useMemo(() => (
    <Styled.Header>
      <Styled.Title>
        <Text typo={Typography.Subtitle1}>
          {song.title}
        </Text>
      </Styled.Title>
      <Styled.Number>
        <Text typo={Typography.Subtitle2}>
          {song.no}
        </Text>
      </Styled.Number>
    </Styled.Header>
  ), [
    song.no,
    song.title,
  ])

  return (
    <>
      <Styled.Wrapper>
        <Icon
          name="ic_star_line"
          color="buttonPoint"
          marginRight={8}
        />
        <Styled.ContentWrapper>
          { HeaderComponent }
          <Styled.Artist>
            <Text typo={Typography.Body1}>
              {song.singer}
            </Text>
          </Styled.Artist>
        </Styled.ContentWrapper>
      </Styled.Wrapper>
    </>
  )
}

export default SongComponent
