import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Desktop from './components/Desktop/Desktop';
import Finder from './components/Finder/Finder';


const App = () => (
  <BrowserRouter>
    <Switch>
      <div className="App">
        <Nav />
        <Route path="/" component={Desktop} />
        <Route path="/finder" component={Finder} />
      </div>
    </Switch>
  </BrowserRouter>
);

export default App;
