import React from 'react';
import './ContactUs.css';
import { connect } from 'react-redux';
import actions from '../../actions';

const People = (props) => {
  const { person } = props;
  return (
    <li className="nav-item contact-info-card">
      <div className="card">
        <img className="card-img-top" src={person.imageUrl} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">
            {person.name}
          </h5>
          <p className="card-text">
            {person.phoneNo}
          </p>
        </div>
      </div>
    </li>
  );
};

const Section = (props) => {
  const { data } = props;
  return (
    <div>
      <h2>
        {data.section}
      </h2>
      <ul className="nav justify-content-center">
        {data.people.map(person => (
          <div key={person.name}>
            <People person={person} />
          </div>
        ))}
      </ul>
      <hr className="my-4" />
    </div>
  );
};

class Contact extends React.Component {
  componentDidMount() {
    const { getContacts } = this.props;
    getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <div className="jumbotron" id="contactUs-page">
        <h1 className="display-4 text-center" id="contactUs-heading">
          <small>
            <a
              onClick={() => {
                this.props.history.goBack();
              }}
            >
              <img src="/images/back.png" id="back-btn" alt="back img" />
            </a>
          </small>
          Contact us
        </h1>

        <div className="container text-center">
          <hr className="my-4" />
          {
            contacts.length > 0 ? (
              contacts.map(c => (
                <div key={c.people.phoneNo}>
                  <Section data={c} />
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
                    marginTop: '150px',
                  }}
                />
            )
          }
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contact,
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => {
    dispatch(actions.getContact());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
