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

export const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding: 0 20px;
  height: 32px;
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
`
