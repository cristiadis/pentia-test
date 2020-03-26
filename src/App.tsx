import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import routes from 'routes';

// Cristian: The fonts are imported separately, and not using createGlobalStyles,
// due to bug in styled-components that causes fonts to be requested again:
// https://github.com/styled-components/styled-components/issues/1593

import 'styles/fonts.css';
import { above, breakpoints } from "./styles/responsive";

const App: React.FunctionComponent = () => {
  return (
    <MainContainer>
      <BrowserRouter>{routes}</BrowserRouter>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 73px;
  font-size: inherit;
  box-sizing: border-box;
  
  ${ above(breakpoints.sm) } {
    margin-top: 0;
    margin-left: 73px;
  }
`;
export default App;
