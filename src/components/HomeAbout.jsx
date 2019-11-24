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
                           <h3>Wypełnij krótki quiz i przekonaj się,
który profil klasy najbardziej odpowiada
Twoim potrzebom oraz dowiedz się do
jakich szkół możesz aplikować.</h3>
                            <div className="description">
                            Korzystamy z aktualnych danych
Urzędu Miasta, łączymy się z wieloma
serwisami lokalizacyjnymi, aby pomóc
Ci w wyborze najlepszej ścieżki
edukacji. Wierzymy, że właściwy wybór
klasy licealnej w dużej mierze wpływa
na kolejne kluczowe decyzje w Twoim
życiu: wybór uczelni wyższej oraz
kariery zawodowej. Jesteśmy zdania, że
rozwijając swoje zainteresowania,
będziesz w stanie z łatwością znaleźć
pracę, z której będziesz czerpać
satysfakcję.
                              
                            </div>
        
                        </div>
                       
                       
                </div>
                <div className="line"></div>
                </section>

            </>
        )
    }
}

export default HomeAbout;



