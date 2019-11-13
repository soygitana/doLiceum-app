import React, { Component } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
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
<li><AnchorLink href='#'>Home</AnchorLink></li>
<li><AnchorLink href='#'>Classes</AnchorLink></li>
<li><AnchorLink href='#'>About</AnchorLink></li>
<li><AnchorLink href='#'>Prices</AnchorLink></li>
<li><AnchorLink href='#'>Contact</AnchorLink></li>
</ul>
</nav>
</div>
  </>   
        )
    }
}



export default Navigation;





