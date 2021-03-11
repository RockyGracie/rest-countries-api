// import { useState } from 'react';

import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Search from './components/Search';
import Countries from './components/Countries';

const App = () => {



  return (
    <>
      <GlobalStyle />
      <Header />
      <Search />
      <Countries />
    </>
  );
};

export default App;   