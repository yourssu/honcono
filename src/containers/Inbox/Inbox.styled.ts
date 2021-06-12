import { styled } from "@yourssu/design-system";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  margin-top: 32px;
`

export const Title = styled.div`
  padding: 0 20px;
`

export const Skeleton = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    transform: translateY(-100%);
  }
`