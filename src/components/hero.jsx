import React, { Component } from "react";
import Navigation from './Navigation.jsx';
// import Link from 'link-react';
import home1 from '../assets/home1.jpg';
import home2 from '../assets/home2.jpg';


class Hero extends Component {
    render() {
        return (
            <>
                <div className="app-container">
                    <section id="about" className="hero">

                        <div className="container-flex contact">
                            <i class="fa fa-phone"></i>
                            <p>500 987 679</p>
                            <a href="#"><i class="fab fa-facebook-square"></i></a>
                        </div>

                        <Navigation />


                        <div className="container-flex">
                            <div className="box-flex">
                                <img className="img-fluid" src={home1} alt="yoga" />
                                <h2 className="title">The best Yoga in the Town</h2>
                                <a className="button" href="#">Check classes</a>
                            </div>
                            <div className="box-flex">
                                <img className="img-fluid" src={home2} alt="yoga" />
                                <h2 className="title">Find your place in Namaste</h2>
                                <a className="button" href="#">Check timetable</a>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="container-flex">
                            <div className="box-flex">
                                <i className="fas fa-sun"></i>
                                <h2 className="title">Find your balance</h2>
                                <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quam repellendus iusto laboriosam veniam iste aliquid accusantium animi facilis laborum tempore maiores sequi fugit.</p>
                                <a className="button button-circle" href="#">More</a>
                            </div>
                            <div className="box-flex">
                                <i className="fas fa-spa"></i>
                                <h2 className="title">Inhale the future</h2>
                                <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quam repellendus iusto laboriosam veniam iste aliquid accusantium animi facilis laborum tempore maiores sequi fugit.</p>
                                <a className="button button-circle" href="#">More</a>
                            </div>
                            <div className="box-flex">
                                <i className="fas fa-certificate"></i>
                                <h2 className="title">Stay strong</h2>
                                <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quam repellendus iusto laboriosam veniam iste aliquid accusantium animi facilis laborum tempore maiores sequi fugit.</p>
                                <a className="button button-circle" href="#">More</a>
                            </div>
                        </div>

                    </section>
                </div>
            </>
        )
    }
}
export default Hero;