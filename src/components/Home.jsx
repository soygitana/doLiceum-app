import React, { Component } from "react";
import Hero from './Hero.jsx'
import HomeAbout from './HomeAbout.jsx'
// import HomeVideo from './HomeVideo.jsx'
import HomeHelp from './HomeHelp.jsx'
import Component1 from './Component1.jsx'

class Home extends Component {
    render() {
        return (
            <>
                <div className="app-container">
                    <Component1 />
                    <HomeAbout />
                    <Hero />
                    <HomeHelp />
                    {/* <HomeVideo /> */}
                </div>

            </>
        )
    }
}

export default Home;
