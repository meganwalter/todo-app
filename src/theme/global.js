import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  * {
    font-family: 'Roboto', Sans-Serif;
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
