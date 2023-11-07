import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

body,
h1,
h2 {
  margin: 0;
}

html {
}

body {
  font-family: ${({ theme }) => theme.typography.mainFontFamily};
  font-size: ${({ theme }) => theme.typography.cardTextSize};
  color: ${({ theme }) => theme.color.mainFontColor};
  background-color: ${({ theme }) => theme.color.containerBackground};
}

ul {
  list-style: none;
  margin-top: 0;
  padding: 0;
}
`;

export default GlobalStyle;
