import React from 'react'
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

  return (
    <Styled.Wrapper>

      <Styled.Title>
        <Text typo={Typography.Title1}>
          보관함
        </Text>
      </Styled.Title>
      <SongList
        songs={inboxSongs}
      />
    </Styled.Wrapper>
  )
}

export default Inbox
