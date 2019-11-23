import React, { Component } from "react";
import { Link } from 'react-router-dom';
import home1 from '../assets/home1.jpeg';
import home2 from '../assets/home2.jpeg';



class Hero extends Component {
    render() {
        return (
            <>
                <div className="app-container">
                    <section id="about" className="hero">
                        <div className="container-flex">
                            <div className="title-main">Nie wiesz którą szkołę wybrać? Rekrutacja do szkół średnich to poważna sprawa. W tym roku będzie ona znacznie prostsza. Znajdź szkołę marzeń za trzecim kliknięciem!</div>
                            <div className="box-flex">
                                <img className="img-fluid" src={home1} alt="city" />
                                <h2 className="title">Wybierz swoją drogę</h2>
                                <a className="button" href="#">ZNAJDŹ LO</a>
                            </div>
                            <div className="box-flex">
                                <img className="img-fluid" src={home2} alt="yoga" />
                                <h2 className="title">Sprawdź swoje predyspozycje</h2>
                                <Link className="button" to="/quiz">TEST</Link>
                            </div>
                        </div>
                        <div className="line"></div>
                    </section>
                </div>
            </>
        )
    }
}
export default Hero;