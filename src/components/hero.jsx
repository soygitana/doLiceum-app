import React, { Component } from "react";
import Navigation from './navigation.jsx';
import home1 from '../assets/home1.jpg';
import home2 from '../assets/home2.jpg';


class Hero extends Component {
    render() {
        return (
            <>
                <div className="app-container">
                    <section className="Hero">

                        <Navigation />

                        <div className="container-flex">

                            <div className="box-flex">
                                <img className="img-fluid" src={home1} alt="yoga" />
                                <h2 className="title">The best Yoga in the Town!</h2>



                            </div>





                            <div className="box-flex">
                                <img className="img-fluid" src={home2} alt="yoga" />
                                <h2 className="title">Find your place in Namaste!</h2>

                            </div>


                        </div>


                    </section>
                </div>
            </>
        )
    }
}

export default Hero;
