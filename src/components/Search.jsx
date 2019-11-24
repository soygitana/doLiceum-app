import React, { Component } from "react";
import Searchbar from "./Searchbar.jsx"

class Search extends Component {
    render() {
        return (

            <div className="app-container">
                <section id="search" className="contact">
                    <h2 className="title">znajdź najlepsze LO!</h2>
                    <Searchbar />




                </section>
            </div>
        )
    }
}

export default Search;


