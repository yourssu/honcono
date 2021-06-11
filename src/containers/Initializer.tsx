import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actions } from '../redux/actions'
import Selector from '../redux/selectors'

function Initializer() {
  const dispatch = useDispatch()
  const rootState = useSelector(Selector.getRootState)
  const initialized = useSelector(Selector.getIsIntialized)

  useEffect(function initialize() {
    if (!initialized) {
      const localState = window.localStorage.getItem('yourssu_honcono')

      if (localState) {
        dispatch(actions.initState({ state: JSON.parse(localState) }))
      }
    }
  }, [
    dispatch,
    initialized,
  ])

  useEffect(function saveLocalStorage() {
    window.localStorage.setItem('yourssu_honcono', JSON.stringify(rootState))
  }, [rootState])

  return (<></>)
}

export default Initializer
