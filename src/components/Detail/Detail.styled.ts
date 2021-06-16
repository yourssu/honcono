import { styled } from '@yourssu/design-system'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 20px;
  user-select: auto;
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

export const YoutubeWrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 500px;
  margin-top: 16px;
  border-radius: 8px;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }

  & * {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`
