import React, { forwardRef, Ref, useCallback, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  Icon,
  IconSize,
  Text,
  Typography,
} from '@yourssu/design-system'

import { SongType } from '../../types'
import useDetail from '../../hooks/useDetail'
import * as Styled from './SongComponent.styled'
import _ from 'lodash'
import Selector from '../../redux/selectors'

interface SongComponentProps {
  song?: SongType
  toggleInbox?: (song: SongType, isInboxSong: boolean) => void
}

function SongComponent(
  {
    song = {},
    toggleInbox =  _.noop,
  }: SongComponentProps,
  forwardedRef: Ref<HTMLDivElement>) {
  const { showDetail } = useDetail()
  const isInboxSong = useSelector(Selector.getIsInboxSong(song))
  
  const [focusOnInbox, setFocusOnInbox] = useState(false)

  const handleClickWrapper = useCallback(() => {
    showDetail(song)
  }, [
    showDetail,
    song,
  ])

  const handleClickInbox = useCallback((event: React.MouseEvent) => {
    event.stopPropagation()
    toggleInbox(song, isInboxSong)
  }, [
    toggleInbox,
    song,
    isInboxSong,
  ])

  const IconComponent = useMemo(() => (
    <Styled.InboxWrapper
      focusOnInbox={focusOnInbox}
      onClick={handleClickInbox}
      onPointerEnter={() => setFocusOnInbox(true)}
      onPointerLeave={() => setFocusOnInbox(false)}
    >
      { isInboxSong || focusOnInbox
        ? (
          <Icon
            name="ic_star_filled"
            color="buttonPoint"
            size={IconSize.M}
            marginRight={8}
          />
        ) : (
          <Icon
            name="ic_star_line"
            color="buttonPoint"
            size={IconSize.M}
            marginRight={8}
          />
      ) }
    </Styled.InboxWrapper>
  ), [
    handleClickInbox,
    focusOnInbox,
    isInboxSong,
  ])

  const ContentComponent = useMemo(() => (
    <Styled.ContentWrapper>
      <Styled.Title>
        <Text typo={Typography.Subtitle2}>
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
      <Styled.Wrapper
        ref={forwardedRef}
        onClick={handleClickWrapper}
        focusOnInbox={focusOnInbox}
      >
        <Styled.Number>
          <Text typo={Typography.Subtitle3}>
            {song.no}
          </Text>
        </Styled.Number>

        { ContentComponent }

        { IconComponent }
      </Styled.Wrapper>
    </>
  )
}

export default forwardRef(SongComponent)
