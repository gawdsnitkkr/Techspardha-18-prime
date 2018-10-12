import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = props => (
  <div className="jumbotron" id="aboutUs-page">
    {/* HEADING */}
    <h1 className="display-4 text-center" id="aboutUs-heading">
      <small>
        <a
          onClick={() => {
            props.history.goBack();
          }}
        >
          <img src="/images/back.png" id="back-btn" alt="back button" />
        </a>
      </small>
      About us
    </h1>

    {/* CONTENT */}
    <div className="container text-center">
      <hr className="my-4" />
      <h2>
Techspardha
      </h2>
      <p className="lead">
        Techspardha is the Techno-Managerial Festival of NIT Kurukshetra which started in 1995 as
        'Technospect' (later changed to "Literati"). It has a variety of events (60+) ranging from
        paper presentations, robotics software development, aero-modelling, quizzes to managerial
        events. The year 2013 marked the Golden-Jubilee of NIT Kurukshetra and thus the mega
        techno-managerial festival was re-christened "TECHSPARDHA".
      </p>

      <hr className="my-4" />
      <h3>
        <img src="/images/code.png" className="credit-icons" alt="code icon" />
        {' '}
with
        {' '}
        <img src="/images/heart.png" className="credit-icons" alt="heart icon" />
      </h3>
    </div>
  </div>
);

export default AboutUs;
