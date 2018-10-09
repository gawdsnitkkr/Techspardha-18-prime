import React from 'react';
import { Link } from 'react-router-dom';
import './Doc.css';

const Buttons = (props) => {
  const {
    link, image, title, href,
  } = props;
  if (link) {
    return (
      <Link to={link} className="btn dock-icon-btn" data-toggle="tooltip" data-placement="top" title={title}>
        <img src={image} className="dock-icon" alt="icon" />
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" className="btn dock-icon-btn" data-toggle="tooltip" data-placement="top" title={title}>
      <img src={image} className="dock-icon" alt="icon" />
    </a>
  );
};

const DOC = () => {
  const dockerButtons = [
    {
      link: '/aboutUs',
      title: 'About us',
      image: '/images/doc/aboutus.png',
    },
    {
      link: '/exhibitions',
      title: 'Exhibitions',
      image: '/images/doc/exhibition.png',
    },
    {
      link: '/guestLectures',
      title: 'Guest lectures',
      image: '/images/doc/guest.png',
    },
    {
      href: 'https://techspardha.org/Hackathon/',
      title: 'Hackathon',
      image: '/images/doc/hackathon.png',
    },
    {
      link: '/sponsers',
      title: 'Sponsors',
      image: '/images/doc/sponsor.png',
    },
    {
      link: '/contactUs',
      title: 'Contact us',
      image: '/images/doc/contact.png',
    },
  ];
  return (
    <footer className="fixed-bottom" id="dock">
      <div className="container">
        <div className="btn-group bg-light" role="group" aria-label="dockIcons">
          {
            dockerButtons.map(i => (
              <div key={i.title}>
                <Buttons link={i.link} image={i.image} title={i.title} href={i.href} />
              </div>
            ))
          }
        </div>
      </div>
    </footer>
  );
};

export default DOC;
