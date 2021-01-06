/** @format */

import React from 'react';

import GlobalStyle from './styles/global';

import Menu from './components/Menu';
import SessaoPersonagem from './components/SessaoPersonagem';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <SessaoPersonagem />
    </>
  );
};

export default App;
