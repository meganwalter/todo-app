import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../theme/global";
import theme from "../../theme";
import { ContentContainer } from './style';

const Layout = props => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContentContainer>{props.children}</ContentContainer>
    </ThemeProvider>
  </>
);

export default Layout;
