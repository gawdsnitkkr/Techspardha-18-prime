import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import actions from '../../actions';
import './Guests.css';

const DescriptionModal = () => (
  <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Description
          </h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">
              &times;
            </span>
          </button>
        </div>
        <div className="modal-body">
          <p />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

const GuestsCard = (props) => {
  const {
    name, date, imageUrl, time, desc,
  } = props.lectures;

  const onClickViewMore = (desc) => {
    $('.modal-body>p').html(desc);
  };

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
          <p className="card-text" style={{ height: '254px', marginBottom: '0px' }}>
            {desc.substr(0, 200)}
          </p>
          <p className="card-text">
            {
              desc.length > 199 ? (
                <div>
                  <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal" onClick={() => { onClickViewMore(desc); }}>
                    View more
                  </button>
                </div>
              ) : null
            }

            <DescriptionModal />
          </p>
        </div>
      </div>
    </div>

  );
};

class Guests extends React.Component {
  componentDidMount() {
    const { getLectures } = this.props;
    getLectures();
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
