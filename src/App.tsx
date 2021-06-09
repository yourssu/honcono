import React, { useCallback, useMemo, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import DetailContext from './contexts/DetailContext'
import Home from './containers/Home'
import * as Styled from './App.styled'
import { SongType } from './types'
import { BottomSheet } from '@yourssu/design-system'
import Detail from './components/Detail'
import Search from './containers/Search.tsx'
import Navigation from './components/Navigation'

const { Provider } = DetailContext

function App() {
  const [detail, setDetail] = useState<SongType | undefined>(undefined)
  const [show, setShow] = useState(false)

  const showDetail = useCallback((song: SongType) => {
    setDetail(song)
    setShow(true)
  }, [])

  const hideDetail = useCallback(() => {
    setShow(false)
  }, [])

  const BottomSheetComponent = useMemo(() => (
    <BottomSheet
      show={show}
      onHide={hideDetail}
    >
      <Detail song={detail && detail}/>
    </BottomSheet>
  ), [
    detail,
    hideDetail,
    show,
  ])

  return (
    <Provider value={{
      detail,
      showDetail,
      hideDetail,
    }}>
      <Styled.Wrapper>
        <Styled.Content>
          <Router>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/search/:keyword" component={Search} />
          </Router>
        </Styled.Content>
      </Styled.Wrapper>

      { BottomSheetComponent }
    </Provider>
  );
}

export default App;
