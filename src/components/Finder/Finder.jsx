import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './Finder.css';

class Finder extends Component {
  componentDidMount() {
    $('.event-link').click(() => {
      $('.Finder').fadeToggle(200);
    });
  }

  render() {
    return (
      <div className="main-container">


        <div className="row appsContainerDiv_data">
          <div className="col-12">
            <div className="container my-5">
              <div className="row search justify-content-center">
                <input type="text" placeholder="Search.." />
              </div>
              <hr />

              <div className="row apps my-3">
                <div className="col-6 col-sm-3 my-4 folder">
                  <Link to="/events" className="event-link">
                    <img src="/images/folder2.svg" style={{ width: '30%' }} alt="img" />
                    <span className="folder-text">
              Event 1
                    </span>
                  </Link>
                </div>
                <div className="col-6 col-sm-3 my-4 folder">
                  <img src="/images/folder2.svg" style={{ width: '30%' }} alt="img" />
                  <span className="folder-text">
            Event 1
                  </span>
                </div>
                <div className="col-6 col-sm-3 my-4 folder">
                  <img src="/images/folder2.svg" style={{ width: '30%' }} alt="img" />
                  <span className="folder-text">
          Event 1
                  </span>
                </div>
                <div className="col-6 col-sm-3 my-4 folder">
                  <img src="/images/folder2.svg" style={{ width: '30%' }} alt="img" />
                  <span className="folder-text">
          Event 1
                  </span>
                </div>
                <div className="col-6 col-sm-3 my-4 folder">
                  <img src="/images/folder2.svg" style={{ width: '30%' }} alt="img" />
                  <span className="folder-text">
           Event 1
                  </span>
                </div>
                <div className="col-6 col-sm-3 my-4 folder">
                  <img src="/images/folder2.svg" style={{ width: '30%' }} alt="img" />
                  <span className="folder-text">
           Event 1
                  </span>
                </div>
                <div className="col-6 col-sm-3 my-4 folder">
                  <img src="/images/folder2.svg" style={{ width: '30%' }} alt="img" />
                  <span className="folder-text">
          Event 1
                  </span>
                </div>
                <div className="col-6 col-sm-3 my-4 folder">
                  <img src="/images/folder2.svg" style={{ width: '30%' }} alt="img" />
                  <span className="folder-text">
           Event 1
                  </span>
                </div>
                <div className="col-6 col-sm-3 my-4 folder">
                  <img src="/images/folder2.svg" style={{ width: '30%' }} alt="img" />
                  <span className="folder-text">
            Event 1
                  </span>
                </div>
                <div className="col-6 col-sm-3 my-4 folder">
                  <img src="/images/folder2.svg" style={{ width: '30%' }} alt="img" />
                  <span className="folder-text">
            Event 1
                  </span>
                </div>
                <div className="col-6 col-sm-3 my-4 folder">
                  <img src="/images/folder2.svg" style={{ width: '30%' }} alt="img" />
                  <span className="folder-text">
            Event 1
                  </span>
                </div>
                <div className="col-6 col-sm-3 my-4 folder">
                  <img src="/images/folder2.svg" style={{ width: '30%' }} alt="img" />
                  <span className="folder-text">
            Event 1
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default Finder;
