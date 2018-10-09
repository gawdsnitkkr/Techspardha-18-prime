import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import OnBoarding from './components/OnBoarding/OnBoarding';
import LoggedIn from './LoggedIn';

const App = () => (
  <BrowserRouter>
    <Switch>
      <div className="App">
        <Route exact path="/" component={LoggedIn} />
        <Route path="/onBoarding" component={OnBoarding} />
      </div>
    </Switch>
  </BrowserRouter>
);

export default App;
