import { createGlobalStyle } from 'styled-components';

export const mainTheme = {
  black: '#0A0A0A',
  blackLight: '#3A3A3A',
  white: '#F2F2F2',
  grey: '#999999',
};

export const GlobalStyles = createGlobalStyle`
* {
   box-sizing: border-box;
}
body, h1, h2, p {
   margin: 0;
   padding: 0;
   overflow: hidden;
}
body {
   background-color: ${mainTheme.black};
}
`;
