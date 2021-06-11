import { css, styled } from '@yourssu/design-system'

interface InboxFocusProps {
  focusOnInbox: boolean
}

export const Wrapper = styled.div<InboxFocusProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;

  cursor: pointer;

  &:hover {
    background-color: ${({ foundation, focusOnInbox }) => (
      focusOnInbox
        ? foundation?.theme.bgNormal
        : foundation?.theme.bgPressed
    )};
  }
`

export const InboxWrapper = styled.div<InboxFocusProps>`
  display: flex;
  align-items: center;
  align-self: stretch;

  ${({ focusOnInbox }) => (
    focusOnInbox && css`opacity: 0.7;`
  )}
`

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 16px;
`

export const Title = styled.div``

export const Artist = styled.div`
  margin-top: 4px;
`

export const Number = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 12px 0 4px;
  width: 64px;
`
