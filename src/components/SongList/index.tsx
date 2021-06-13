import React, { Fragment, Ref, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import _ from 'lodash'

import { SongType } from '../../types'
import { SCROLL_TRIGGER_INDEX } from '../../constants'
import SongComponent from '../SongComponent'
import * as Styled from './SongList.styled'
import { actions } from '../../redux/actions'
import { Spinner } from '../../elements/Spinner'
import { Divider } from '@yourssu/design-system'

interface SongListProps {
  songs?: SongType[]
  isLoading?: boolean
  scrollTriggerRef?: Ref<HTMLDivElement>
}

function SongList({
  songs = [],
  isLoading,
  scrollTriggerRef,
}: SongListProps) {
  const dispatch = useDispatch()

  const handleToggleInbox = useCallback((newSong: SongType, isInboxSong: boolean) => {
    dispatch(actions.toggleInboxSong({ song: newSong, isInboxSong }))
  }, [dispatch])

  if (_.isNil(songs) || !_.isArray(songs)) { return null }

  if (isLoading) {
    return (
      <Styled.SpinnerWarpper>
        <Spinner />
      </Styled.SpinnerWarpper>
    )
  }

  return (
    <Styled.Wrapper>
      {
        songs.map((song, index) => {
          const isLastTriggerIndex = !_.isNil(scrollTriggerRef) && songs.length - SCROLL_TRIGGER_INDEX === index

          return (
          <Fragment key={song.no}>
            <Divider
              marginLeft={20}
              marginRight={20}
            />
            { isLastTriggerIndex
              ? <SongComponent
                  song={song}
                  ref={scrollTriggerRef}
                  toggleInbox={handleToggleInbox}
                />
              : <SongComponent
                  song={song}
                  toggleInbox={handleToggleInbox}
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
