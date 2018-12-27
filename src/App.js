import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './App.css';
import {Navbar, Nav, NavItem } from 'react-bootstrap'
import Stuff from "./Stuff";
import Home from "./Home";
import Forum from "./Forum";

class App extends Component {
  
  render() {
    return (
      <HashRouter>
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                  <a href="#">LocalNews</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="#/stuff">
                Stuff
              </NavItem>
              <NavItem eventKey={2} href="#/forum">
                Forum
              </NavItem>
            </Nav>
          </Navbar>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/forum" component={Forum}/>
          </div>   
        </div>
      </HashRouter>     
    );
  }
}

export default App;
