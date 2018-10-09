import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import DOC from './components/Doc/Doc';

const LoggedIn = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <div>
        <Nav />
        <Component {...matchProps} />
        <DOC />
      </div>
    )}
  />
);

export default LoggedIn;
