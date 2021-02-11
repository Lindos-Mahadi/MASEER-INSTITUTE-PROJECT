import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../components/img/logo.jpg';

const Navbar = () =>{

  return(
    <React.Fragment>
        <div className="bg-dark fixed-top">
            <div className="row">
                <div className="col-10 mx-auto">
                <nav className="navbar navbar-expand-sm navbar-light text-dark">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link con-info" href=""><i className="fa fa-phone"></i> +880 1765-25120</a></li>
                            <li className="nav-item"><a className="nav-link con-info" href=""><i className="fa fa-envelope-o"></i> info@maseerinstitute.com</a></li>
                            <li className="nav-item"><a className="nav-link" href=""><i className="fa fa-facebook"></i></a></li>
                            <li className="nav-item"><a className="nav-link" href=""><i className="fa fa-twitter"></i></a></li>
                            <li className="nav-item"><a className="nav-link" href=""><i className="fa fa-instagram"></i></a></li>
                            <li className="nav-item"><a className="nav-link" href=""><i className="fa fa-linkedin"></i></a></li>
                            <li className="nav-item"><a className="nav-link" href=""><i className="fa fa-youtube-play"></i></a></li>
                        </ul>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-light text-dark" id="navbar">
                    <NavLink className="navbar-brand" to="/"><img className="img-fluid rounded-circle" src={logo} width="60" height="40" /></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupport">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupport">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/course">Course</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/enrollCourse" hidden>Enroll Course</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link enrollCourse" to="#"><span className="enrollName">EnrollCourse</span></NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>

    </React.Fragment>
  );
};

export default Navbar;