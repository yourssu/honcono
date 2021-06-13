import React, { forwardRef, ReactElement } from 'react'
import { ProfileImage, ProfileImageSize, Text, Typography, UIComponentProps } from '@yourssu/design-system'

import * as Styled from './Persona.styled'

interface URL {
  name?: string
  url?: string
}

export interface Profile{
  imgSrc?: string
  name?: string
  role?: string
  urls?: URL[]
}

interface PersonaProps extends UIComponentProps {
  profile: Profile,
}

function Persona(
  {
    profile = {
      imgSrc: 'https://dinohan.com/images/smile.png',
      name: '한도협',
      role: '개발자',
    },
    ...otherProps
  }: PersonaProps,
  forwaredRef: React.Ref<any>
): ReactElement {
  return (
    <Styled.Wrapper
      ref={forwaredRef}
      {...otherProps}
    >
      <ProfileImage
        size={ProfileImageSize.M}
        imgSrc={profile.imgSrc}
      />
      <Styled.InfoWrapper>
        <Styled.Name>
          <Text
            typo={Typography.Subtitle2}
            color="textPrimary"
          >
            { profile.name }
          </Text>
        </Styled.Name>
        <Styled.Role>
          <Text
            typo={Typography.Body1}
            color="textTertiary"
          >
            { profile.role }
          </Text>
        </Styled.Role>
      </Styled.InfoWrapper>
    </Styled.Wrapper>
  )
}

export default forwardRef(Persona)
