import React, { Fragment, useCallback, useState } from 'react'
import { Divider, Text, Typography, BottomSheet } from '@yourssu/design-system'

import CreditList from './CreditList'
import Persona, { Profile } from './Persona'
import PersonaDetail from './PersonaDetail'
import * as Styled from './Credit.styled'

function Credit() {
  const [show, setShow] = useState(false)
  const [credit, setCredit] = useState<Profile>()

  const handleClickPersona = useCallback((newCredit: Profile) => {
    setShow(true)
    setCredit(newCredit)
  }, [setShow])

  return (
    <Styled.Wrapper>
      <Styled.Title>
        <Text typo={Typography.Title1}>
          만든 사람들
        </Text>
      </Styled.Title>
      <Divider
        marginLeft={20}
        marginRight={20}
      />
      {
        CreditList.map((credit) => (
          <Fragment
            key={credit.name}
          >
            <Persona
              profile={credit}
              onClick={() => handleClickPersona(credit)}
            />
          </Fragment>
        ))
      }

      <BottomSheet
        show={show}
        onHide={() => setShow(false)}
      >
        <PersonaDetail profile={credit} />
      </BottomSheet>
    </Styled.Wrapper>
  )
}

export default Credit
