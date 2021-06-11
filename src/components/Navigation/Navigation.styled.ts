import { pressedStyle, styled } from "@yourssu/design-system";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
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

  &:hover {
    ${pressedStyle}
  }
`

export const SearchWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 20px;
`
