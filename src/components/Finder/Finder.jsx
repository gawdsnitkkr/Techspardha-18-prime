import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './Finder.css';
import actions from '../../actions';

const Folder = () => {
  console.log('folder');
  return (
    <li className="nav-item finder-folder">
      <Link to="/events" className="category-link">
        <img src="/images/folder.png" />
        <span>
          <p>
Category 1
          </p>
        </span>
      </Link>
    </li>
  );
};

class Finder extends Component {
  componentDidMount = () => {
    $('.category-link').click(() => {
      $('.Finder').fadeToggle(200);
    });

    const { getEvents } = this.props;
    getEvents();
  }

  render = () => (
    <div className="jumbotron" id="finder-page">
      <h1 className="display-4 text-center">
Categories
      </h1>
      <div className="form-group">
        <center>
          <input type="text" className="form-control" id="searchBox" aria-describedby="searchBox" placeholder="Search events" />
        </center>
      </div>
      <hr className="my-4" />

      <div className="container text-center">
        <ul className="nav justify-content-center">
          <Folder />
        </ul>
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
