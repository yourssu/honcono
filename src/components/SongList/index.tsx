import React, { Fragment, Ref } from 'react'
import _ from 'lodash'

import { SongType } from '../../types'
import { SCROLL_TRIGGER_INDEX } from '../../constants'
import SongComponent from '../SongComponent'
import * as Styled from './SongList.styled'

interface SongListProps {
  songs?: SongType[]
  scrollTriggerRef?: Ref<HTMLDivElement>
}

function SongList({
  songs = [],
  scrollTriggerRef,
}: SongListProps) {

  if (_.isNil(songs) || !_.isArray(songs)) { return null } 

  return (
    <Styled.Wrapper>
      {
        songs.map((song, index) => (
          <Fragment key={song.no}>
            <Styled.Divider/>
            { !_.isNil(scrollTriggerRef) && songs.length - SCROLL_TRIGGER_INDEX === index
              ? <SongComponent song={song} ref={scrollTriggerRef}/>
              : <SongComponent song={song}/>
          }
          </Fragment>
        ))
      }
    </Styled.Wrapper>
  )
}

export default SongList
