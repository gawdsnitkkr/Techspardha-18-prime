import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import Finder from '../Finder/Finder';
import './Nav.css';
import actions from '../../actions';

const jwtDecode = require('jwt-decode');


const Event = (props) => {
  const { event } = props;
  console.log(event);
  return (
    <li>
      <h6>
        <a href="#event1">
          {event.eventDetails.eventName}
        </a>
      </h6>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam
      </p>
    </li>
  );
};

const DropDown = (props) => {
  const { user } = props;
  return (
    <div className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarUserOptionsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {user.name}
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarUserOptionsDropdown" id="userDropdown">
        <Link className="dropdown-item" to="/user">
              My Profile
        </Link>
        <a className="dropdown-item" href="#userLogout" onClick={(e) => { e.preventDefault(); localStorage.clear(); }}>
              Log Out
        </a>
      </div>
    </div>
  );
};

class Nav extends React.Component {
  componentDidMount() {
    $('#navbar-finder-button').click(() => {
      $('.Finder').fadeToggle(200);
    });

    const { getCurrentEvents } = this.props;
    getCurrentEvents();
  }

  render() {
    const { loggedIn, onboard, currentEvents } = this.props;
    return (
      <div>
        <nav className="navbar fixed-top navbar-light bg-light">
          <a className="navbar-brand" id="navbar-finder-button">
            techOS
          </a>
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
                {
                  currentEvents.map(e => (
                    <div key={e.eventDetails.eventName}>
                      <Event event={e} />
                    </div>
                  ))
                }
              </ul>
              <a href="#fullTimeline">
              See full timeline
              </a>
            </div>
          </div>
          {
            ((loggedIn && onboard) || (localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')).name : null)) ? <DropDown user={jwtDecode(localStorage.getItem('token'))} /> : <div />
          }
        </nav>
        <div className="Finder">
          <Finder />
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  onboard: state.user.onboard,
  loggedIn: state.user.loggedIn,
  currentEvents: state.currentEvents,
});

const mapDispatchToProps = dispatch => ({
  getCurrentEvents: () => {
    dispatch(actions.getTimestamp());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
