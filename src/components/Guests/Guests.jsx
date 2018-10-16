import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import './Guests.css';

const GuestsCard = (props) => {
  const {
    name, date, imageUrl, time, desc,
  } = props.lectures;
  return (
    <div className="col-sm-4">
      <div className="card">
        <img className="card-img-top" src={imageUrl} alt="guests" />
        <div className="card-header">
          <h3 className="card-title text-center">
            {name}
          </h3>
          <div className="row">
            <div className="col-6 text-center">
              <img src="/images/calendar.png" className="guest-icons" alt="img" />
              <h6>
                {date}
              </h6>
            </div>
            <div className="col-6 text-center">
              <img src="/images/time.png" className="guest-icons" />
              <h6>
                {time}
              </h6>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h5>
            About
          </h5>
          <p className="card-text">
            {desc}
          </p>
        </div>
      </div>
    </div>

  );
};

class Guests extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getLectures } = this.props;
    getLectures();
  }

  componentDidUpdate() {
    console.log(this.props.lectures);
  }

  render() {
    const { lectures } = this.props;
    return (
      <div className="jumbotron" id="guest-page">
        <h1 className="display-4 text-center" id="guest-lecture-heading">
          <small>
            <a
              onClick={() => {
                this.props.history.goBack();
              }}
            >
              <img src="/images/back.png" id="back-btn" alt="img" />
            </a>
          </small>
          Guest Lectures
        </h1>
        <div className="row">
          {
            lectures.map(e => <GuestsCard lectures={e} />)
          }
        </div>
      </div>);
  }
}

const mapStateToProps = state => ({
  lectures: state.lectures,
});

const mapDispatchToProps = dispatch => ({
  getLectures: () => {
    dispatch(actions.getLectures());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Guests);
