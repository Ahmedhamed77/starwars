import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {FavoriteScreen} from '../screens/FavoriteScreen';
import {MainScreen} from '../screens/MainScreen';

export const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>
        <Route exact path="/favorite">
          <FavoriteScreen />
        </Route>
      </Switch>
    </Router>
  );
};
