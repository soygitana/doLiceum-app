import React, { Component } from "react";
import Logo from './Logo.jsx'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <>
                <nav className="page-nav">
                    <Logo />
                    <h1>Namaste</h1>
                    <ul className="page-nav-list">
                        {/* <li><Link to='/'>home</Link></li> */}
                        <li><AnchorLink href='#about'>about</AnchorLink></li>
                        <li><AnchorLink href='#classes'>classes</AnchorLink></li>
                        <li><AnchorLink href='#classes'>class schedule</AnchorLink></li>
                        <li><AnchorLink href='#membership'>membership</AnchorLink></li>
                        <li><AnchorLink href='#'>contact</AnchorLink></li>
                    </ul>
                </nav>
            </>
        )
    }
}

export default Navigation;





