import React, { useCallback, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter, useHistory } from 'react-router-dom'
import { Text, TextField } from '@yourssu/design-system'

import { DEBOUNCE_DELAY } from '../../constants'
import { actions } from '../../redux/actions'
import Selector from '../../redux/selectors'
import * as Styled from './Navigation.styled'

function Navigation() {
  const dispatch = useDispatch()
  const history = useHistory()
  const searchKeyword = useSelector(Selector.getSearchKeyword)
  const [keyword, setKeyword] = useState(searchKeyword)

  const timer = useRef<NodeJS.Timeout>()

  const dispatchSearch = useCallback((newKeyword: string) => {
    if (!newKeyword) {
      return
    }
    history.push(`/search/${newKeyword}`)
    dispatch(actions.requestGetSearchSongs({ keyword: newKeyword }))
  }, [
    dispatch,
    history,
  ])

  const handleKeywordChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newKeyword = event.target.value
    if (timer.current) {
      clearTimeout(timer.current)
    }
    timer.current = setTimeout(() => {
      dispatchSearch(newKeyword)
    }, DEBOUNCE_DELAY)
    setKeyword(newKeyword)
  }, [dispatchSearch])

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (timer.current) {
        clearTimeout(timer.current)
      }
      dispatchSearch(keyword)
    }
  }, [
    dispatchSearch,
    keyword,
  ])

  const handleClickLogo = useCallback(() => {
    history.push('/')
  }, [history])
  const handleClickRecent = useCallback(() => {
    history.push('/recent')
  }, [history])

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Logo onClick={handleClickLogo}>
          <Text>
            홈
          </Text>
        </Styled.Logo>
        <Styled.Recent onClick={handleClickRecent}>
          <Text>
            최신곡
          </Text>
        </Styled.Recent>
      </Styled.Header>
      <Styled.SearchWrapper>
        <TextField
          value={keyword}
          onChange={handleKeywordChange}
          onKeyDown={handleKeyDown}
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

export default withRouter(Navigation)
