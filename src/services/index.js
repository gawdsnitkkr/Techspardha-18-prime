import fetch from 'node-fetch';
import config from '../config';

const jwtDecode = require('jwt-decode');

const login = (accessToken) => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.body = JSON.stringify({ accessToken });
  reqOptions.method = 'POST';
  return fetch(`${config.api.url}/googleLogin`, reqOptions)
    .then(response => response.json())
    .then((user) => {
      if (user && user.token) {
        sessionStorage.setItem('user', JSON.stringify(user));
      }
      return user;
    });
};

const signup = () => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  // reqOptions.body = JSON.stringify({ accessToken });
  reqOptions.method = 'PUT';
  return fetch(`${config.api.url}/signUp`, reqOptions)
    .then(response => response.json())
    .then(user => user);
};

const events = (accessToken) => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.body = JSON.stringify({ accessToken });
  reqOptions.method = 'GET';
  return fetch(`${config.api.url}/events`, reqOptions)
    .then(response => response.json())
    .then(events => events);
};

const categories = (accessToken) => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.body = JSON.stringify({ accessToken });
  reqOptions.method = 'GET';
  return fetch(`${config.api.url}/categories`, reqOptions)
    .then(response => response.json())
    .then(categories => categories);
};

const timeline = (accessToken) => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.body = JSON.stringify({ accessToken });
  reqOptions.method = 'GET';
  return fetch(`${config.api.url}/events/timeline`, reqOptions)
    .then(response => response.json())
    .then(timeline => timeline);
};

const postEvents = (accessToken) => {
  const reqOptions = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  reqOptions.body = JSON.stringify({ accessToken });
  reqOptions.method = 'POST';
  return fetch(`${config.api.url}/events`, reqOptions)
    .then(response => response.json())
    .then(postedEvents => postedEvents);
};


const registeredEvents = (accessToken) => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.body = JSON.stringify({ accessToken });
  reqOptions.method = 'GET';
  return fetch(`${config.api.url}/user/event`, reqOptions)
    .then(response => response.json())
    .then(events => events);
};

const putEvents = (accessToken) => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.body = JSON.stringify({ accessToken });
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
  // reqOptions.body = JSON.stringify({ accessToken });
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
  // reqOptions.body = JSON.stringify({ accessToken });
  reqOptions.method = 'GET';
  return fetch(`${config.api.url}/videos`, reqOptions)
    .then(response => response.json())
    .then(videos => videos);
};

const query = (accessToken) => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.body = JSON.stringify({ accessToken });
  reqOptions.method = 'POST';
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
  // reqOptions.body = JSON.stringify({ accessToken });
  reqOptions.method = 'GET';
  return fetch(`${config.api.url}/timestamp`, reqOptions)
    .then(response => response.json())
    .then(timestamp => timestamp);
};

export default {
  login,
  signup,
  events,
  categories,
  timeline,
  postEvents,
  registeredEvents,
  putEvents,
  getFacts,
  getVideos,
  query,
  timestamp,
};
