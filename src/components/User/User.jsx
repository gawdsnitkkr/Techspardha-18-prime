import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './User.css';

const jwtDecode = require('jwt-decode');

const User = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Redirect to="/" />;
  }
  if (!jwtDecode(token).name) {
    return <Redirect to="/" />;
  }
  const user = jwtDecode(token);

  return (
    <div className="jumbotron" id="myProfile-page">
      <h1 className="display-4 text-center" id="contactUs-heading">
        <small>
          <Link to="/">
            <img src="/images/back.png" id="back-btn" alt="img" />
          </Link>
        </small>
      My Profile
      </h1>

      <div className="container">

        <hr className="my-4" />
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
      Techspardha18 prime
        </p>

      </div>

      <div className="container text-center">
        <hr className="my-4" />
        <h2 className="mb-4">
      My registered events
        </h2>
        <div className="row">

          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
              Card title
                </h5>
                <p className="card-text">
              Some quick example text to build on the card title and
              make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
              View event
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
              Card title
                </h5>
                <p className="card-text">
              Some quick example text to build on the card title and
              make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
              View event
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
              Card title
                </h5>
                <p className="card-text">
              Some quick example text to build on the card title
              and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
              View event
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
              Card title
                </h5>
                <p className="card-text">
              Some quick example text to build on the card title and
              make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
              View event
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default User;
