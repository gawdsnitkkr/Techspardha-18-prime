import React from 'react';
import './Desktop.css';
import { connect } from 'react-redux';
import actions from '../../actions';

class Desktop extends React.Component {
  componentDidMount = () => {
    const { getFact } = this.props;
    getFact();
  }

  render = () => {
    const { fact } = this.props;

    return (
      <div className="jumbotron" id="desktop-page">
        <div className="container text-center" id="desktop-center">
          <h1 className="display-2" id="main-heading">
Techspardha'18
            {' '}
            <small className="text-muted">
Prime
            </small>
          </h1>
          <h2 className="mb-4">
Come join us this October
          </h2>

          <div className="row justify-content-md-center">
            <div className="col-sm-4">
              <button type="button" className="btn btn-danger">
Sign in
              </button>
            </div>
          </div>

          <hr className="my-4" />
          <blockquote className="blockquote text-center">
            <p className="mb-0 lead">
              {fact}
            </p>
            <footer className="blockquote-footer">
              <cite title="Source Title">
Team Techspardha
              </cite>
            </footer>
          </blockquote>
          <hr className="my-4" />

        </div>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  fact: state.facts,
});


const mapDispatchToProps = dispatch => ({
  getFact: () => {
    dispatch(actions.getFacts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Desktop);
