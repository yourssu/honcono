import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import {
  Text,
  Typography,
} from '@yourssu/design-system'

import SongList from '../../components/SongList'
import Selector from '../../redux/selectors'
import * as Styled from './Inbox.styled'

function Inbox() {
  const inboxSongs = useSelector(Selector.getInboxSongs)

  const ContentComponent = useMemo(() => {
    if (inboxSongs.length <= 0) {
      return (
        <Styled.Skeleton>
          <Text
            typo={Typography.Title2}
            color="textTertiary"
          >
            보관함에 노래가 없어요
          </Text>
        </Styled.Skeleton>
      )
    }

    return (
      <SongList
        songs={inboxSongs}
      />
    )
  }, [inboxSongs])

  return (
    <Styled.Wrapper>
      <Styled.Title>
        <Text typo={Typography.Title1}>
          보관함
        </Text>
      </Styled.Title>
      
      { ContentComponent }
    </Styled.Wrapper>
  )
}

export default Inbox
