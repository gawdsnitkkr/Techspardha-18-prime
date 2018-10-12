import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toDateString(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  // componentWillReceiveProps = (nextProps) => {
  //   this.setState({
  //     time: new Date(nextProps.timestamp).toLocaleTimeString(),
  //     date: new Date(nextProps.timestamp).toDateString(),
  //   });
  // }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
      date: new Date().toDateString(),
    });
  }

  render() {
    const { date, time } = this.state;
    return (
      <div>
        <h2>
          {date}
        </h2>
        <h3>
          {time}
        </h3>
      </div>
    );
  }
}

export default Clock;
