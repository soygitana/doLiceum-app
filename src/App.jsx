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
import Test from './components/Test.jsx';
import Search from './components/Search.jsx';
import FAQ from './components/FAQ.jsx';
// import Schedule from './components/Schedule.jsx';
// import Classes from './components/Schedule.jsx';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/quiz' component={Test} />
        <Route path='/search' component={Search} />
        <Route path='/faq' component={FAQ} />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;