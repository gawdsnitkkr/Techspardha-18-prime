import fetch from 'node-fetch';
import config from '../config';

const jwtDecode = require('jwt-decode');

const login = (idToken) => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.body = JSON.stringify({ idToken });
  reqOptions.method = 'POST';
  return fetch(`${config.api.url}/login`, reqOptions)
    .then(response => response.json())
    .then((user) => {
      if (user && user.token) {
        sessionStorage.setItem('user', JSON.stringify(user));
      }
      return user;
    });
};

const signup = (data) => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.headers.Authorization = localStorage.getItem('token');
  reqOptions.body = JSON.stringify(data);
  reqOptions.method = 'PUT';
  return fetch(`${config.api.url}/user`, reqOptions)
    .then(response => response.json())
    .then(user => user);
};

const events = () => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.method = 'GET';
  return fetch(`${config.api.url}/events`, reqOptions)
    .then(response => response.json())
    .then(events => events);
};

const categories = () => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.method = 'GET';
  return fetch(`${config.api.url}/events/categories`, reqOptions)
    .then(response => response.json())
    .then(categories => categories);
};

const timeline = () => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.method = 'GET';
  return fetch(`${config.api.url}/events/timeline`, reqOptions)
    .then(response => response.json())
    .then(timeline => timeline);
};

const postEvents = (data) => {
  const reqOptions = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  reqOptions.body = JSON.stringify(data);
  reqOptions.method = 'POST';
  return fetch(`${config.api.url}/events`, reqOptions)
    .then(response => response.json())
    .then(postedEvents => postedEvents);
};

const registeredEvents = () => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.method = 'GET';
  reqOptions.headers.Authorization = localStorage.getItem('token');
  return fetch(`${config.api.url}/user/event`, reqOptions)
    .then(response => response.json())
    .then(events => events);
};

const registerEvent = (data) => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.headers.Authorization = localStorage.getItem('token');
  reqOptions.body = JSON.stringify(data);
  reqOptions.method = 'PUT';
  return fetch(`${config.api.url}/user/event`, reqOptions)
    .then(response => response.json())
    .then(bool => bool);
};

const getFacts = () => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.method = 'GET';
  return fetch(`${config.api.url}/facts`, reqOptions)
    .then(response => response.json())
    .then(facts => facts);
};

const getVideos = () => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.method = 'GET';
  return fetch(`${config.api.url}/videos`, reqOptions)
    .then(response => response.json())
    .then(videos => videos);
};

const query = (data) => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.method = 'POST';
  reqOptions.body = JSON.stringify(data);
  return fetch(`${config.api.url}/query`, reqOptions)
    .then(response => response.json())
    .then(result => result);
};

const timestamp = () => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.method = 'GET';
  return fetch(`${config.api.url}/timestamp`, reqOptions)
    .then(response => response.json())
    .then(timestamp => timestamp);
};

const getEventsByCategory = (categoryName) => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.method = 'GET';
  return fetch(`${config.api.url}/events/description?eventCategory=${categoryName}`, reqOptions)
    .then(response => response.json())
    .then(events => events);
};

const getCurrentEvents = (timestamp) => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.method = 'GET';
  return fetch(`${config.api.url}/timestamp/events?timestamp=${timestamp}`, reqOptions)
    .then(response => response.json())
    .then(events => events);
};

const getGuestLectures = () => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.method = 'GET';
  return fetch(`${config.api.url}/lectures`, reqOptions)
    .then(response => response.json())
    .then(lectures => lectures);
};

export default {
  login,
  signup,
  events,
  categories,
  timeline,
  postEvents,
  registeredEvents,
  registerEvent,
  getFacts,
  getVideos,
  query,
  timestamp,
  getEventsByCategory,
  getCurrentEvents,
  getGuestLectures,
};
