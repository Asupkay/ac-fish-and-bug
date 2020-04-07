import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const links = [
  {
    link: "/",
    text:"Clock"
  },
  {
    link: "/fish",
    text:"Fish"
  },
  {
    link: "/bugs",
    text:"Bugs"
  }
];

const renderLinks = (links) => {
  return links.map((link, i) => {
    return (
      <Link className="link" to={link.link}>
        <div className="link-text" key={i}>
          {link.text}
        </div>
      </Link>
    );
  });
};

class NavBar extends React.Component {
  render() {
    return (
      <div className="navBar">
        <div className="logo">
          <img className="icon" src={process.env.PUBLIC_URL + 'textLogo.png'}/>
        </div>
        <div className="links">
          {renderLinks(links)}
        </div>
      </div>
    );
  }
}

export default NavBar;
