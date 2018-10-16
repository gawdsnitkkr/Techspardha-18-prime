import React from 'react';
import './OnBoarding.css';
import { connect } from 'react-redux';
import actions from '../../actions';


class OnBoarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '',
      college: 'First',
      phone: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps = (nextProps) => {
    const { history } = this.props;
    if (nextProps.loggedIn && nextProps.onboard) {
      history.push('/');
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { signup } = this.props;
    signup(this.state);
  };


  render = () => {
    const {
      year, college, phone,
    } = this.state;
    return (
      <form className="jumbotron" id="onBoarding-page" onSubmit={this.handleSubmit}>
        <div className="text-center">
          <img src="/images/startup.png" alt="img" />
        </div>
        <h1 className="display-4 text-center">
      Welcome aboard
        </h1>
        <h1 className="text-center mb-5">
    Techspardha18 Prime
        </h1>
        <h5 className="text-center">
    To continue we need a few more details about you...
        </h5>
        <div className="container text-center">
          <hr className="my-4" />

          <div className="row justify-content-md-center">
            <div className="col-sm-3">
              <div className="form-group">
                <input type="text" name="college" className="form-control" id="user-college" value={college} aria-describedby="collegeName" placeholder="College name" onChange={this.onChange} required />
                <label htmlFor="user-college">
            Your college
                </label>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <input type="number" name="phone" value={phone} onChange={this.onChange} required className="form-control" id="user-mobile" aria-describedby="collegeName" placeholder="Mobile Number" />
                <label htmlFor="user-mobile">
            Mobile Number
                </label>
              </div>
            </div>
            <div className="col-sm-3">
              <select className="form-control" id="user-year" name="year" value={year} onChange={this.onChange} required>
                <option value="First">
            First
                </option>
                <option value="Second">
            Second
                </option>
                <option value="Third">
            Third
                </option>
                <option value="Fourth">
            Fourth
                </option>
              </select>
              <label htmlFor="user-year">
          Your year
              </label>
            </div>
          </div>

          <div className="row justify-content-md-center">
            <div className="col-sm-4">
              <button type="submit" className="btn btn-danger">
          Continue
              </button>
            </div>
          </div>

          <hr className="my-4" />
        </div>

      </form>
    );
  }
}

const mapStateToProps = state => ({
  onboard: state.user.onboard,
  loggedIn: state.user.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  signup: (data) => {
    dispatch(actions.signup(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OnBoarding);
