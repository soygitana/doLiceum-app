import React, { Component } from "react";
import Hero from './Hero.jsx'
import HomeAbout from './HomeAbout.jsx'
// import HomeVideo from './HomeVideo.jsx'
import HomeHelp from './HomeHelp.jsx'
import HomeTest from './HomeTest.jsx'


class Home extends Component {
    render() {
        return (
            <>
                <div className="app-container">

                    <Hero />
                    <HomeHelp />
                    {/* <HomeVideo /> */}
                    <HomeAbout />

                </div>
                <HomeTest />
            </>
        )
    }
}

export default Home;
