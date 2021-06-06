/* External dependencies */
import {
  TypedUseSelectorHook,
  useSelector,
} from 'react-redux'

/* Internal dependencies */
import { RootState } from '../types'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default useTypedSelector
