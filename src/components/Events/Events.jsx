import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
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
  const formatDate = (time) => {
    const currentDate = new Date(time);
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}`;
    return formattedDate;
  };
  const formatTime = (time) => {
    const currentDate = new Date(time);
    const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    return formattedTime;
  };

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
                formatDate(event.startTime)
              }
              <br />
                to
              <br />
              {
                formatDate(event.endTime)
              }
            </h6>
          </div>
          <div className="col-4 text-center">
            <img src="/images/time.png" className="event-icons" alt="time-icon" />
            <h6>
              {
                formatTime(event.startTime)
              }
              <br />
                to
              <br />
              {
                formatTime(event.endTime)
              }
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
          {event.description}
        </p>
        <h5>
          Rules
        </h5>
        <p className="card-text">
          <ul>
            {
              event.rules ? event.rules.map(r => (
                <li>
                  {r}
                </li>
              )) : (
                <li>
No Rules
                </li>
              )
            }
          </ul>
        </p>
        <h5>
          Coordinators
        </h5>
        <p className="card-text">
          <ul>

            {
              event.coordinators ? event.coordinators.map(c => (
                <li>
                  <h5>
                    {c.coordinator_name}
                    <small className="mobile-no">
                      {c.coordinator_number}
                    </small>
                  </h5>
                </li>
              )) : (
                <li>
                  {' '}
No Coordinators
                  {' '}
                </li>
              )
            }
          </ul>
        </p>
        {
          registeredEvents.find(x => x.eventName === event.eventName) ? (
            <button type="button" className="btn btn-success disabled mr-1 mt-1">
              Registered
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary mr-1 mt-1"
              onClick={(e) => {
                e.preventDefault(); checkUser(registerEvent, event.eventCategory, event.eventName, history);
              }}
            >
              Register
            </button>
          )
        }
        {
          event.file && event.file !== '' ? (
            <a href={event.file} target="_blank" className="btn btn-danger mt-1">
          View More
            </a>
          ) : null
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

    if ($('.search-result').is(':empty')) {
      $('.search-result').append('<div class="no-result">No Result Found</div>');
    } else {
      $('.no-result').remove();
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
      <div id="loader" style={{height: '100vh'}}>
        <div className="containing">
          <div className="dot dot-1" />
          <div className="dot dot-2" />
          <div className="dot dot-3" />
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" />
            </filter>
          </defs>
        </svg>
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
                    <EventCard event={e} rules={e.rules} registerEvent={registerEvent} registeredEvents={registeredEvents} history={history} />
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
