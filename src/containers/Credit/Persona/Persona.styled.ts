import { styled } from '@yourssu/design-system'

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 20px;
  cursor: pointer;

  &:active {
    background-color: ${({ foundation }) => foundation?.theme.bgPressed};
  }
`

export const InfoWrapper = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
`

export const Name = styled.div`
`

export const Role = styled.div`
`
