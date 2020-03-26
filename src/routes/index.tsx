import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import GlobalStyles from "../styles/globals";
import NavBar from "../components/NavBar";
import ScrollProgressIndicator from "../components/ScrollProgressIndicator";
import ScrollHandler from 'components/ScrollHandler';

const routes = (
  <>
    <GlobalStyles />
    <NavBar />
    <ScrollProgressIndicator />
    <ScrollHandler />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={Home} />
    </Switch>
  </>
);

export default routes;
