import { styled } from "@yourssu/design-system";

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: ${({ foundation }) => foundation?.theme.bgNormal};
`
