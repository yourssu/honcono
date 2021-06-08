import { styled, Divider as DividerElement } from '@yourssu/design-system'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 16px 0;
`

export const Divider = styled(DividerElement)`
  width: calc(100% - 40px);
  margin: 0 20px;
`
