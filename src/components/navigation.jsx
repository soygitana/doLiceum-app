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
                            <a href="#"><i class="fab fa-facebook-square"></i></a>
                            <a href="#"><i class="fas fa-at"></i></a>
                        </div>
                    </div>
                    <nav className="page-nav">
                        <Logo />
                        <h1>do<span>LICEUM</span></h1>
                        <ul className="page-nav-list">
                            <li><Link to='/#'>strona główna</Link></li>
                            <li><Link to='/search'>znajdź szkołę</Link></li>
                            <li><Link to='/quiz'>test predyspozycji</Link></li>
                            <li><Link to='/contact'>kontakt</Link></li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}

export default Navigation;





