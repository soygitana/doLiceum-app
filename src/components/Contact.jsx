import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (

            <div className="app-container">
                <section id="contact" className="contact">
                    <h2 className="title">kontakt</h2>



                    <div className="container-flex">

                        <div className="box-flex">
                            <h3>Adres</h3>
                            <p>Consectetur 5, 01-456 Adipisicing</p>
                            <p>500 987 679</p>
                            <p>info@warsawlo.pl</p>
                        </div>

                        <div className="box-flex">

                            <h3>Jakieś pytania? Napisz do Nas, chętnie pomożemy!</h3>

                            <div className="contact-form">
                                <form>
                                    <div className="container-flex">
                                        <div className="box-flex">
                                            <label htmlFor="name"></label>
                                            <input name='name' type="text" placeholder="imię" />

                                        </div>
                                        <div className="box-flex">
                                            <label htmlFor="phone"></label>
                                            <input name='phone' type="number" placeholder="telefon" />
                                        </div>
                                        <div className="box-flex">
                                            <label htmlFor="email"></label>
                                            <input name='email' type="text" placeholder="email" />
                                        </div>
                                    </div>
                                    <div className="container-flex">
                                        <div className="box-flex">
                                            <label htmlFor="message"></label>
                                            <textarea name='message' type="text" placeholder="wiadomość" />

                                        </div>
                                    </div>
                                    <div className='container-flex container-box'>
                                        <button type="submit" className="button submitBtn">wyślij</button>
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>




                </section>
            </div>
        )
    }
}

export default Contact;


