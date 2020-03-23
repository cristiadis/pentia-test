import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import GlobalFonts from "../fonts/fonts";
import GlobalStyles from "../styles/globals";
import NavBar from "../components/NavBar";

const routes = (
  <>
    <GlobalFonts />
    <GlobalStyles />
    <NavBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={Home} />
    </Switch>
  </>
);

export default routes;
