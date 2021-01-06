/** @format */

import React from 'react';

import GlobalStyle from './styles/global';

import dados from './dados';

import Menu from './components/Menu';
import SessaoPersonagem from './components/SessaoPersonagem';

const App: React.FC = () => {
  const personagens = dados;
  return (
    <>
      <GlobalStyle />
      <Menu />

      {personagens.map((personagem, indice) => (
        <SessaoPersonagem
          key={personagem.id}
          {...personagem}
          trocaPosicao={indice % 2 === 1 ? true : false}
        />
      ))}
    </>
  );
};

export default App;
