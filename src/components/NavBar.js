import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navBar">
        <div className="logo">
          <img className="icon" src={process.env.PUBLIC_URL + 'textLogo.png'}/>
        </div>
      </div>
    );
  }
}

export default NavBar;
