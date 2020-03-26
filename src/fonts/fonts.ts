import { createGlobalStyle } from 'styled-components';

import GothamBookWoof from './GothamBook.woff';
import GothamBookWoof2 from './GothamBook.woff2';
import GothamBlackWoof from './GothamBlack.woff';
import GothamBlackWoof2 from './GothamBlack.woff2';

/* THIS FILE IS CURRENTLY NOT USED DUE TO A BUG IN STYLED COMPONENTS:
*  https://github.com/styled-components/styled-components/issues/1593
* */

export default createGlobalStyle`
  @font-face {
    font-family: 'Gotham';
    src: url(${GothamBookWoof2}), url(${GothamBookWoof});
    font-weight: 500;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Gotham';
    src: url(${GothamBlackWoof2}), url(${GothamBlackWoof});
    font-weight: 900;
    font-style: normal;
  }
`;