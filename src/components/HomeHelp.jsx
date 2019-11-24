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
                                <li><i class="fas fa-pencil-alt"></i>Podstawowe informacje</li>
                                <li><i class="fas fa-pencil-alt"></i>Lokalizacje</li>
                                <li><i class="fas fa-pencil-alt"></i>Średnią ilość punktów</li>
                            </ul>
                        </div>
                        <div className="box-flex">
                            <ul>
                                <li><i class="fas fa-pencil-alt"></i>Dojazd komunikacją</li>
                                <li><i class="fas fa-pencil-alt"></i>Zdawalność matur</li>
                                <li><i class="fas fa-pencil-alt"></i>Dni otwarte</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default HomeHelp;



