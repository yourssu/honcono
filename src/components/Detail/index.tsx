import React, { useCallback, useEffect, useMemo } from 'react'
import {
  Icon,
  IconSize,
  Text,
  Typography,
} from '@yourssu/design-system'

import { SongType } from '../../types'
import * as Styled from './Detail.styled'
import { useDispatch, useSelector } from 'react-redux'
import Selector from '../../redux/selectors'
import { actions } from '../../redux/actions'
import YouTube from 'react-youtube'
import { Spinner } from '../../elements/Spinner'

interface DetailProps {
  song?: SongType,
}

function Detail({
  song = {},
}: DetailProps) {
  const dispatch = useDispatch()

  const { youtubeID, isFetching } = useSelector(Selector.getYoutubeReducer)
  const isInboxSong = useSelector(Selector.getIsInboxSong(song))

  useEffect(function requestYoutubeID() {
    dispatch(actions.requestGetYoutubeID({
      title: song.title ?? '',
      singer: song.singer ?? '',
    }))
  }, [
    dispatch,
    song.singer,
    song.title,
  ])

  const handleClickInbox = useCallback(() => {
    dispatch(actions.toggleInboxSong({ song, isInboxSong }))
  }, [dispatch, isInboxSong, song])

  const HeaderComponent = useMemo(() => (
    <Styled.Header>
      <Styled.Number>
        <Text typo={Typography.Title2}>
          { song.no }
        </Text>
      </Styled.Number>

      <Styled.InboxWrapper onClick={handleClickInbox}>
        { isInboxSong
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
    </Styled.Header>
  ), [
    handleClickInbox,
    isInboxSong,
    song.no,
  ])

  const YoutubeComponent = useMemo(() => {
    if (isFetching) {
      return (
        <Styled.YoutubeWrapper>
          <Spinner />
        </Styled.YoutubeWrapper>
      )
    }

    if (youtubeID) {
      return (
        <Styled.YoutubeWrapper>
          <YouTube
            videoId={youtubeID}
            opts={{
              width: '100%',
              height: '100%'
            }}
          />
        </Styled.YoutubeWrapper>
      )
    }

    return null
  }, [
    isFetching,
    youtubeID,
  ])

  return (
    <Styled.Wrapper>
      { HeaderComponent }
      
      <Text typo={Typography.Subtitle1}>
        { song.title }
      </Text>
      <Text typo={Typography.Body1}>
        { song.singer }
      </Text>

      { YoutubeComponent }
    </Styled.Wrapper>
  )
}

export default Detail
