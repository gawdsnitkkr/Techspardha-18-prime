import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../../actions';
import './Events.css';

const EventCard = () => {
  console.log('event');
  return (
    <div className="col-sm-4">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">
          Event name
          </h3>
          <div className="row">
            <div className="col-sm-4 text-center">
              <img src="/images/calendar.png" className="event-icons" alt="date-icon" />
              <h6>
              Date
              </h6>
            </div>
            <div className="col-sm-4 text-center">
              <img src="/images/time.png" className="event-icons" alt="time-icon" />
              <h6>
              Time
              </h6>
            </div>
            <div className="col-sm-4 text-center">
              <img src="/images/location.png" className="event-icons" alt="date-icon" />
              <h6>
              Location
              </h6>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h5>
          About
          </h5>
          <p className="card-text">
			    	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			    	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			    	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			    	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			    	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			    	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            {' '}
          </p>
          <h5>
          Rules
          </h5>
          <p className="card-text">
            <ul>
              <li>
              Rule 1
              </li>
              <li>
              Rule 2
              </li>
            </ul>
          </p>
          <h5>
          Coordinators
          </h5>
          <p className="card-text">
            <ul>
              <li>
                <h5>
                John
                  <small className="mobile-no">
                  9999999999
                  </small>
                </h5>
              </li>
            </ul>
          </p>
          <a href="#" className="btn btn-primary">
          Register
          </a>
        </div>
      </div>
    </div>
  );
};

class Events extends React.Component {
  componentDidMount = () => {
    const { getEventsByCategory, match } = this.props;
    getEventsByCategory(match.params.category);
  }

  render = () => {
    const { events, match } = this.props;
    console.log(events, 'lol');
    return (
      <div className="jumbotron" id="events-page">
        <h1 className="display-4 text-center">
          <small>
            <Link to="/">
              <img src="/images/back.png" id="back-btn" alt="go_back" />
            </Link>
          </small>
          {match.params.category}
        </h1>
        <div className="form-group">
          <center>
            <input type="text" className="form-control" id="searchBox" aria-describedby="searchBox" placeholder="Search events" />
          </center>
        </div>

        <div className="row">
          {
            events.map(e => (
              <div key={e.eventName}>
                <EventCard event={e} />
              </div>
            ))
          }
        </div>

      </div>
    );
  }
}
const mapStateToProps = state => ({
  events: state.events,
});


const mapDispatchToProps = dispatch => ({
  getEventsByCategory: (category) => {
    dispatch(actions.getEventsByCategory(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
