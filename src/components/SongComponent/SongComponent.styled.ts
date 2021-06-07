import { styled } from '@yourssu/design-system'

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;

  cursor: pointer;

  &:hover {
    background-color: ${({ foundation }) => foundation?.theme.bgPressed};
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 16px;
`

export const Title = styled.div``

export const Artist = styled.div`
  margin-top: 4px;
`

export const Number = styled.div`

`
