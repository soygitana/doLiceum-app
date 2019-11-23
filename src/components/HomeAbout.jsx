import React, { Component } from "react";
import logo from '../assets/logo.png';

class HomeAbout extends Component {
    render() {
        return (
            <>
                <section id="membership" className="home-prices">
                    <h2 className="title">Jak to działa?</h2>
                    <div className="container-flex">
                        <div className="box-flex">
                           <img src={logo} alt=""/>
                        </div>
                        <div className="box-flex">
                           <h3>Pobieramy dane z różnych źródeł, aby móc przedstawić Ci je w jak najlepszej postaci.</h3>
                            <div className="description">
Korzystamy z danych Urzędu Miasta Warszawy, aby pobrać listę szkół oraz średnie liczby punktów, na bieżąco łączymy się z wieloma serwisami lokalizacyjnymi, aby dostarczyć Ci informacje o jak najlepszym połączeniu komunikacyjnym z Twoją wymarzoną szkołą.
A to wszystko zebrane tylko w jednym miejscu.
                              
                            </div>
                            <a className="button" href="#">więcej...</a>
                        </div>
                       
                       
                </div>
                 
                </section>

            </>
        )
    }
}

export default HomeAbout;



