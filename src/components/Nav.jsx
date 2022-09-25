import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import {Link} from 'react-router-dom';
import './Nav.css';


function Nav({onSearch}) {
  return (
    <nav className="navbar">
      <Link to='/'>
        <span className="navbar-logo">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Henry - Weather App
        </span>
      </Link>
      <div className='searchCont'>
        <SearchBar
        onSearch={onSearch}
      /></div>
      
    </nav>
  );
};

export default Nav;
