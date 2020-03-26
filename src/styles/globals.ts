import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

import { gray, primary } from 'styles/colors';

const globalStyles = createGlobalStyle`
  ${styledNormalize}
  
  html, body {
    height: 100%;
    margin: 0;
    font-family: 'Gotham', Montserrat, 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
    scrollbar-width: none;
  }

  body {
    background-color: ${gray[200]};
    color: ${primary};
    margin: 0;
    font-size: 17px;
    line-height: 150%;
    box-sizing: border-box;
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow: -moz-scrollbars-none;
    
    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }
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
