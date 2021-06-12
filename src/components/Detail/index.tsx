import React, { useCallback, useMemo } from 'react'
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

interface DetailProps {
  song?: SongType,
}

function Detail({
  song = {},
}: DetailProps) {
  const dispatch = useDispatch()
  const isInboxSong = useSelector(Selector.getIsInboxSong(song))

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
    </Styled.Header>
  ), [
    handleClickInbox,
    isInboxSong,
    song.no,
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
    </Styled.Wrapper>
  )
}

export default Detail
