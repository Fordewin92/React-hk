import React from 'react';
import './Header.css';
import spacexLogo from './spacexlogo.png';

function Header() {
  return (
    <header className="header">
      <div>
        <img 
          className="logo"  
          src={spacexLogo} 
          alt="SpaceX Logo"
        />
      </div>
      <nav>
        <a href="#" className="link">Home</a>
        <a href="#" className="link">Cohetes</a>
        <a href="#" className="link">Misiones</a>
        <a href="#" className="link">Api</a>
      </nav>
    </header>
  );
}

export default Header;