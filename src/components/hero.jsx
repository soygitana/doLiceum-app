import React, { Component } from "react";
import { Link } from 'react-router-dom';
import quiz from '../assets/quiz.jpeg';
import quiz2 from '../assets/quiz2.jpeg';



class Hero extends Component {
    render() {
        return (
            <>
                <div className="app-container">
                    <section id="about" className="hero">
                        <div className="container-flex">
                            <div className="title-main">Rozwiąż quiz i znajdź idealne liceum</div>
                            <div className="box-flex">
                                <img className="img-fluid" src={quiz2} alt="city" />
                                <h2 className="title">Wybierz swoją drogę</h2>
                                <Link className="button" to="/search">ZNAJDŹ LO</Link>
                            </div>
                            <div className="box-flex">
                                <img className="img-fluid" src={quiz} alt="yoga" />
                                <h2 className="title">Rozwiąż quiz</h2>
                                <Link className="button" to="/quiz">QUIZ</Link>
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