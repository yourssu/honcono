import { pressedStyle, styled } from "@yourssu/design-system";

export const Wrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  background-color: ${({ foundation }) => foundation?.theme.bgNormal};
`

interface HeaderProps {
  hide?: boolean
}

export const Header = styled.div<HeaderProps>`
  ${({ foundation }) => foundation?.transition.getTransitionsCSS('height')}

  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin: ${({ hide }) => hide ? 10 : 20 }px 0;
  height: ${({ hide }) => hide ? 0 : 32 }px;
  overflow: hidden;
`

export const Logo = styled.div`
  cursor: pointer;
`

export const Brand = styled.div`
  margin-left: auto;
  cursor: pointer;

  &:active {
    ${pressedStyle}
  }
`

export const SearchWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 20px;
  display: flex;
`

interface BackButtonProps {
  show?: boolean
}

export const BackButton = styled.div<BackButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  word-break: keep-all;
  cursor: pointer;

  ${({ foundation }) => foundation?.transition.getTransitionsCSS(['opacity', 'width', 'padding-right'])}
  opacity: ${({ show }) =>  show ? 1 : 0};
  width: ${({ show }) =>  show ? 32 : 0}px;
  padding-left: ${({ show }) =>  show ? 16 : 0}px;

  &:active {
    ${pressedStyle}
  }
`

export const SegmentedControlWrapper = styled.div`
  padding: 16px 20px 0 16px;
`
