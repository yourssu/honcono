import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import * as Styled from './App.styled'
import { BottomSheetProvider } from '@yourssu/design-system'
import Inbox from './containers/Inbox'
import Search from './containers/Search.tsx'
import Recent from './containers/Recent'
import Navigation from './components/Navigation'
import Initializer from './containers/Initializer'
import Footer from './components/Footer'
import Credit from './containers/Credit'

function App() {
  return (
    <BottomSheetProvider desktopWidth={500}>
      <Styled.Wrapper>
        <Router>
          <Navigation />
          <Route path="/" exact={true} component={Inbox} />
          <Route path="/recent" exact={true} component={Recent} />
          <Route path="/search/:keyword" component={Search} />
          <Route path="/search" exact component={Search} />
          <Route path="/credit" exact component={Credit} />
          <Footer />
          
          <Initializer />
        </Router>
      </Styled.Wrapper>
    </BottomSheetProvider>
  );
}

export default App;
