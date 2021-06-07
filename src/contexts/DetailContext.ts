import { createContext } from 'react'
import { noop } from 'lodash'
import { SongType } from '../types'

interface DetailContextType {
  detail?: SongType
  showDetail: (song: SongType) => void
  hideDetail: () => void
}

const DetailContext = createContext<DetailContextType>({
  detail: undefined,
  showDetail: noop,
  hideDetail: noop,
})

export default DetailContext
