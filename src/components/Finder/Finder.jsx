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
      <Link to={`/events/${category}`} className="category-link" style={{ textTransform: 'capitalize' }}>
        <img src="/images/folder.png" alt="folder icon" className="finder-icon" />
        <span>
          <p className="finder-labels">
            {category}
          </p>
        </span>
      </Link>
    </li>
  );
};

class Finder extends Component {
  constructor(props) {
    super(props);
    this.state = { searchFilter: '' };
  }

  componentDidMount = () => {
    $('.category-link').click(() => {
      $('.Finder').fadeToggle(200);
    });

    const { getCategories } = this.props;
    getCategories();
  }

  componentDidUpdate() {
    if ($('.search-result').is(':empty')) {
      $('.search-result').append('<div class="no-result">No Result Found</div>');
    } else {
      $('.no-result').remove();
    }
  }

  render = () => {
    const { categories } = this.props;
    return (
      <div className="jumbotron" id="finder-page">
        <h1 className="display-4 text-center" id="finder-heading">
          Categories
        </h1>
        <div className="form-group">
          <center>
            <input type="text" className="form-control" id="searchBox" aria-describedby="searchBox" placeholder="Search events" value={this.state.searchFilter} onChange={(e) => { this.setState({ searchFilter: e.target.value }); }} />
          </center>
        </div>
        <hr className="my-4" />

        <div className="container text-center row">
          <ul className="nav justify-content-center search-result">
            {
              categories.map((c) => {
                const re = new RegExp(`^${this.state.searchFilter}`, 'i');
                const str = c;
                if (str.match(re)) {
                  return (
                    <div key={c} className="col-3">
                      <Folder category={c} />
                    </div>
                  );
                }
              })
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
