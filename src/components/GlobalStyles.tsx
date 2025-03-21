import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle `
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    max-width: 1080px;
    margin: 0 auto;
  }
`