import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container1">
        <h1 className="logo">
          <span className="logo-white">About</span>
          <span className="logo-yellow">Me</span>
        </h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#aboutme">AboutMe</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
