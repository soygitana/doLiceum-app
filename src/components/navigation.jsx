import React, { Component } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from './Logo.jsx'

class Navigation extends Component {
    render() {
        return (
            <>
                    <nav className="page-nav">
                        <Logo />
                        <h1>Namaste</h1>
                        <ul className="page-nav-list">
                            <li><AnchorLink href='#'>Home</AnchorLink></li>
                            <li><AnchorLink href='#'>Classes</AnchorLink></li>
                            <li><AnchorLink href='#'>Timetable</AnchorLink></li>
                            <li><AnchorLink href='#'>About</AnchorLink></li>
                            <li><AnchorLink href='#'>Prices</AnchorLink></li>
                            <li><AnchorLink href='#'>Contact</AnchorLink></li>
                        </ul>
                    </nav>
            </>
        )
    }
}

export default Navigation;





