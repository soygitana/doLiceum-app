import React, { Component } from "react";
import { Link } from 'react-router-dom';
import img from '../assets/imghead.png';



class Compontent1 extends Component {
    render() {
        return (
            <>
                <div className="app-container">
                    <section id="about" className="component1">
                        <div className="container-flex">
                            <div className="box-flex">
                                <h2 className="title">Kończysz ósmą klasę i zastanawiasz
się do jakiego liceum powinieneś pójść?</h2>
                                <p className="text">Wybór profilu klasy oraz liceum może
być przytłaczający. Dzięki wyszukiwace
doliceum.pl znajdziesz szkołę najlepiej
dopasowaną do Twoich potrzeb i
zainteresowań. Weź udział w naszym
quizie, aby znaleźć odpowiedni profil
klasy oraz szkołę, w której rozwiniesz
skrzydła!</p>
                            </div>
                            <div className="box-flex">
                                <img className="img-fluid" src={img} alt="yoga" />
                            </div>
                        </div>
                        <div className="line"></div>
                    </section>
                </div>
            </>
        )
    }
}
export default Compontent1;
