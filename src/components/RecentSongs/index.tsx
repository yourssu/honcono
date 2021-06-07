import React, { Fragment } from 'react'
import _ from 'lodash'
import {
  Text,
  Typography,
} from '@yourssu/design-system'

import { Brand, SongType } from '../../types'
import SongComponent from '../SongComponent'
import * as Styled from './RecentSongs.styled'
import { parseBrand } from '../../utils'

interface RecentSongsProps {
  songs?: SongType[]
  brand: Brand,
}

function RecentSongs({
  songs = [],
  brand,
}: RecentSongsProps) {

  if (_.isNil(songs) || !_.isArray(songs)) { return null } 

  return (
    <Styled.Wrapper>
      <Styled.Title>
        <Text typo={Typography.Title1}>
          { `${parseBrand(brand)} 최신곡` }
        </Text>
      </Styled.Title>
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

export default RecentSongs
