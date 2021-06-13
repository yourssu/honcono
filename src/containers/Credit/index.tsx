import React, { Fragment, useCallback } from 'react'
import { Divider, Text, Typography, useBottomSheet } from '@yourssu/design-system'

import CreditList from './CreditList'
import Persona, { Profile } from './Persona'
import PersonaDetail from './PersonaDetail'
import * as Styled from './Credit.styled'

function Credit() {
  const { show } = useBottomSheet()
  const handleClickPersona = useCallback((newCredit: Profile) => {
    show(<PersonaDetail profile={newCredit} />)
  }, [show])

  return (
    <Styled.Wrapper>
      <Styled.Title>
        <Text typo={Typography.Title1}>
          만든 사람들
        </Text>
      </Styled.Title>
      {
        CreditList.map((credit) => (
          <Fragment
            key={credit.name}
          >
            <Divider
              marginLeft={20}
              marginRight={20}
            />
            <Persona
              profile={credit}
              onClick={() => handleClickPersona(credit)}
            />
          </Fragment>
        ))
      }
    </Styled.Wrapper>
  )
}

export default Credit
