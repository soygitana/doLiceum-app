import React, { Component } from "react";
import Logo from './Logo.jsx'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <>
                <div className="app-container">
                    <div className="hero">
                        <div className="container-flex contact">
                            <i class="fa fa-phone"></i>
                            <p>500 987 679</p>
                            <a href="#"><i class="fab fa-facebook-square"></i></a>
                        </div>
                    </div>
                    <nav className="page-nav">
                        <Logo />
                        <h1>Namaste</h1>
                        <ul className="page-nav-list">
                            <li><AnchorLink href='#about'>home</AnchorLink></li>
                            <li><AnchorLink href='#about'>about</AnchorLink></li>
                            <li><AnchorLink href='#classes'>classes</AnchorLink></li>
                            <li><Link to='/schedule'>class schedule</Link></li>
                            <li><Link to='/membership'>membership</Link></li>
                            <li><Link to='/contact'>contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}

export default Navigation;





