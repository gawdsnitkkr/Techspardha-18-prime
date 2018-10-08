import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Desktop from './components/Desktop/Desktop';
import Events from './components/Events/Events';

const App = () => (
  <BrowserRouter>
    <Switch>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Desktop} />
        <Route path="/events" component={Events} />
      </div>
    </Switch>
  </BrowserRouter>
);

export default App;
