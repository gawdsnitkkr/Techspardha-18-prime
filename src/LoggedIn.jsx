

import React from 'react';
import Nav from './components/Nav/Nav';
import Desktop from './components/Desktop/Desktop';
import Events from './components/Events/Events';
import Guests from './components/Guests/Guests';
import Contact from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import Sponsers from './components/Sponsers/Sponsers';
import User from './components/User/User';
import DOC from './components/Doc/Doc';

const LoggedIn = () => (
  <div className="loggedIn">
    <Nav />
    <Route exact path="/" component={Desktop} />
    <Route path="/events" component={Events} />
    <Route path="/guestLectures" component={Guests} />
    <Route path="/contactUs" component={Contact} />
    <Route path="/aboutUs" component={AboutUs} />
    <Route path="/sponsers" component={Sponsers} />
    <Route path="/user" component={User} />
    <DOC />
  </div>
);

export default LoggedIn;
