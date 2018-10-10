import { combineReducers } from 'redux';
import initialState from './initialState';

const jwtDecode = require('jwt-decode');

const user = (state = initialState.user, action) => {
  switch (action.type) {
    case 'SUCCESS_LOGIN':
      return Object.assign({}, state, {
        userData: jwtDecode(action.data.data.token),
        loggedin: true,
        onboard: !!(jwtDecode(action.data.data.token).user.onboard),
      });

    case 'SIGNUP_REQUIRED':
      return Object.assign({}, state, {
        userData: jwtDecode(action.data.data.token),
        loggedIn: true,
        onboard: false,
      });

    case 'ONBOARD_SUCCESS':
    // Todo:= check the schema of the jwt
      return Object.assign({}, state, {
        userData: jwtDecode(action.data.data.token),
        loggedIn: true,
        onboard: true,
      });

    case 'ONBOARD_FAILURE':
      // TODO:= show alert here to try again and reset the form
      return state;

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
});

export default rootReducer;
