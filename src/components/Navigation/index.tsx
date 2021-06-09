import { TextField } from '@yourssu/design-system'
import React, { useCallback, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../redux/actions'
import Selector from '../../redux/selectors'

import * as Styled from './Navigation.styled'

/* interface NavigationProps {

} */

function Navigation() {
  const dispatch = useDispatch()
  const searchKeyword = useSelector(Selector.getSearchKeyword)
  const [keyword, setKeyword] = useState(searchKeyword)

  const timer = useRef<NodeJS.Timeout>()

  const dispatchSearch = useCallback((newKeyword: string) => {
    if (!newKeyword) {
      return
    }
    dispatch(actions.requesetGetSearchSongs({ keyword: newKeyword }))
  }, [dispatch])

  const handleKeywordChange = useCallback((event) => {
    const newKeyword = event.target.value
    if (timer.current) {
      clearTimeout(timer.current)
    }
    timer.current = setTimeout(() => {
      dispatchSearch(newKeyword)
    }, 200)
    setKeyword(newKeyword)
  }, [dispatchSearch])

  return (
    <Styled.Wrapper>
      <Styled.SearchWrapper>
        <TextField
          value={keyword}
          onChange={handleKeywordChange}
          allowClear
          placeholder="검색어를 입력하세요"
          leftContent={{
            icon: 'ic_search_line',
            iconColor: 'buttonNormal',
          }}
        />
      </Styled.SearchWrapper>
    </Styled.Wrapper>
  )
}

export default Navigation
