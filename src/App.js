import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Switch, Route, Link } from "react-router-dom";

import Navigation from './Navigation';
import AboutUs from './AboutUs';
import Login from './Login';
import ContactUs from './ContactUs';
import Welcome from './Welcome';
import Signup from './Signup';
import Bookorder from './Bookorder';
import Defaultconfig from './Defaultconfig';
import history from './history';
import Configpage from "./Configpage";
import Invoice from "./Invoice";
import Nomatch from "./Nomatch";

import './App.css'
class App extends React.Component {

  render() {
    return (<div>

      <Router history={history}>
        <div >
          <nav className="navbar navbar-expand-lg navbar-light  fixed-top ">
            <div className="container-fluid">
              <a class="navbar-brand" href="/">
                <img src="https://img.icons8.com/nolan/2x/car.png" width="30" height="30" class="d-inline-block align-top mr-2" alt="" />
                <span className="navbar-text">S4KVR VECHICLE CONFIG</span>
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto p-0">
                  <li className="nav-item active">
                    <Link className="nav-link" to={"/"}><span className="navbar-text">HOME</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/aboutus"}><span className="navbar-text">ABOUT US</span></Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={"/contactus"}><span className="navbar-text">CONTACT US</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/login"}><span className="navbar-text">LOGIN</span></Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={"/signup"}><span className="navbar-text">SIGNUP</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/bookorder"}><span className="navbar-text">BOOK ORDER</span></Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path='/' component={Navigation} />
                <Route path="/login" component={Login} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/contactus" component={ContactUs} />
                <Route path="/bookorder" component={Bookorder} />
                <Route path="/signup" component={Signup} />
                <Route path="/welcome" component={Welcome} />
                <Route path="/defaultconfig/:id" 
                 render={(props) =>
                  (<Defaultconfig {...props} key={props.match.params.id} />)}></Route>
                <Route path="/invoice" component={Invoice} />
                <Route path="/configpage/:id" 
                 render={(props) =>
                  (<Configpage {...props} key={props.match.params.id} />)}></Route>
                {/* <Route path="/defaultconfig" component={Defaultconfig} /> */}
                <Route path="/*" component={Nomatch} />
              </Switch>
            </div>
          </div>
        </div></Router>
    </div>)
  }
}
export default App