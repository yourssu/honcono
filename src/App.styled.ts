import { styled } from "@yourssu/design-system";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: ${({ foundation }) => foundation?.theme.bgNormal};
`

export const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 560px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
