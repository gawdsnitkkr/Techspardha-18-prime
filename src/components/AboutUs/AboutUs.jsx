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
            <img src="images/code.png" className="credit-icons"/> with <img src="images/heart.png" className="credit-icons"/>
            {' '}
            <br />
            <a target="_blank" href="http://www.gawds.in/">
              <svg id="GAWDSLink_svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 128 37.422" style={{ width: '100px', height: 'auto' }}>
                <g transform="matrix(.37663 0 0 .37663 -96.819 -287.24)">
                  <path style={{ fill: 'white' }} d="m280.56 784.37q4.86 0 9.09 1.89 4.32 1.8 7.47 5.04 3.24 3.15 5.04 7.47 1.89 4.32 1.89 9.18 0 3.6-1.08 6.93-0.99 3.33-2.88 6.12-1.8 2.79-4.41 4.95t-5.67 3.51q3.78 2.34 5.94 6.21 2.25 3.96 2.25 8.73 0 3.69-1.44 6.84-1.35 3.24-3.78 5.58-2.34 2.43-5.58 3.78-3.24 1.44-6.84 1.44v-4.68q2.7 0 5.04-1.08 2.34-0.99 4.05-2.79 1.8-1.71 2.79-4.05 1.08-2.34 1.08-5.04t-1.08-5.04q-0.99-2.34-2.79-4.14-1.71-1.71-4.05-2.79-2.34-0.99-5.04-0.99-4.86 0-9.18-1.8-4.23-1.89-7.47-5.04-3.15-3.24-5.04-7.47-1.8-4.32-1.8-9.18t1.8-9.18q1.89-4.32 5.04-7.47 3.24-3.24 7.47-5.04 4.32-1.89 9.18-1.89zm0 4.77q-3.87 0-7.29 1.53-3.42 1.44-6.03 3.96-2.52 2.52-4.05 6.03-1.44 3.42-1.44 7.29t1.44 7.29q1.53 3.42 4.05 6.03 2.61 2.52 6.03 4.05 3.42 1.44 7.29 1.44t7.29-1.44q3.51-1.53 6.03-4.05 2.52-2.61 3.96-6.03 1.53-3.42 1.53-7.29t-1.53-7.29q-1.44-3.51-3.96-6.03t-6.03-3.96q-3.42-1.53-7.29-1.53zm71.34-5.04q4.86 0 9.18 1.89 4.32 1.8 7.47 5.04 3.24 3.15 5.04 7.47 1.89 4.32 1.89 9.18v22.5h-4.77v-8.37q-3.15 4.32-8.1 6.84-4.86 2.52-10.71 2.52-4.86 0-9.18-1.8-4.23-1.89-7.47-5.04-3.15-3.24-5.04-7.47-1.8-4.32-1.8-9.18t1.8-9.18q1.89-4.32 5.04-7.47 3.24-3.24 7.47-5.04 4.32-1.89 9.18-1.89zm0 4.77q-3.87 0-7.29 1.53-3.42 1.44-6.03 3.96-2.52 2.52-4.05 6.03-1.44 3.42-1.44 7.29t1.44 7.29q1.53 3.42 4.05 6.03 2.61 2.52 6.03 4.05 3.42 1.44 7.29 1.44t7.29-1.44q3.51-1.53 6.03-4.05 2.52-2.61 3.96-6.03 1.53-3.42 1.53-7.29t-1.53-7.29q-1.44-3.51-3.96-6.03t-6.03-3.96q-3.42-1.53-7.29-1.53zm69.15 42.39q-3.69 0-6.93-1.35-3.15-1.44-5.58-3.78-2.34-2.43-3.78-5.58-1.35-3.24-1.35-6.93v-28.35h4.77v28.35q0 2.7 0.99 5.13 0.99 2.34 2.7 4.14 1.8 1.71 4.14 2.7t5.04 0.99 5.04-0.99 4.05-2.7q1.8-1.8 2.79-4.14 1.08-2.43 1.08-5.13v-28.35h4.68v28.35q0 2.7 0.99 5.13 1.08 2.34 2.79 4.14 1.8 1.71 4.14 2.7t5.04 0.99 5.04-0.99 4.05-2.7q1.8-1.8 2.79-4.14 1.08-2.43 1.08-5.13v-28.35h4.68v28.35q0 3.69-1.44 6.93-1.35 3.15-3.78 5.58-2.34 2.34-5.58 3.78-3.24 1.35-6.84 1.35-4.86 0-8.91-2.34-4.05-2.43-6.39-6.48-2.34 4.05-6.39 6.48-3.96 2.34-8.91 2.34zm96.95-47.16q5.85 0 10.71 2.61 4.86 2.52 8.1 6.84v-30.87h4.68v45q0 4.86-1.89 9.18-1.8 4.23-5.04 7.47-3.15 3.15-7.47 5.04-4.23 1.8-9.09 1.8t-9.18-1.8q-4.23-1.89-7.47-5.04-3.15-3.24-5.04-7.47-1.8-4.32-1.8-9.18t1.8-9.18q1.89-4.32 5.04-7.47 3.24-3.24 7.47-5.04 4.32-1.89 9.18-1.89zm0 4.77q-3.87 0-7.29 1.53-3.42 1.44-6.03 3.96-2.52 2.52-4.05 6.03-1.44 3.42-1.44 7.29t1.44 7.29q1.53 3.42 4.05 6.03 2.61 2.52 6.03 4.05 3.42 1.44 7.29 1.44t7.29-1.44q3.42-1.53 5.94-4.05 2.61-2.61 4.05-6.03 1.53-3.42 1.53-7.29t-1.53-7.29q-1.44-3.51-4.05-6.03-2.52-2.52-5.94-3.96-3.42-1.53-7.29-1.53zm60.48 20.7q-2.34 0-4.5-0.81-2.07-0.9-3.69-2.34-1.53-1.53-2.52-3.51-0.9-2.07-0.99-4.41-0.18-1.26 0-2.7 0.09-2.34 0.99-4.32 0.99-2.07 2.52-3.51 1.62-1.53 3.69-2.34 2.16-0.9 4.5-0.9h16.92v4.68h-16.92q-2.79 0-4.86 1.89-1.98 1.89-2.16 4.68-0.18 1.17 0 2.34 0.18 2.79 2.16 4.68 2.07 1.89 4.86 1.89h6.66 0.09q2.34 0 4.41 0.9 2.16 0.81 3.69 2.34 1.62 1.53 2.52 3.6 0.99 1.98 1.08 4.32v2.43 0.09 0.18q0 2.43-0.99 4.5-0.9 2.07-2.52 3.69-1.62 1.53-3.78 2.43-2.07 0.9-4.5 0.9h-17.37v-4.68h17.37q2.61 0 4.59-1.62 1.98-1.71 2.43-4.32 0-0.27 0-0.54 0.09-0.36 0.09-0.63v-1.89q-0.09-2.88-2.16-4.95t-4.95-2.07h-6.66z" />
                </g>
              </svg>
            </a>
            <br />
            {' '}
            <a href="https://www.facebook.com/techn0byte/" target="_blank">
              <img src="/images/techno.png" alt="" className="credit-icons" />
            </a>

          </h3>

          <hr className="my-4" />

          <h2>
            Developers
          </h2>

          <div className="row">
            {
              about.length > 0 ? (
                <div className="col-6 col-md-3 h5 my-3">
                  <a href="#" target="_blank" class="dev-labels">
                    <h4 class="dev-labels">Rishabh Chanana</h4>
                  </a>
                </div>
              ) : null
            }

            {
              about.length > 0 ? (
                about.map(a => (
                  <div key={a.name} className="col-6 col-md-3 h5 my-3">
                    <a href={a.link} target="_blank" class="dev-labels">
                      <h4 class="dev-labels">{a.name}</h4>
                    </a>
                  </div>
                ))
              ) : (
                <div
                    className="rounded-circle content-loader"
                    style={{
                      width: '100px',
                      height: '100px',
                      position: 'absolute',
                      borderRight: '5px solid white',
                      left: '50%',
                      marginTop: '50px',
                    }}
                  />
              )
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
