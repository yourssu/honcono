import React, { Fragment, Ref, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'

import { SongType } from '../../types'
import { SCROLL_TRIGGER_INDEX } from '../../constants'
import SongComponent from '../SongComponent'
import * as Styled from './SongList.styled'
import Selector from '../../redux/selectors'
import { actions } from '../../redux/actions'

interface SongListProps {
  songs?: SongType[]
  scrollTriggerRef?: Ref<HTMLDivElement>
}

function SongList({
  songs = [],
  scrollTriggerRef,
}: SongListProps) {
  const dispatch = useDispatch()
  const inboxSongs = useSelector(Selector.getInboxSongs)

  const handleAddInbox = useCallback((newSong: SongType) => {
    dispatch(actions.addInboxSong({ song: newSong }))
  }, [dispatch])

  const handleDeleteInbox = useCallback((newSong: SongType) => {
    if (!_.isNil(newSong.no)) {
      dispatch(actions.deleteInboxSong({ no: newSong.no }))
    }
  }, [dispatch])

  if (_.isNil(songs) || !_.isArray(songs)) { return null }

  return (
    <Styled.Wrapper>
      {
        songs.map((song, index) => {
          const isLastTriggerIndex = !_.isNil(scrollTriggerRef) && songs.length - SCROLL_TRIGGER_INDEX === index
          const isInboxSong = !!inboxSongs.find((_song) => _song.no === song.no && _song.brand === song.brand)

          return (
          <Fragment key={song.no}>
            <Styled.Divider/>
            { isLastTriggerIndex
              ? <SongComponent
                  song={song}
                  isInbox={isInboxSong}
                  ref={scrollTriggerRef}
                  addInbox={handleAddInbox}
                  deleteInbox={handleDeleteInbox}
                />
              : <SongComponent
                  song={song}
                  isInbox={isInboxSong}
                  addInbox={handleAddInbox}
                  deleteInbox={handleDeleteInbox}
                />
            }
          </Fragment>
          )
        })
      }
    </Styled.Wrapper>
  )
}

export default SongList
