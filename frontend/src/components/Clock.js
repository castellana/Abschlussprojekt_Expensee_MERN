import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = { time: new Date() }; // initialise the state
  }

  componentDidMount() {
    // create the interval once component is mounted
    this.update = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1 * 1000); // every 1 seconds
  }

  componentWillUnmount() {
    // delete the interval just before component is removed
    clearInterval(this.update);
  }

  render() {
    const { time } = this.state; // retrieve the time from state

    return (
      <div className="clock">
        <h2>
          {/* print the string prettily */}
          {time.toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </h2>
      </div>
    );
  }
}

export default Clock;
