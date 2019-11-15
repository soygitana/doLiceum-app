import React, { Component } from "react";
import Hero from './Hero.jsx'
import HomeClasses from './HomeClasses.jsx'
import HomeVideo from './HomeVideo.jsx'

class Home extends Component {
    render() {
        return (
            <>
                <div className="app-container">
                    
                    <Hero />
                   <HomeClasses />
                <HomeVideo />
               
                </div>
            </>
        )
    }
}

export default Home;
