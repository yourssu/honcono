import React from 'react'
import { ProfileImage, ProfileImageSize, Text, Typography } from '@yourssu/design-system'

import { Profile } from '../Persona'
import * as Styled from './PersonaDetail.styled'
import _ from 'lodash'

interface PersonaDetailProps {
  profile?: Profile
}

function PersonaDetail({
  profile,
}: PersonaDetailProps) {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <ProfileImage
          imgSrc={profile?.imgSrc}
          size={ProfileImageSize.L}
        />
        <Styled.Name>
          <Text typo={Typography.Subtitle1}>
            { profile?.name }
          </Text>
        </Styled.Name>
      </Styled.Header>

      {
        !_.isEmpty(profile?.urls) && (
          profile?.urls?.map(({name, url}) => name && url && (
            <Styled.Link key={name} href={url} target='_blank'>
              <Text typo={Typography.Body1} color="textPointed">
                {name}
              </Text>
            </Styled.Link>
          ))
        )
      }
    </Styled.Wrapper>
  )
}

export default PersonaDetail
