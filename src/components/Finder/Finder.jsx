import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './Finder.css';
import actions from '../../actions';

const Folder = (props) => {
  const { category } = props;
  return (
    <li className="nav-item finder-folder">
      <Link to={`/events/${category}`} className="category-link">
        <img src="/images/folder.png" alt="folder icon" />
        <span>
          <p>
            {category}
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

    const { getCategories } = this.props;
    getCategories();
  }

  render = () => {
    const { categories } = this.props;
    return (
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
            {
              categories.map(c => (
                <div key={c}>
                  <Folder category={c} />
                </div>
              ))
            }
          </ul>
        </div>
      </div>


    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});


const mapDispatchToProps = dispatch => ({
  getCategories: () => {
    dispatch(actions.getCategories());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Finder);
