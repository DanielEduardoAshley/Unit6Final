import React from 'react';
import {  Link } from 'react-router-dom';
import './navbar.css';



const Navbar=()=>{
     return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="navbar-brand" >TV Watch List</div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to='/' className="nav-link" >Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to='/users'className="nav-link" >Users</Link>
      </li>
      <li className="nav-item">
        <Link to='/user/posts'className="nav-link" >Create</Link>
      </li>
      <li className="nav-item">
        <Link to="/shows" className="nav-link" >TV Shows</Link>
      </li>
    </ul>
  </div>
</nav>

        </>
     )
}

export default Navbar;