import React from 'react';
import './Sponsers.css';
import { connect } from 'react-redux';
import actions from '../../actions';

const Sponsor = (props) => {
  const { sponsor } = props;
  return (
    <li className="nav-item">
      <a className="nav-link " href={sponsor.targetUrl}>
        <img src={sponsor.imageUrl} className="sponsor-icons" alt="img" />
      </a>
    </li>
  );
};

const Section = (props) => {
  const { data } = props;
  return (
    <div>
      <h2>
        {data.sponsorSection}
      </h2>
      <ul className="nav justify-content-center">
        {data.sponsors.map(sponsor => (
          <div key={sponsor.imageUrl}>
            <Sponsor sponsor={sponsor} />
          </div>
        ))}
      </ul>
      <hr className="my-4" />
    </div>
  );
};

class Sponsers extends React.Component {
  componentDidMount() {
    const { getSponsors } = this.props;
    getSponsors();
  }


  render() {
    const { sponsors } = this.props;
    return (
      <div className="jumbotron" id="sponsors-page">
        <h1 className="display-4 text-center" id="sponsor-heading">
          <small>
            <a
              onClick={() => {
                this.props.history.goBack();
              }}
            >
              <img src="/images/back.png" id="back-btn" alt="back button" />
            </a>
          </small>
          Sponsors
        </h1>
        <div className="container text-center">
          <hr className="my-4" />
          {sponsors.map(s => (
            <div key={s.section}>
              <Section data={s} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sponsors: state.sponsors,
});

const mapDispatchToProps = dispatch => ({
  getSponsors: () => {
    dispatch(actions.getSponsors());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Sponsers);
