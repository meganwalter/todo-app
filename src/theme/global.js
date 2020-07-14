import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  @import url('https://fonts.googleapis.com/css?family=Lato:700i,700,300i,300|Roboto:700,700i,400i,400');

  * {
    font-family: Lato, 'Lucida Grande', Tahoma, Sans-Serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, p {
    text-rendering: optimizeLegibility;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #0b0c10;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;
