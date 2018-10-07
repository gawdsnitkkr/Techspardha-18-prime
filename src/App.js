import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Desktop from './components/Desktop/Desktop';
import Finder from './components/Finder/Finder';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route path="/" component={Desktop} />
          <Route path="/finder" component={Finder} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
