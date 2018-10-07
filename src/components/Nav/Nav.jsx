import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

// { /* <a className="navbar-brand" href="/finder" id="navbar-finder-button">techOS</a> */ }

const Nav = () => (
  <nav className="navbar navbar-light bg-light">
    <Link to="/finder" id="navbar-finder-button" className="navbar-brand">
      techOS
    </Link>
    <div className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarTimelineDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       Timeline
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarTimelineDropdown" id="timelineDropdown">
        <h2>
          October 26, 2018
        </h2>
        <h5>
         Friday
        </h5>
        <h2>
         10:00
          <small>
         AM
          </small>
        </h2>
        <ul>
                          I
          {' '}
          <li>
            <h6>
              <a href="#event1">
            Event 1
              </a>
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </li>
          <li>
            <h6>
              <a href="#event2">
              Event 1
              </a>
            </h6>
            <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </li>
          <li>
            <h6>
              <a href="#event3">
                Event 1
              </a>
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </li>
        </ul>
        <a href="#fullTimeline">
         See full timeline
        </a>
      </div>
    </div>
    <div className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarUserOptionsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        John Appleseed
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarUserOptionsDropdown" id="userDropdown">
        <a className="dropdown-item" href="#myProfile">
         My Profile
        </a>
        <a className="dropdown-item" href="#userRegisteredEvents">
          Registered Events
        </a>
        <a className="dropdown-item" href="#userRecommendedEvents">
          Recommended Events
        </a>
        <a className="dropdown-item" href="#userLogout">
          Log Out
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
