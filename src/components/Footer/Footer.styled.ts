import { pressedStyle, styled } from '@yourssu/design-system'

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: calc(16px + env(safe-area-inset-bottom));
  cursor: pointer;

  &:active {
    ${pressedStyle}
  }
`
