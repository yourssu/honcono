import { styled } from "@yourssu/design-system";

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  background-color: ${({ foundation }) => foundation?.theme.bgNormal};
`
