import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import logo from '../logo.svg';
import './css/Header.css';

import menuItems from '../Data/Menu.js';

class Header extends Component{

  render() {
    return (
      <div className="Header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Abm Personas
          </p>
          <nav>
            <ul>
              {menuItems.map((item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>)}
            </ul>
          </nav>
      </header>
    </div>
  );
}

}
export default Header;
