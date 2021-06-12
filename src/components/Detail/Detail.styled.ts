import { styled } from '@yourssu/design-system'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 20px 20px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

export const Number = styled.div`
`

export const InboxWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  align-self: stretch;
  cursor: pointer;

  &:active {
    opacity: 0.7;
  }
`
