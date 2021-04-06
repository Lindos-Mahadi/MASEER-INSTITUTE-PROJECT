import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import logo from '../components/img/logo.png';
import {Navbar, Nav, NavDropdown, to} from 'react-bootstrap';

const NavbarMenu = (props) =>{
    //  const {location}=props;

  return(
    <React.Fragment>
        <div className="bg-dark fixed-top">
            <div className="row">
                <div className="col-10 mx-auto">
                    <Navbar collapseOnSelect expand="lg" text="dark" id="navbar">
                      <Navbar.Brand href="/"><img className="img-fluid" src={logo} width="60" height="60" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                          <Navbar.Collapse id="responsive-navbar-nav" className="navbar">
                              <Nav className="ml-auto">
                                  <Nav.Item className="nav-item mt-sm-5 mt-md-0">
                                      <Nav.Link activeClassName="menu_active" className="nav-link first-item" href="/">Home</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item >
                                      <Nav.Link activeClassName="menu_active" className="nav-link" href="/course">Courses</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                      <Nav.Link activeClassName="menu_active" className="nav-Link enrollCourse" href="/enrollments">Enrollment</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                      <Nav.Link activeClassName="menu_active" className="nav-link" href="/notice">Notice</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                      <Nav.Link activeClassName="menu_active" className="nav-link" href="/about">About Us</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                      <Nav.Link activeClassName="menu_active" className="nav-link" href="contact">Contact Us</Nav.Link>
                                  </Nav.Item>
                              </Nav>
                              <div className="d-flex justify-content-end social-list ">
                              <p className="d-none d-sm-block"><a className="nav-link float-right" href="/contact"><i className="fa fa-phone"></i></a></p>
                              <p className="d-none d-sm-block"><a className="nav-link float-right" href="/contact"><i className="fa fa-envelope-o"></i></a></p>
                              <p className=""><a className="nav-link" href="https://www.facebook.com/maseerinstitute/" target="_blank"><i className="fa fa-facebook"></i></a></p>
                              <p className="d-none d-sm-block"><a className="nav-link" href="/contact"><i className="fa fa-twitter"></i></a></p>
                              <p className=""><a className="nav-link" href="/"><i className="fa fa-instagram"></i></a></p>
                              <p className="d-none d-sm-block"><a className="nav-link" href="/contact"><i className="fa fa-linkedin"></i></a></p>
                              <p className=""><a className="nav-link" href="/contact"><i className="fa fa-youtube-play"></i></a></p>
                          </div>
                        </Navbar.Collapse>
                    </Navbar>
            </div>
        </div>
    </div>

    </React.Fragment>
  );
};

export default NavbarMenu;