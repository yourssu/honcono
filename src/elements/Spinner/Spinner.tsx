import React from 'react'
import { SpinnerProps } from '.'

import * as Styled from './Spinner.styled'

function Spinner({ size }: SpinnerProps) {
  return (
    <Styled.Wrapper>
      <Styled.Spinner>Loading...</Styled.Spinner>
    </Styled.Wrapper>
  )
}

export default Spinner
