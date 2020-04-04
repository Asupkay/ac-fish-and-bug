import React from 'react';
import Clock from './Clock';
import Trackers from './Trackers';

class TrackerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  render() {
    const {date} = this.state;
    return (
      <div>
        <Clock date={date}/>
        <Trackers date={date}/>
      </div>
    );
  }
}

export default TrackerPage;
