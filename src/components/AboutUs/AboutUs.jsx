import React from 'react';
import { connect } from 'react-redux';
import './AboutUs.css';
import actions from '../../actions';

class AboutUs extends React.Component {
  componentDidMount() {
    const { getAbout } = this.props;
    getAbout();
  }

  render() {
    const { about } = this.props;
    return (
      <div className="jumbotron" id="aboutUs-page">
        {/* HEADING */}
        <h1 className="display-4 text-center" id="aboutUs-heading">
          <small>
            <a
              onClick={() => {
                this.props.history.goBack();
              }}
            >
              <img src="/images/back.png" id="back-btn" alt="back button" />
            </a>
          </small>
          About us
        </h1>
        <div className="container text-center">
          <hr className="my-4" />
          <h2>
            Techspardha
          </h2>
          <p className="lead">
            Techspardha is the Techno-Managerial Festival of NIT Kurukshetra which started in 1995 as
            'Technospect' (later changed to "Literati"). It has a variety of events (60+) ranging from
            paper presentations, robotics software development, aero-modelling, quizzes to managerial
            events. The year 2013 marked the Golden-Jubilee of NIT Kurukshetra and thus the mega
            techno-managerial festival was re-christened "TECHSPARDHA".
          </p>

          <hr className="my-4" />
          <h3>
            <img src="/images/code.png" className="credit-icons" alt="code icon" />
            {' '}
            with
            {' '}
            <img src="/images/heart.png" className="credit-icons" alt="heart icon" />
          </h3>

          <hr className="my-4" />

          <h2>
            Developers
          </h2>

          <div className="row">

            <div className="col-6 col-md-3 h5 my-3">
              <a href="https://github.com/rishabh2609" target="_blank" className="btn btn-outline-light">
                Rishabh Chann
              </a>
            </div>

            {
              about.map(a => (
                <div key={a.name} className="col-6 col-md-3 h5 my-3">
                  <a href={a.link} target="_blank" className="btn btn-outline-light">
                    {a.name}
                  </a>
                </div>
              ))
            }
          </div>

        </div>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  about: state.about,
});

const mapDispatchToProps = dispatch => ({
  getAbout: () => {
    dispatch(actions.getAbout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
