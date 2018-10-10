import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import Finder from '../Finder/Finder';
import './Nav.css';


const DropDown = () => {
  console.log('sdf');
  return (
    <div className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarUserOptionsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            John Appleseed
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarUserOptionsDropdown" id="userDropdown">
        <Link className="dropdown-item" to="/user">
              My Profile
        </Link>
        <a className="dropdown-item" href="#userLogout">
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
  }

  render() {
    const { loggedIn, onboard } = this.props;
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
                <li>
                  <h6>
                    <a href="#event1">
                    Event 1
                    </a>
                  </h6>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                  </p>
                </li>
                <li>
                  <h6>
                    <a href="#event2">
                    Event 1
                    </a>
                  </h6>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                  </p>
                </li>
                <li>
                  <h6>
                    <a href="#event3">
                    Event 1
                    </a>
                  </h6>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                  </p>
                </li>
              </ul>
              <a href="#fullTimeline">
              See full timeline
              </a>
            </div>
          </div>
          {
            (loggedIn && onboard) ? <DropDown /> : <div />
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
});

export default connect(mapStateToProps)(Nav);
