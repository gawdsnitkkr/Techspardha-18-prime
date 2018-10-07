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

export default {
  login,
};
