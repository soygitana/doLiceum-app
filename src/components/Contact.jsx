import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (

            <div className="app-container">
                <section id="contact" className="contact">
                    <h2 className="title">contact</h2>



                    <div className="container-flex">

                        <div className="box-flex">
                            <h3>Address</h3>
                            <h4>Address</h4>
                            <p>Consectetur 5, 01-456 Adipisicing</p>
                            <h4>Phone</h4>
                            <p>500 987 679</p>
                            <h4>E-mail</h4>
                            <p>lorem@gmail.com</p>
                        </div>

                        <div className="box-flex">

                            <h3>Leave your data and we'll get in touch</h3>

                            <div className="contact-form">
                                <form>
                                    <div className="container-flex">
                                        <div className="box-flex"> 
                                        <label htmlFor="name"></label>
                                        <input name='name' type="text" placeholder="your name" />

                                </div>
                                        <div className="box-flex"> 
                                        <label htmlFor="phone"></label>
                                        <input name='phone' type="number" placeholder="your phone number" />
                                </div>
                                        <div className="box-flex">
                                        <label htmlFor="email"></label>
                                        <input name='email' type="text" placeholder="your email" />
                                </div>
                                    </div>
                                    <div className="container-flex">
                                        <div className="box-flex"> 
                                        <label htmlFor="message"></label>
                                        <textarea name='message' type="text" placeholder="message" />

                                </div>
                                    </div>
                                    <div className='container-flex'>
                                        <button type="submit" className="button submitBtn">Submit</button>
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


