import React, { Component } from "react";
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';
import Logo from '../components/logo.jsx'


class Navigation extends Component {
    render() {
        return (
            <>


<div className="app-container">     
<nav className="page-nav">
<Logo />
<h1>Namaste</h1>
<ul className="page-nav-list">
  <li><a href="#">Home</a></li>
  <li><a href="">Classes</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Prices</a></li>
  <li><a href="#">Contact</a></li>
</ul>
</nav>
</div>

            </>
         
        )
    }
}



export default Navigation;





