import React from 'react';
import Clock from './Clock';
import Trackers from './Trackers';
import Dropdown from './Dropdown';
import './TrackerPage.css';

const getBackgroundColor = (time) => {
  if (time >= 6 && time < 10) {
    return 'morning-background'; 
  } else if (time >= 10 && time < 18) {
    return 'noon-background';
  } else if (time >= 18 && time <= 21) {
    return 'evening-background';
  }
  return 'night-background';
};



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
    const backgroundColor = getBackgroundColor(date.getHours());

    return (
      <div className={`tracker-page-container ${backgroundColor}`}>
        <Clock date={date}/>
        <Trackers 
          date={date}
        />
      </div>
    );
  }
}

export default TrackerPage;
