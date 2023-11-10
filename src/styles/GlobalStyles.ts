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

input {
  font: inherit;
}

input[type="checkbox"] {
  width: 18px;
  height: 18px;
}

button {
  border: none;
  background-color: transparent;
  font: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}
`;

export default GlobalStyle;
