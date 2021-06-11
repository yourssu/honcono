import { styled } from "@yourssu/design-system";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100vw;
  background-color: ${({ foundation }) => foundation?.theme.bgNormal};
`
