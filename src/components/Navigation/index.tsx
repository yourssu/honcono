import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter, useHistory, RouteComponentProps } from 'react-router-dom'
import { Text, TextFieldRef, Typography } from '@yourssu/design-system'

import { DEBOUNCE_DELAY, SearchSegment, SearchSegmentMap } from '../../constants'
import { actions } from '../../redux/actions'
import Selector from '../../redux/selectors'
import * as Styled from './Navigation.styled'
import BrandLogo from '../../assets/BrandLogo'
import { SegmentedControl } from '../../elements/SegmentedControl'

function Navigation({ location }: RouteComponentProps) {
  const dispatch = useDispatch()
  const history = useHistory()

  const previousLocation = useSelector(Selector.getPreviousLocation)
  const brand = useSelector(Selector.getBrand)
  const searchKeyword = useSelector(Selector.getSearchKeyword)
  const searchSegment = useSelector(Selector.getSearchSegment)

  const [keyword, setKeyword] = useState(searchKeyword)

  const searchFieldRef = useRef<TextFieldRef>(null)

  const isSearchPage = useMemo(() => location.pathname.startsWith('/search'), [location.pathname])

  useEffect(function handleKeywordChange() {
    setKeyword(searchKeyword)
  }, [searchKeyword])

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

  const handleFocus = useCallback(() => {
    if (!isSearchPage) { history.push(`/search/${keyword}`) }
  }, [
    isSearchPage,
    history,
    keyword,
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
        searchFieldRef.current?.blur()
      }
      dispatchSearch(keyword)
    }
  }, [
    dispatchSearch,
    keyword,
  ])

  const handleClickHome = useCallback(() => {
    history.push('/')
  }, [
    history,
  ])

  const handleClickCancle = useCallback(() => {
    history.push(previousLocation)
    searchFieldRef.current?.blur()
  }, [
    history,
    previousLocation,
  ])

  const handleClickRecent = useCallback(() => {
    history.push('/recent')
  }, [history])

  const HeaderComponent = useMemo(() => (
    <Styled.Header hide={isSearchPage}>
      <Styled.Logo onClick={handleClickHome}>
        <Text>
          ???
        </Text>
      </Styled.Logo>
      <Styled.Brand onClick={handleClickRecent}>
        <BrandLogo brand={brand} size={32} />
      </Styled.Brand>
    </Styled.Header>
  ), [
    isSearchPage,
    brand,
    handleClickHome,
    handleClickRecent,
  ])

  const SearchComponent = useMemo(() => {
    return (
      <Styled.SearchWrapper>
        <Styled.SearchField
          type="search"
          inputMode="search"
          ref={searchFieldRef}
          value={keyword}
          allowClear
          placeholder="???????????? ???????????????"
          leftContent={{
            icon: 'ic_search_line',
            iconColor: 'buttonNormal',
          }}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          onChange={handleKeywordChange}
        />

        <Styled.BackButton
          onClick={handleClickCancle}
          show={isSearchPage}
        >
          <Text
            typo={Typography.Body1}
            color="textPointed"
          >
            ??????
          </Text>
        </Styled.BackButton>
      </Styled.SearchWrapper>
    )
  }, [
    handleClickCancle,
    handleFocus,
    handleKeyDown,
    handleKeywordChange,
    isSearchPage,
    keyword,
  ])

  const controlItems = useMemo(() => ([
    SearchSegment.Title,
    SearchSegment.Singer,
    SearchSegment.Number,
  ]), [])

  const selectedIndex = useMemo(() => (
    controlItems.findIndex(item => item === searchSegment)
  ), [
    controlItems,
    searchSegment,
  ])

  const handleChangeSearchSegment = useCallback((index) => {
    dispatch(actions.changeSearchSegment({segment: controlItems[index]}))
    searchFieldRef.current?.focus()
  }, [
    controlItems,
    dispatch,
  ])

  const SegmentedControlComponent = useMemo(() => (
    <Styled.SegmentedControlWrapper>
      <SegmentedControl
        contents={controlItems.map((item) => SearchSegmentMap[item])}
        selectedOptionIndex={selectedIndex}
        onChangeOption={handleChangeSearchSegment}
      />
    </Styled.SegmentedControlWrapper>
  ), [
    controlItems,
    handleChangeSearchSegment,
    selectedIndex,
  ])

  return (
    <Styled.Wrapper>
      { HeaderComponent }

      { SearchComponent }

      { isSearchPage && SegmentedControlComponent }
    </Styled.Wrapper>
  )
}

export default withRouter(Navigation)
