import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './Finder.css';
import actions from '../../actions';

const Folder = () => {
  console.log('folder');
  return (
    <div className="col-6 col-sm-3 my-4 folder">
      <Link to="/events" className="event-link">
        <img src="/images/folder2.svg" style={{ width: '30%' }} alt="img" />
        <span className="folder-text">
              Event 1
        </span>
      </Link>
    </div>
  );
};

class Finder extends Component {
  componentDidMount = () => {
    $('.event-link').click(() => {
      $('.Finder').fadeToggle(200);
    });

    const { getEvents } = this.props;
    getEvents();
  }

  render = () => (
    <div className="main-container">
      <div className="row appsContainerDiv_data">
        <div className="col-12">
          <div className="container my-5">
            <div className="row search justify-content-center">
              <input type="text" placeholder="Search.." />
            </div>
            <hr />
            <div className="row apps my-3">
              <Folder />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

const mapStateToProps = state => ({
  events: state.events,
});


const mapDispatchToProps = dispatch => ({
  getEvents: () => {
    dispatch(actions.getEvents());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Finder);
