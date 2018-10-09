import React from 'react';
import './OnBoarding.css';

const OnBoarding = () => (
  <div className="jumbotron" id="onBoarding-page">
    <div className="text-center">
      <img src="/images/startup.png" alt="img" />
    </div>
    <h1 className="display-4 text-center">
      Welcome aboard
    </h1>
    <h1 className="text-center mb-5">
    Techspardha18 Prime
    </h1>
    <h5 className="text-center">
    To continue we need a few more details about you...
    </h5>
    <div className="container text-center">
      <hr className="my-4" />

      <div className="row justify-content-md-center">
        <div className="col-sm-3">
          <div className="form-group">
            <input type="text" className="form-control" id="user-college" aria-describedby="collegeName" placeholder="College name" />
            <label htmlFor="user-college">
            Your college
            </label>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="form-group">
            <input type="number" className="form-control" id="user-mobile" aria-describedby="collegeName" placeholder="Mobile Number" />
            <label htmlFor="user-mobile">
            Mobile Number
            </label>
          </div>
        </div>
        <div className="col-sm-3">
          <select className="form-control" id="user-year">
            <option>
            First
            </option>
            <option>
            Second
            </option>
            <option>
            Third
            </option>
            <option>
            Fourth
            </option>
          </select>
          <label htmlFor="user-year">
          Your year
          </label>
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className="col-sm-4">
          <button type="button" className="btn btn-danger">
          Continue
          </button>
        </div>
      </div>

      <hr className="my-4" />
    </div>

  </div>
);

export default OnBoarding;
