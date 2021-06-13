import React, { Fragment, useCallback, useState } from 'react'
import { BottomSheet, Divider, Text, Typography } from '@yourssu/design-system'

import CreditList from './CreditList'
import Persona, { Profile } from './Persona'
import PersonaDetail from './PersonaDetail'
import * as Styled from './Credit.styled'

function Credit() {
  const [showProfile, setShowProfile] = useState(false)
  const [showingCredit, setShowingCredit] = useState<Profile | undefined>(undefined)

  const handleClickPersona = useCallback((newCredit: Profile) => {
    setShowProfile(true)
    setShowingCredit(newCredit)
  }, [])

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

      <BottomSheet
        show={showProfile}
        onHide={() => setShowProfile(false)}
      >
        <PersonaDetail
          profile={showingCredit}
        />
      </BottomSheet>
    </Styled.Wrapper>
  )
}

export default Credit
