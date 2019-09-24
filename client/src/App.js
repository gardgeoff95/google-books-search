import React from 'react';

import './App.css';
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import Searchbar from "./components/Searchbar/Searchbar"
function App() {
  return (
    <Wrapper>
      <Header />
      <Searchbar />
    </Wrapper>
  );
}

export default App;
