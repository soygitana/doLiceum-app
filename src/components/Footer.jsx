import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <>
                <section className="footer">

                    <div className="app-container">
                        <div className="container-flex">
                            <div className="box-flex  about">
                                <h2 className="title">kim jesteśmy?</h2>
                                <p className="text">Grupą pasjonatów informatyki z warszawskich gimnazjów. Każdy z Nas stoi przed wyborem szkoły średniej. Chcieliśmy uprościć ten trudny wybór. Tak powstała Nasza aplikacja WarsawLO. Nasz własny, niekomercyjny projekt open-source. Wiemy, że Nasza strona nie jest doskonała, ale liczymy, że z Waszą pomocą damy radę!</p>
                            </div>
                            <div className="box-flex privacy">
                                <h2 className="title">Nasze dane</h2>
                                <a href="#">czytaj</a>
                            </div>
                            <div className="box-flex privacy">
                                <h2 className="title">Polityka prywatności</h2>
                                <a href="#">czytaj</a>
                            </div>
                            <div className="box-flex privacy">
                                <h2 className="title">Ustawienia prywatności</h2>
                                <a href="#">czytaj</a>
                            </div>
                        </div>
                    </div>
                    <div className="container-flex">
                        <p className="copy">© 2019 - All rights reserverd by <a href="https://github.com/soygitana" target="_blank">xxx</a></p>
                    </div>

                </section>

            </>
        )
    }
}

export default Footer;


