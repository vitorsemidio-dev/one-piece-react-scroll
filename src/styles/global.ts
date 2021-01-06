/** @format */

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  html, body, #root {
    min-height: 100vh;
  }
  
  body {
    background-color: #FEDB9B;
    font-family: 'Nunito', sans-serif;
    font-size: 24px;
    font-weight: bold;
  }

  ul li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

`;

export default GlobalStyle;
