import React, { Component } from "react";
import { Link } from 'react-router-dom';

class HomeVoucher extends Component {
    render() {
        return (
            <>
                <section id="test" className="home-voucher">

                    <div className="container-flex">
                        <div className="box-flex">
                            <h2 className="title">Jakie są Twoje mocne strony?</h2>
                            <p className="text">rozwiąż Nasz test</p>
                            <Link className="button" to="/quiz"><i class="fas fa-pencil-alt"></i>quiz</Link>
                        </div>
                    </div>


                </section>

            </>
        )
    }
}

export default HomeVoucher;



