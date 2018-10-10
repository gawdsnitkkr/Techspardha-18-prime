import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import OnBoarding from './components/OnBoarding/OnBoarding';
import Desktop from './components/Desktop/Desktop';
import Events from './components/Events/Events';
import Guests from './components/Guests/Guests';
import Contact from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import Sponsers from './components/Sponsers/Sponsers';
import User from './components/User/User';
import LoggedIn from './LoggedIn';

const App = () => (
  <BrowserRouter>
    <Switch>
      <div className="App">
        <Route path="/onBoarding" component={OnBoarding} />
        <LoggedIn exact path="/" component={Desktop} />
        <LoggedIn path="/events/:category" component={Events} />
        <LoggedIn path="/guestLectures" component={Guests} />
        <LoggedIn path="/contactUs" component={Contact} />
        <LoggedIn path="/aboutUs" component={AboutUs} />
        <LoggedIn path="/sponsers" component={Sponsers} />
        <LoggedIn path="/user" component={User} />
      </div>
    </Switch>
  </BrowserRouter>
);

export default App;
