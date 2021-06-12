import { Text, Typography } from '@yourssu/design-system'
import React from 'react'

import * as Styled from './Footer.styled'

function Footer() {
  return (
    <Styled.Wrapper>
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
