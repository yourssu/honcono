import React, { useCallback, useMemo } from 'react'
import {
  Icon,
  IconSize,
  Text,
  Typography,
} from '@yourssu/design-system'

import { SongType } from '../../types'
import * as Styled from './SongComponent.styled'
import useDetail from '../../hooks/useDetail'

interface SongComponentProps {
  song?: SongType
}

function SongComponent({
  song = {},
}: SongComponentProps) {
  const { showDetail } = useDetail()

  const handleClickWrapper = useCallback(() => {
    showDetail(song)
  }, [
    showDetail,
    song,
  ])

  const ContentComponent = useMemo(() => (
    <Styled.ContentWrapper>
      <Styled.Title>
        <Text typo={Typography.Subtitle1}>
          {song.title}
        </Text>
      </Styled.Title>

      <Styled.Artist>
        <Text
          typo={Typography.Body1}
          color="textTertiary"
        >
          {song.singer}
        </Text>
      </Styled.Artist>
    </Styled.ContentWrapper>
  ), [
    song.title,
    song.singer,
  ])

  return (
    <>
      <Styled.Wrapper onClick={handleClickWrapper}>
        <Icon
          name="ic_star_line"
          color="buttonPoint"
          size={IconSize.M}
          marginRight={16}
        />
          { ContentComponent }
        <Styled.Number>
          <Text typo={Typography.Subtitle2}>
            {song.no}
          </Text>
        </Styled.Number>
      </Styled.Wrapper>
    </>
  )
}

export default SongComponent
