import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { withRouter } from 'react-router-dom'
import Immutable from 'immutable'

import { LOCAL_STORAGE } from '../constants'
import { actions } from '../redux/actions'
import Selector from '../redux/selectors'
import { RootState, RootStatePOJO } from '../types'

function Initializer({ location }: RouteComponentProps) {
  const dispatch = useDispatch()
  const rootState = useSelector(Selector.getRootState)
  const initialized = useSelector(Selector.getIsIntialized)

  useEffect(function initialize() {
    if (!initialized) {
      const localState = window.localStorage.getItem(LOCAL_STORAGE)

      if (!localState) { return }

      const POJO = JSON.parse(localState) as RootStatePOJO
      const newState: RootState = {
        ...POJO,
        youtubeReducer: {
          ...POJO.youtubeReducer,
          cache: Immutable.Map(POJO.youtubeReducer.cache)
        }
      }

      dispatch(actions.initState({ state: newState }))
    }
  }, [
    dispatch,
    initialized,
  ])

  useEffect(function saveLocalStorage() {
    const POJO: RootStatePOJO = {
      ...rootState,
      youtubeReducer: {
        ...rootState.youtubeReducer,
        cache: rootState.youtubeReducer.cache.toJSON(),
      }
    }
    window.localStorage.setItem(LOCAL_STORAGE, JSON.stringify(POJO))
  }, [rootState])

  useEffect(function controlPreviousLocation() {
    if (!location.pathname.startsWith('/search')) {
      dispatch(actions.updateLocation({ location: location.pathname }))
    }
  }, [
    dispatch,
    location.pathname,
  ])

  return (<></>)
}

export default withRouter(Initializer)
