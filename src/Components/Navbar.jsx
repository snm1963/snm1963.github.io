import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import React, {Component} from "react"
import {BrowserRouter as Router, Link} from "react-router-dom";

class NavBar extends Component{
  render(){
    return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">SNM Tech Solutions</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav className="mr-auto">
              <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                  <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to="/about" className="nav-link">About</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to="/projects" className="nav-link">Projects</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to="/contact" className="nav-link">Contact</Link>
                  </li>
                </ul>
            </div>
            </Nav>
        </Navbar>
    );
  }
}
export default NavBar;