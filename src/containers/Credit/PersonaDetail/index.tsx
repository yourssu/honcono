import React from 'react'

import { Profile } from '../Persona'
import * as Styled from './PersonaDetail.styled'

interface PersonaDetailProps {
  profile?: Profile
}

function PersonaDetail({
  profile,
}: PersonaDetailProps) {
  return (
    <Styled.Wrapper>
      { profile?.name }
    </Styled.Wrapper>
  )
}

export default PersonaDetail
