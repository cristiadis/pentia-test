import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import routes from 'routes';

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
  margin-left: 73px;
  font-size: inherit;
  box-sizing: border-box;
`;
export default App;
