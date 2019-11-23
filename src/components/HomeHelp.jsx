import React, { Component } from "react";

class HomeHelp extends Component {
    render() {
        return (
            <>
                <section id="classes" className="home-classes">
                    <h2 className="title">Pomożemy Ci sprawdzić:</h2>
                    <div className="container-flex">
                        <div className="box-flex">
                            <ul>
                                <li>Podstawowe informacje</li>
                                <li>Lokalizacje</li>
                                <li>Średnią ilość punktów</li>
                            </ul>
                        </div>
                        <div className="box-flex">
                            <ul>
                                <li>Dojazd komunikacją</li>
                                <li>Zdawalność matur</li>
                                <li>Dni otwarte</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default HomeHelp;



