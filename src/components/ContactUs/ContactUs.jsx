import React from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css';

const People = (props) => {
  const { person } = props;
  return (
    <li className="nav-item contact-info-card">
      <div className="card">
        <img className="card-img-top" src={person.image} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">
            {person.name}
          </h5>
          <p className="card-text">
            {person.number}
          </p>
        </div>
      </div>
    </li>
  );
};

const Section = (props) => {
  const { data } = props;
  return (
    <div>
      <h2>
        {data.section}
      </h2>
      <ul className="nav justify-content-center">
        {data.people.map(person => (
          <div key={person.name}>
            <People person={person} />
          </div>
        ))}
      </ul>
      <hr className="my-4" />
    </div>
  );
};

const Contact = () => {
  const SectionData = [
    {
      section: 'Marketing',
      people: [
        {
          name: 'Albert',
          number: '9729778862',
          image: '/images/contact/sample-person.jpg',
        },
        {
          name: 'Albert3',
          number: '9729778862',
          image: '/images/contact/sample-person.jpg',
        },
      ],
    },
    {
      section: 'Development',
      people: [
        {
          name: 'Albert1',
          number: '9729778862',
          image: '/images/contact/sample-person.jpg',
        },
      ],
    },
  ];
  return (
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
        {
          SectionData.map(s => (
            <div key={s.section}>
              <Section data={s} />
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default Contact;
