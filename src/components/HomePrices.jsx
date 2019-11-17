import React, { Component } from "react";

class HomePrices extends Component {
    render() {
        return (
            <>
                <section className="home-prices">
                    <h2 className="title">Choose your package</h2>
                    <div className="container-flex">
                        <div className="box-flex">
                            <div className="number">
                                <h3>4 classes</h3>
                                <p>/monthly</p>
                            </div>
                            <div className="price">
                                <span>$</span>
                                <p>30</p>
                            </div>
                            <div className="description">
                                <p>Lorem ipsum dolor</p>
                                <p>Sit amet consectetur</p>
                                <p>Nostrum officia corporis</p>
                                <p>Veritatis ipsa qui </p>
                            </div>
                            <a className="button" href="#">buy</a>
                        </div>
                        <div className="box-flex">
                            <div className="number">
                                <h3>8 classes</h3>
                                <p>/monthly</p>
                            </div>
                            <div className="price">
                                <span>$</span>
                                <p>50</p>
                            </div>
                            <div className="description">
                                <p>Lorem ipsum dolor</p>
                                <p>Sit amet consectetur</p>
                                <p>Nostrum officia corporis</p>
                                <p>Veritatis ipsa qui </p>
                            </div>
                            <a className="button" href="#">buy</a>
                        </div>
                        <div className="box-flex">
                            <div className="number">
                                <h3>1 month</h3>
                            </div>
                            <div className="price">
                                <span>$</span>
                                <p>55</p>
                            </div>
                            <div className="description">
                                <p>Lorem ipsum dolor</p>
                                <p>Sit amet consectetur</p>
                                <p>Nostrum officia corporis</p>
                                <p>Veritatis ipsa qui </p>
                            </div>
                            <a className="button" href="#">buy</a>
                        </div>
                        <div className="box-flex">
                            <div className="number">
                                <h3>3 months</h3>
                            </div>
                            <div className="price">
                                <span>$</span>
                                <p>110</p>
                            </div>
                            <div className="description">
                                <p>Lorem ipsum dolor</p>
                                <p>Sit amet consectetur</p>
                                <p>Nostrum officia corporis</p>
                                <p>Veritatis ipsa qui </p>
                            </div>
                            <a className="button" href="#">buy</a>
                        </div>
                    </div>
                    <div className="container-flex-button">
                        <a className="button" href="#">check prices</a>
                    </div>
                </section>

            </>
        )
    }
}

export default HomePrices;



