import React from 'react';

import Home from './containers/Home';
import * as Styled from './App.styled'

function App() {
  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Home />
      </Styled.Content>
    </Styled.Wrapper>
  );
}

export default App;
