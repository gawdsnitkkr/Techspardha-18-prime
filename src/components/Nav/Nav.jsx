import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import Finder from '../Finder/Finder';
import './Nav.css';
import actions from '../../actions';
import Clock from './Clock';

const jwtDecode = require('jwt-decode');

const Event = (props) => {
  const { event } = props;
  return (
    <li>
      <h6>
        <Link to={`/events/${event.eventDetails.eventCategory}`}>
          {event.eventDetails.eventName}
        </Link>
      </h6>
      <h6>
        {new Date(event.eventDetails.startTime).toDateString()}
      </h6>
      <p>
        {event.eventDetails.description}
      </p>
    </li>
  );
};

const DropDown = (props) => {
  const { user } = props;
  return (
    <div className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarUserOptionsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="d-none d-sm-inline">
          {user.name}
        </span>
        <img src={user.picture} alt="img" className="d-inline d-sm-none user-pic-nav" />
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarUserOptionsDropdown" id="userDropdown">
        <Link className="dropdown-item" to="/user">
          My Profile
        </Link>
        <a className="dropdown-item" href="#userLogout" onClick={(e) => { e.preventDefault(); localStorage.clear(); window.location.reload(); }}>
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
    const {
      loggedIn, onboard, currentEvents, timestamp,
    } = this.props;
    const upComingEventsArray = currentEvents.filter(x => x.status === 'Upcoming');
    const liveEventsArray = currentEvents.filter(x => x.status === 'LIVE!');
    upComingEventsArray.sort((a, b) => a.eventDetails.startTime - b.eventDetails.startTime);
    liveEventsArray.sort((a, b) => a.eventDetails.startTime - b.eventDetails.startTime);

    return (
      <div>
        <nav className="navbar fixed-top navbar-light bg-light">
          <a className="navbar-brand" id="navbar-finder-button">
            <span className="d-none d-sm-inline">
              techOS
            </span>
            <img src="/images/apps.png" alt="img" className="d-block d-sm-none" />
          </a>
          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarTimelineDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="d-none d-sm-inline">
                Timeline
              </span>
              <img src="/images/time.png" alt="img" className="d-inline d-sm-none" />
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarTimelineDropdown" id="timelineDropdown">
              <Clock />
              <h5>
                Live Events
              </h5>
              <ul>
                {
                  liveEventsArray.length ? liveEventsArray.map(e => (
                    <div key={e.eventDetails.eventName}>
                      <Event event={e} />
                    </div>
                  )) : (
                    <div>
                        No current live events
                    </div>
                  )
                }
              </ul>
              <div className={upComingEventsArray.length ? '' : 'd-none'}>
                <h5>
                Upcoming Events
                </h5>
                <ul>
                  {
                  upComingEventsArray.map(e => (
                    <div key={e.eventDetails.eventName}>
                      <Event event={e} />
                    </div>
                  ))
                }
                </ul>
              </div>
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
  timestamp: state.timestamp,
});

const mapDispatchToProps = dispatch => ({
  getCurrentEvents: () => {
    dispatch(actions.getTimestamp());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
