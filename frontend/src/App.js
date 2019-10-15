import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Restaurant from './components/Restaurant.js';
import Homepage from './components/Homepage.js';

class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <nav className="navbar fixed-top ">            
          <Link to="/"><span className="logo">Mandarian</span></Link>
          <ul className="ulNavbar">
            <Link to="/restaurant" className="link"><li>Restaurant</li></Link>
            <Link to="/hotel" className="link"><li>Hotel</li></Link>
            <Link to="/aboutus" className="link"><li>About Us</li></Link>
            <Link to="/contact" className="link"><li>Contact</li></Link>
          </ul>     
          </nav>
          <Switch>
            <Route exact path="/">
              <Homepage/>
            </Route>
            <Route path="/restaurant">
              <Restaurant />
            </Route>
            <Route path="/hotel">
              <Hotel />
            </Route>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          
        </div>
      </Router>
    )
  }
}

function Hotel() {
  return (
    <div>
      <h2>Dashboard2</h2>
    </div>
  );
}
function AboutUs() {
  return (
    <div>
      <h2>Dashboard3</h2>
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h2>Dashboard4</h2>
    </div>
  );
}
export default App;
