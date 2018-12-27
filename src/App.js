import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './App.css';
import Home from "./Home";
import Forum from "./Forum";

class App extends Component {
  
  render() {
    return (
      <HashRouter>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">LocalNews</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/forum">
                  Forum
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/forum" component={Forum}/>
          </div>   
        </div>
      </HashRouter>     
    );
  }
}

export default App;
