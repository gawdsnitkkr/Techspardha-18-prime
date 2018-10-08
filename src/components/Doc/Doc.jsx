import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Doc.css';

const DOC = () => (
  <footer className="fixed-bottom bg-light" id="dock">
    <div className="container">
      <div className="btn-group" role="group" aria-label="dockIcons">
        <button type="button" className="btn dock-icon-btn" data-toggle="tooltip" data-placement="top" title="About us">
          <a href="#aboutus">
            <img src="/images/doc/aboutus.png" className="dock-icon" />
          </a>
        </button>
        <button type="button" className="btn dock-icon-btn" data-toggle="tooltip" data-placement="top" title="Exhibitions">
          <a href="#exhibition">
            <img src="/images/doc/exhibition.png" className="dock-icon" />
          </a>
        </button>
        <button type="button" className="btn dock-icon-btn" data-toggle="tooltip" data-placement="top" title="Guest lecture">
          <a href="#guestLecture">
            <Link to="/guestLectures">
              <img src="/images/doc/guest.png" className="dock-icon" />
            </Link>
          </a>
        </button>
        <button type="button" className="btn dock-icon-btn" data-toggle="tooltip" data-placement="top" title="Hackathon">
          <a href="#hackathon">
            <img src="/images/doc/hackathon.png" className="dock-icon" />
          </a>
        </button>
        <button type="button" className="btn dock-icon-btn" data-toggle="tooltip" data-placement="top" title="Sponsors">
          <a href="#sponsor">
            <img src="/images/doc/sponsor.png" className="dock-icon" />
          </a>
        </button>
        <button type="button" className="btn dock-icon-btn" data-toggle="tooltip" data-placement="top" title="Contact us">
          <a href="#contactUs">
            <img src="/images/doc/contact.png" className="dock-icon" />
          </a>
        </button>
      </div>
    </div>
  </footer>

);

export default DOC;
