import React, { forwardRef, Ref, useCallback, useMemo, useState } from 'react'
import {
  Icon,
  IconSize,
  Text,
  Typography,
} from '@yourssu/design-system'

import { SongType } from '../../types'
import * as Styled from './SongComponent.styled'
import useDetail from '../../hooks/useDetail'
import _ from 'lodash'

interface SongComponentProps {
  song?: SongType
  isInbox?: boolean
  addInbox?: (song: SongType) => void
  deleteInbox?: (song: SongType) => void
}

function SongComponent(
  {
    song = {},
    isInbox = false,
    addInbox = _.noop,
    deleteInbox = _.noop,
  }: SongComponentProps,
  forwardedRef: Ref<HTMLDivElement>) {
  const { showDetail } = useDetail()
  
  const [focusOnInbox, setFocusOnInbox] = useState(false)

  const handleClickWrapper = useCallback(() => {
    showDetail(song)
  }, [
    showDetail,
    song,
  ])

  const handleClickInbox = useCallback((event: React.MouseEvent) => {
    event.stopPropagation()

    if (isInbox) {
      deleteInbox(song)
    } else {
      addInbox(song)
    }
  }, [
    addInbox,
    deleteInbox,
    isInbox,
    song,
  ])

  const IconComponent = useMemo(() => (
    <Styled.InboxWrapper
      focusOnInbox={focusOnInbox}
      onClick={handleClickInbox}
      onPointerEnter={() => setFocusOnInbox(true)}
      onPointerLeave={() => setFocusOnInbox(false)}
    >
      { isInbox || focusOnInbox
        ? (
          <Icon
            name="ic_star_filled"
            color="buttonPoint"
            size={IconSize.M}
            marginRight={16}
          />
        ) : (
          <Icon
            name="ic_star_line"
            color="buttonPoint"
            size={IconSize.M}
            marginRight={16}
          />
      ) }
    </Styled.InboxWrapper>
  ), [
    handleClickInbox,
    focusOnInbox,
    isInbox,
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
