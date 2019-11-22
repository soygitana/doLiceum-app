import React from 'react';
import './App.scss';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Home from "./components/Home.jsx";
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
// import Membership from './components/Membership.jsx';
// import Schedule from './components/Schedule.jsx';
// import Classes from './components/Schedule.jsx';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        {/* <Route path='/membership' component={Membership} /> */}
        {/* <Route path='/schedule' component={Schedule} /> */}
        {/* <Route component={NotFound} /> */}
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
