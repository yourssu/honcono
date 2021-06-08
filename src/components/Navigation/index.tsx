import { TextField } from '@yourssu/design-system'
import React from 'react'

import * as Styled from './Navigation.styled'

interface NavigationProps {

}

function Navigation({

}: NavigationProps) {
  return (
    <Styled.Wrapper>
      <Styled.SearchWrapper>
        <TextField />
      </Styled.SearchWrapper>
    </Styled.Wrapper>
  )
}

export default Navigation
