import React, { useCallback, useMemo, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { BottomSheet } from '@yourssu/design-system'
import DetailContext from './contexts/DetailContext'

import Inbox from './containers/Inbox'
import Search from './containers/Search.tsx'
import Recent from './containers/Recent'
import Initializer from './containers/Initializer'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Credit from './containers/Credit'
import Detail from './components/Detail'
import { SongType } from './types'
import * as Styled from './App.styled'

const { Provider: DetailProvider } = DetailContext

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
      desktopWidth={500}
    >
      <Detail song={detail && detail}/>
    </BottomSheet>
  ), [
    detail,
    hideDetail,
    show,
  ])

  return (
    <DetailProvider value={{
      detail,
      showDetail,
      hideDetail,
    }}>
      <Styled.Wrapper>
        <Router>
          <Navigation />
          <Route path="/" exact={true} component={Inbox} />
          <Route path="/recent" exact={true} component={Recent} />
          <Route path="/search/:keyword" component={Search} />
          <Route path="/search" exact component={Search} />
          <Route path="/credit" exact component={Credit} />
          <Footer />
          
          { BottomSheetComponent }
          <Initializer />
        </Router>
      </Styled.Wrapper>
    </DetailProvider>
  );
}

export default App;
