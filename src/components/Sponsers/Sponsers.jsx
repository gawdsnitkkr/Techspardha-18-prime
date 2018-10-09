import React from 'react';
import { Link } from 'react-router-dom';
import './Sponsers.css';


const Sponsor = (props) => {
  const { sponsor } = props;
  return (
    <li className="nav-item">
      <a className="nav-link " href="#">
        <img src={sponsor.image} className="sponsor-icons" alt="img" />
      </a>
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
        {data.sponsors.map(sponsor => (
          <div key={sponsor.image}>
            <Sponsor sponsor={sponsor} />
          </div>
        ))}
      </ul>
      <hr className="my-4" />
    </div>
  );
};


const Sponsers = () => {
  const SectionData = [
    {
      section: 'Title sponsor',
      sponsors: [
        {
          image: '/images/sponsers/1290.png',
        },
      ],
    },
    {
      section: 'Associate partners',
      sponsors: [
        {
          image: '/images/sponsers/Nivea_Logo.png',
        },
      ],
    },
  ];
  return (
    <div className="jumbotron" id="sponsors-page">
      <h1 className="display-4 text-center" id="sponsor-heading">
        <small>
          <Link to="/">
            <img src="/images/back.png" id="back-btn" alt="back button" />
          </Link>
        </small>
      Sponsors
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

export default Sponsers;
