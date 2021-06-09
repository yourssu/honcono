import { styled } from "@yourssu/design-system";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: ${({ foundation }) => foundation?.theme.bgNormal};
`

export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 560px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
