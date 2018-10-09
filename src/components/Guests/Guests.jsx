import React from 'react';
import { Link } from 'react-router-dom';
import './Guests.css';

const Guests = () => (
  <div className="jumbotron" id="guest-page">
    <h1 className="display-4 text-center" id="guest-lecture-heading">
      <small>
        <Link to="/">
          <img src="/images/back.png" id="back-btn" alt="img" />
        </Link>
      </small>
      Guest Lectures
    </h1>
    <div className="row">

      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src="/images/guests/download.jpg" alt="guests lectures" />
          <div className="card-header">
            <h3 className="card-title text-center">
            Name
            </h3>
            <div className="row">
              <div className="col-sm-6 text-center">
                <img src="/images/calendar.png" className="guest-icons" alt="img" />
                <h6>
                Date
                </h6>
              </div>
              <div className="col-sm-6 text-center">
                <img src="/images/time.png" className="guest-icons" alt="img" />
                <h6>
                Time
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
            </p>
          </div>
        </div>
      </div>

      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src="/images/guests/download2.jpg" alt="Card cap" />
          <div className="card-header">
            <h3 className="card-title text-center">
            Name
            </h3>
            <div className="row">
              <div className="col-sm-6 text-center">
                <img src="/images/calendar.png" className="guest-icons" alt="img" />
                <h6>
                Date
                </h6>
              </div>
              <div className="col-sm-6 text-center">
                <img src="/images/time.png" className="guest-icons" alt="img" />
                <h6>
                Time
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
            </p>
          </div>
        </div>
      </div>

      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src="/images/guests/download3.jpg" alt="guests" />
          <div className="card-header">
            <h3 className="card-title text-center">
            Name
            </h3>
            <div className="row">
              <div className="col-sm-6 text-center">
                <img src="/images/calendar.png" className="guest-icons" alt="img" />
                <h6>
                Date
                </h6>
              </div>
              <div className="col-sm-6 text-center">
                <img src="/images/time.png" className="guest-icons" />
                <h6>
                Time
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
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>
);

export default Guests;
