import React, { Fragment } from 'react'
import _ from 'lodash'

import { SongType } from '../../types'
import SongComponent from '../SongComponent'
import * as Styled from './RecentSongs.styled'
import { Divider } from '@yourssu/design-system'

interface RecentSongsProps {
  songs?: SongType[]
}

function RecentSongs({
  songs = [],
}: RecentSongsProps) {

  if (_.isNil(songs) || !_.isArray(songs)) { return null } 

  return (
    <Styled.Wrapper>
      {
        songs.map((song) => (
          <Fragment key={song.no}>
            <Divider />
            <SongComponent
              song={song}
            />
          </Fragment>
        ))
      }
    </Styled.Wrapper>
  )
}

export default RecentSongs
