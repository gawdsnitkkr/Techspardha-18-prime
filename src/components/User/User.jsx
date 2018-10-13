import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../../actions';
import './User.css';

const jwtDecode = require('jwt-decode');

const Event = (props) => {
  console.log('dfsd');
  const { event } = props;
  return (
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {event.eventName}
          </h5>
          <p className="card-text">
            {event.description}
          </p>
          <Link to={`events/${event.eventCategory}`}>
            <button type="button" className="btn btn-primary">
              View event
            </button>
          </Link>
        </div>
      </div>
    </div>

  );
};

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount = () => {
    const { getRegisteredEvents } = this.props;
    getRegisteredEvents();
  }


  render = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      return <Redirect to="/" />;
    }
    if (!jwtDecode(token).name) {
      return <Redirect to="/" />;
    }
    const user = jwtDecode(token);

    const { events } = this.props;
    console.log(events);

    return (
      <div className="jumbotron" id="myProfile-page">
        <h1 className="display-4 text-center" id="contactUs-heading">
          <small>
            <a onClick={() => {this.props.history.goBack()}}>
              <img src="/images/back.png" id="back-btn" alt="img" />
            </a>
          </small>
      My Profile
        </h1>

        <div className="container">

          <hr className="my-4" />
          <img src={user.picture} id="back-btn" alt="img"/>
          <h1 id="user-name">
            {user.name}
          </h1>
          <h3 id="user-college">
            {user.college}
          </h3>
          <h5 id="user-year">
            {user.year}
            {' '}
          year
          </h5>
          <p className="lead">
      Techspardha'18 prime
          </p>

        </div>

        <div className="container text-center">
          <hr className="my-4" />
          <h2 className="mb-4">
          My registered events
          </h2>
          <div className="row">
            {events.length ? events.map(e => <Event event={e} />) : (
              <div className="col-12">
                <h5 className="text-center">
                  No registered events.
                </h5>
              </div>
            )}
          </div>
        </div>

      </div>
    );
  };
}


const mapStateToProps = state => ({
  events: state.user.registeredEvents,
});

const mapDispatchToProps = dispatch => ({
  getRegisteredEvents: () => {
    dispatch(actions.getRegisteredEvents());
  },
});

export default
connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
