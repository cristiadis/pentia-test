import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

import { white, primary } from 'styles/colors';
import { baseSize, pxToRem } from 'styles';

const globalStyles = createGlobalStyle`
  ${styledNormalize}
  
  html, body {
    height: 100%;
    margin: 0;
    font-family: 'Gotham';
  }

  body {
    background-color: ${white};
    color: ${primary};
    margin: 0;
    font-size: 17px;
    line-height: 150%;
    box-sizing: border-box;
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
  }
  
  button {
    appearance: none;
    background: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
    padding: 0;
  }
`;

export default globalStyles;
