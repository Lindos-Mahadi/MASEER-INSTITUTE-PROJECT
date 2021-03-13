import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import logo from '../components/img/logo.png';
import ReactModal from '../components/EnrollCourse';

const Navbar = () =>{
    // const [clos, getClos] = useState[0];
    // handleClick()

  return(
    <React.Fragment>
        <div className="bg-dark fixed-top">
            <div className="row">
                <div className="col-10 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light text-dark" id="navbar">
                    <NavLink className="navbar-brand" to="/"><img className="img-fluid" src={logo} width="60" height="60" /></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupport">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupport">
                        
                        <ul className="navbar-nav ml-auto">
                            
                            <li className="nav-item active mt-sm-5 mt-md-0" >
                                <NavLink exact activeClassName="menu_active" className="nav-link first-item" to="/">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/course">Courses</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* <NavLink exact activeClassName="menu_active" className="nav-link enrollCourse" to="#"><span className="enrollName">EnrollCourse</span></NavLink> */}
                                {/* <NavLink exact activeClassName="menu_active" className="nav-link enrollCourse" to="/enrollments"><span className="enrollName"><ReactModal></ReactModal></span></NavLink> */}
                                <NavLink exact activeClassName="menu_active" className="nav-link enrollCourse" to="/enrollments">Enrollment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/notice">Notice</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/enrollCourse" hidden>Enroll Course</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex justify-content-end social-list ">
                            <p className="d-none d-sm-block"><a className="nav-link float-right" href="/contact"><i className="fa fa-phone"></i></a></p>
                            <p className="d-none d-sm-block"><a className="nav-link float-right" href="/contact"><i className="fa fa-envelope-o"></i></a></p>
                            <p className=""><a className="nav-link" href=""><i className="fa fa-facebook"></i></a></p>
                            <p className="d-none d-sm-block"><a className="nav-link" href=""><i className="fa fa-twitter"></i></a></p>
                            <p className=""><a className="nav-link" href=""><i className="fa fa-instagram"></i></a></p>
                            <p className="d-none d-sm-block"><a className="nav-link" href=""><i className="fa fa-linkedin"></i></a></p>
                            <p className=""><a className="nav-link" href="https://www.youtube.com/watch?v=yMbQFaiQs3A"><i className="fa fa-youtube-play"></i></a></p>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>

    </React.Fragment>
  );
};

export default Navbar;