import React from 'react'
import { SpinnerProps } from '.'

import * as Styled from './Spinner.styled'

function Spinner({ size }: SpinnerProps) {
  return (
    <Styled.Spinner>Loading...</Styled.Spinner>
  )
}

export default Spinner
