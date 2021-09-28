import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Footer} from '../screens/MainScreen/Components/Footer';
import {FavoriteScreen} from '../screens/FavoriteScreen';
import {MainScreen} from '../screens/MainScreen';

export const Root = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <>
              <MainScreen />
              <Footer />
            </>
          )}
        />
        <Route exact path="/favorite" component={FavoriteScreen} />
      </Switch>
    </Router>
  );
};
