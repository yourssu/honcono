import { styled } from "@yourssu/design-system";

export const Wrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 500px;
  height: 100%;
  padding-bottom: env(safe-area-inset-bottom); 
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ foundation }) => foundation?.theme.bgNormal};
  overflow-y: scroll;
`
