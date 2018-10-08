import React from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css';

const Contact = () => (
  <div className="jumbotron" id="contactUs-page">
    <h1 className="display-4 text-center" id="contactUs-heading">
      <small>
        <Link to="/">
          <img src="/images/back.png" id="back-btn" />
        </Link>
      </small>
Contact us
    </h1>

    <div className="container text-center">

      <hr className="my-4" />
      <h2>
Marketing
      </h2>
      <ul className="nav justify-content-center">
        <li className="nav-item contact-info-card">
          <div className="card">
            <img className="card-img-top" src="/images/contact/sample-person.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">
Name
              </h5>
              <p className="card-text">
Contact number
              </p>
            </div>
          </div>
        </li>
        <li className="nav-item contact-info-card">
          <div className="card">
            <img className="card-img-top" src="/images/contact/sample-person.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">
Name
              </h5>
              <p className="card-text">
Contact number
              </p>
            </div>
          </div>
        </li>
      </ul>

      <hr className="my-4" />
      <h2>
Hospitality
      </h2>
      <ul className="nav justify-content-center">
        <li className="nav-item contact-info-card">
          <div className="card">
            <img className="card-img-top" src="/images/contact/sample-person.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">
Name
              </h5>
              <p className="card-text">
Contact number
              </p>
            </div>
          </div>
        </li>
        <li className="nav-item contact-info-card">
          <div className="card">
            <img className="card-img-top" src="/images/contact/sample-person.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">
Name
              </h5>
              <p className="card-text">
Contact number
              </p>
            </div>
          </div>
        </li>
      </ul>

      <hr className="my-4" />
      <h2>
Events
      </h2>
      <ul className="nav justify-content-center">
        <li className="nav-item contact-info-card">
          <div className="card">
            <img className="card-img-top" src="/images/contact/sample-person.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">
Name
              </h5>
              <p className="card-text">
Contact number
              </p>
            </div>
          </div>
        </li>
        <li className="nav-item contact-info-card">
          <div className="card">
            <img className="card-img-top" src="/images/contact/sample-person.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">
Name
              </h5>
              <p className="card-text">
Contact number
              </p>
            </div>
          </div>
        </li>
      </ul>

      <hr className="my-4" />
      <h2>
Others
      </h2>
      <ul className="nav justify-content-center">
        <li className="nav-item contact-info-card">
          <div className="card">
            <img className="card-img-top" src="/images/contact/sample-person.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">
Name
              </h5>
              <p className="card-text">
Contact number
              </p>
            </div>
          </div>
        </li>
        <li className="nav-item contact-info-card">
          <div className="card">
            <img className="card-img-top" src="/images/contact/sample-person.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">
Name
              </h5>
              <p className="card-text">
Contact number
              </p>
            </div>
          </div>
        </li>
      </ul>

    </div>

  </div>
);

export default Contact;
