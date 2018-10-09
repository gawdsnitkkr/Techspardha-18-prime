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
      <div id="desktop">
        <h1>
        Techspardha Prime
          <br />
          {' '}
          {fact}
        </h1>
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
