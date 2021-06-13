import { Text, Typography } from '@yourssu/design-system'
import React from 'react'
import { useHistory } from 'react-router'

import * as Styled from './Footer.styled'

function Footer() {
  const history = useHistory()

  return (
    <Styled.Wrapper onClick={() => history.push('/credit')}>
      <Text
        typo={Typography.Caption1}
        color="textTertiary"
      >
        만든 사람들
      </Text>
    </Styled.Wrapper>
  )
}

export default Footer
