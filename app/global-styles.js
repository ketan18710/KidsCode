import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    color: red;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

`;

export default GlobalStyle;
