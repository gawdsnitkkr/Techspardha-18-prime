import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import actions from '../../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps = (nextProps) => {
    const { history } = this.props;
    if (nextProps.loggedin && nextProps.onboard) {
      // history.push('/dashboard');
    } else if (nextProps.loggedin && !nextProps.onboard) {
      history.push('/onBoarding');
    }
  };

  responseGoogle = (response) => {
    if (!response.tokenId) {
      alert('try aganin');
      // return;
    }
    const { login } = this.props;
    login(response.tokenId);
  };

  render() {
    return (
      <div>
        <div>
          <GoogleLogin
            clientId="802725431757-hjgkfe6valnvupeletpn8jjfgo2p80fk.apps.googleusercontent.com"
            buttonText="Login With Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            className="btn btn-danger waves-effect red waves-light login"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  onboard: state.user.onboard,
  loggedIn: state.user.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  login: (token) => {
    dispatch(actions.login(token));
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login),
);
