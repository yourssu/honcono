import React, { Fragment } from 'react'
import _ from 'lodash'

import { SongType } from '../../types'
import SongComponent from '../SongComponent'
import * as Styled from './SongList.styled'

interface SongListProps {
  songs?: SongType[]
}

function SongList({
  songs = [],
}: SongListProps) {

  if (_.isNil(songs) || !_.isArray(songs)) { return null } 

  return (
    <Styled.Wrapper>
      {
        songs.map((song) => (
          <Fragment key={song.no}>
            <Styled.Divider
            />
            <SongComponent
              song={song}
            />
          </Fragment>
        ))
      }
    </Styled.Wrapper>
  )
}

export default SongList
