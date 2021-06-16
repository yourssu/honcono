import { useContext } from 'react'

import DetailContext from '../contexts/DetailContext'

export default function useDetail() {
  const context = useContext(DetailContext)

  if (!context) {
    throw Error('DetailProvider가 필요합니다.')
  }

  return {
    detail: context.detail,
    showDetail: context.showDetail,
    hideDetail: context.hideDetail,
  }
}
