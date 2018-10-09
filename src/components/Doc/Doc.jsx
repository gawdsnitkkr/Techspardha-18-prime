import React from 'react';
import { Link } from 'react-router-dom';
import './Doc.css';

const DOC = () => (
  <footer className="fixed-bottom" id="dock">
    <div className="container">
      <div className="btn-group bg-light" role="group" aria-label="dockIcons">
        <button type="button" className="btn dock-icon-btn" data-toggle="tooltip" data-placement="top" title="About us">
          <Link to="/aboutUs">
            <img src="/images/doc/aboutus.png" className="dock-icon" alt="icon" />
          </Link>
        </button>
        <button type="button" className="btn dock-icon-btn" data-toggle="tooltip" data-placement="top" title="Exhibitions">
          <a href="#exhibition">
            <img src="/images/doc/exhibition.png" className="dock-icon" alt="icon" />
          </a>
        </button>
        <button type="button" className="btn dock-icon-btn" data-toggle="tooltip" data-placement="top" title="Guest lecture">
          <Link to="/guestLectures">
            <img src="/images/doc/guest.png" className="dock-icon" alt="icon" />
          </Link>
        </button>
        <button type="button" className="btn dock-icon-btn" data-toggle="tooltip" data-placement="top" title="Hackathon">
          <a href="https://techspardha.org/Hackathon/" target="_blank">
            <img src="/images/doc/hackathon.png" className="dock-icon" alt="icon" />
          </a>
        </button>
        <button type="button" className="btn dock-icon-btn" data-toggle="tooltip" data-placement="top" title="Sponsors">
          <Link to="sponsers">
            <img src="/images/doc/sponsor.png" className="dock-icon" alt="icon" />
          </Link>
        </button>
        <button type="button" className="btn dock-icon-btn" data-toggle="tooltip" data-placement="top" title="Contact us">
          <Link to="/contactUs">
            <img src="/images/doc/contact.png" className="dock-icon" alt="icon" />
          </Link>
        </button>
      </div>
    </div>
  </footer>

);

export default DOC;
