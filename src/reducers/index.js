import { combineReducers } from 'redux';
import { object } from 'prop-types';
import initialState from './initialState';
import SweetAlert from '../components/SweetAlert';

const jwtDecode = require('jwt-decode');

const user = (state = initialState.user, action) => {
  switch (action.type) {
    case 'SUCCESS_LOGIN':
      localStorage.setItem('token', action.data.data.token);
      return Object.assign({}, state, {
        userData: jwtDecode(action.data.data.token),
        loggedIn: true,
        onboard: action.data.onBoard,
      });

    case 'SIGNUP_REQUIRED':
      localStorage.setItem('token', action.data.data.token);
      return Object.assign({}, state, {
        userData: jwtDecode(action.data.data.token),
        loggedIn: true,
        onboard: false,
      });

    case 'ONBOARD_SUCCESS':
      // Todo:= check the schema of the jwt
      localStorage.setItem('token', action.data.data.token);
      return Object.assign({}, state, {
        userData: jwtDecode(action.data.data.token),
        loggedIn: true,
        onboard: true,
      });

    case 'ONBOARD_FAILURE':
      // TODO:= show alert here to try again and reset the form
      SweetAlert('Try Again', 'error');
      return state;

    case 'USER_REGISTERED_EVENTS_SUCCESS':
      return Object.assign({}, state, {
        registeredEvents: action.data.data.events,
      });

    case 'USER_REGISTERED_EVENTS_FAILURE':
      // TODO:= show alert here
      return Object.assign({}, state, {
        registeredEvents: [],
      });

    default:
      return state;
  }
};

const events = (state = initialState.events, action) => {
  switch (action.type) {
    case 'CATEGORY_EVENTS_SUCCESS':
      return action.data.data.events;

    case 'CATEGORY_EVENTS_FAILURE':
      // TODO:= show alert here to try again
      SweetAlert('Please Try Again', 'error');
      return state;

    default:
      return state;
  }
};

const currentEvents = (state = initialState.currentEvents, action) => {
  switch (action.type) {
    case 'FETCH_CURRENT_EVENTS_SUCCESS':
      return action.data.data.events;

    case 'FETCH_CURRENT_EVENTS_FAILURE':
      // TODO:= show alert here to try again
      SweetAlert('Unable to Fetch Current Events. You Can Try Again', 'error');
      return state;

    default:
      return state;
  }
};

const categories = (state = initialState.categories, action) => {
  switch (action.type) {
    case 'CATEGORIES_FETCH_SUCCESS':
      return action.data.data.categories;

    case 'CATEGORIES_FETCH_FAILURE':
      // TODO:= show alert here to try again
      SweetAlert('Unable to Fetch Categories. You can Try Again', 'error');
      return state;

    default:
      return state;
  }
};

const timeline = (state = initialState.timeline, action) => {
  switch (action.type) {
    case 'TIMELINE_FETCH_SUCCESS':
      return action.data.data;

    case 'TIMELINE_FETCH_FAILURE':
      // TODO:= show alert here to try again
      SweetAlert('Unable to Fetch Timeline. You can Try Again', 'error');
      return state;

    default:
      return state;
  }
};

const facts = (state = initialState.fact, action) => {
  switch (action.type) {
    case 'FETCH_FACTS_SUCCESS':
      return action.data.data.message;

    case 'FETCH_FACTS_FAILURE':
      // TODO:= show alert here to try again
      SweetAlert('Unable to Fetch Facts. Try Again by Reloading the Page', 'error');
      return state;

    default:
      return state;
  }
};

const timestamp = (state = initialState.timestamp, action) => {
  switch (action.type) {
    case 'TIMESTAMP_SUCCESS':
      return action.data.timestamp;

    case 'TIMESTAMP_FAILURE':
      // TODO:= show alert here to try again
      SweetAlert('Some Error Occured. Try Again', 'error');
      return state;

    default:
      return state;
  }
};

const videos = (state = initialState.videos, action) => {
  switch (action.type) {
    case 'FETCH_VIDEOS_SUCCESS':
      return action.data.data;

    case 'FETCH_VIDEOS_FAILURE':
      // TODO:= show alert here to try again
      SweetAlert('Unable to Fetch the Video. Try Again', 'error');
      return state;

    default:
      return state;
  }
};

const loading = (state = initialState.loading, action) => {
  switch (action.type) {
    case 'LOADING_OVER':
      return false;
    case 'LOADING_STARTS':
      return true;
    default:
      return state;
  }
};

const lectures = (state = initialState.lectures, action) => {
  switch (action.type) {
    case 'FETCH_LECTURES_SUCCESS':
      return action.data.data.lectures;
    case 'FETCH_LECTURES_FAILURE':
      return state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user,
  events,
  categories,
  timeline,
  facts,
  videos,
  timestamp,
  currentEvents,
  loading,
  lectures,
});

export default rootReducer;
