import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import SweetAlert from '../SweetAlert';
import './Events.css';

const jwtDecode = require('jwt-decode');

const checkUser = (registerEvent, eventCategory, eventName, history) => {
  if ((localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')).name : null)) {
    registerEvent(eventCategory, eventName);
  } else {
    SweetAlert('Please Login to Register for an event', 'error');
    history.push('/');
  }
};

const EventCard = (props) => {
  const {
    event, registerEvent, registeredEvents, history,
  } = props;
  console.log(props);
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title" style={{ textTransform: 'capitalize' }}>
          {event.eventName}
        </h3>
        <div className="row">
          <div className="col-4 text-center">
            <img src="/images/calendar.png" className="event-icons" alt="date-icon" />
            <h6>
              {
                () => {
                  const currentDate = new Date(event.startTime);
                  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}, ${currentDate.getHours()}:${currentDate.getMinutes()}`;
                  return formattedDate;
                }
              }
              <br />
                to
              <br />
              {
                () => {
                  const currentDate = new Date(event.endTime);
                  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}, ${currentDate.getHours()}:${currentDate.getMinutes()}`;
                  return formattedDate;
                }
              }
            </h6>
          </div>
          <div className="col-4 text-center">
            <img src="/images/time.png" className="event-icons" alt="time-icon" />
            <h6>
              {event.startTime}
              <br />
                to
              <br />
              {event.endTime}
            </h6>
          </div>
          <div className="col-4 text-center">
            <img src="/images/location.png" className="event-icons" alt="date-icon" />
            <h6>
              {event.venue}
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
        {
          registeredEvents.find(x => x.eventName === event.eventName) ? (
            <button type="button" className="btn btn-success disabled">
              Registerd
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault(); checkUser(registerEvent, event.eventCategory, event.eventName, history);
              }}
            >
              Register
            </button>
          )
        }
      </div>
    </div>

  );
};

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: this.props.match.params.category, loading: true, searchFilter: '' };
  }

  componentDidMount = () => {
    const { getEventsByCategory, match, getRegisteredEvents } = this.props;
    getEventsByCategory(match.params.category);
    getRegisteredEvents();
  }

  componentDidUpdate() {
    const { loading, getEventsByCategory, match } = this.props;
    const { url } = this.state;
    if (url !== match.params.category) {
      this.setState({ url: match.params.category });
      getEventsByCategory(match.params.category);
      loading(true);
    }
  }

  searchEnter = (e) => {
    this.setState({ searchFilter: e.target.value });
  }

  render = () => {
    const {
      events, match, registerEvent, registeredEvents, history, isLoading,
    } = this.props;
    console.log(events, 'lol');
    return isLoading ? (
      <div id="circle_container">
        <div id="load_wrapper">
          <div id="sun" />
          <div id="moon" />
        </div>
      </div>
    ) : (
      <div className="jumbotron" id="events-page">
        <h1 className="display-4 text-center" style={{ textTransform: 'capitalize' }} id="event-heading">
          <small>
            <a onClick={() => { history.goBack(); }}>
              <img src="/images/back.png" id="back-btn" alt="go_back" />
            </a>
          </small>
          {match.params.category}
        </h1>
        <div className="form-group">
          <center>
            <input type="text" className="form-control" id="searchBox" aria-describedby="searchBox" placeholder="Search events" onChange={this.searchEnter} value={this.state.searchFilter} />
          </center>
        </div>

        <div className="row">
          {
            events.map((e) => {
              const re = new RegExp(`^${this.state.searchFilter}`, 'i');
              const str = e.eventName;
              if (str.match(re)) {
                return (
                  <div key={e.eventName} className="col-sm-4">
                    <EventCard event={e} registerEvent={registerEvent} registeredEvents={registeredEvents} history={history} />
                  </div>
                );
              }
            })
          }
        </div>

      </div>

    );
  }
}
const mapStateToProps = state => ({
  events: state.events,
  registeredEvents: state.user.registeredEvents,
  isLoading: state.loading.isLoading,
});


const mapDispatchToProps = dispatch => ({
  getEventsByCategory: (category) => {
    dispatch(actions.getEventsByCategory(category)).then((msg) => {
      dispatch(actions.loading(false));
    });
  },
  registerEvent: (eventCategory, eventName) => {
    dispatch(actions.registerEvent({ eventCategory, eventName }));
  },
  getRegisteredEvents: () => {
    dispatch(actions.getRegisteredEvents());
  },
  loading: (isLoading) => {
    dispatch(actions.loading(isLoading));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
