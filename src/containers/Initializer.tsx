import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { withRouter } from 'react-router-dom'

import { LOCAL_STORAGE } from '../constants'
import { actions } from '../redux/actions'
import Selector from '../redux/selectors'

function Initializer({ location }: RouteComponentProps) {
  const dispatch = useDispatch()
  const rootState = useSelector(Selector.getRootState)
  const initialized = useSelector(Selector.getIsIntialized)

  useEffect(function initialize() {
    if (!initialized) {
      const localState = window.localStorage.getItem(LOCAL_STORAGE)

      if (localState) {
        dispatch(actions.initState({ state: JSON.parse(localState) }))
      }
    }
  }, [
    dispatch,
    initialized,
  ])

  useEffect(function saveLocalStorage() {
    window.localStorage.setItem(LOCAL_STORAGE, JSON.stringify(rootState))
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
