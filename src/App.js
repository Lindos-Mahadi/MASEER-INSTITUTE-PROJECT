import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import ScrollTop from "./components/ScrollToTop";
import About from "./components/About";
import Course from "./components/Course";
import Contact from "./components/Contact";
import NavbarMenu from "./components/Navbar";
import Footer from "./components/Footer";
import Enrollments from "./components/Enrollments";
import Notice from "./components/Notice";


const App = () =>{
  return(
    <React.Fragment>
      <BrowserRouter>
        <ScrollTop>
            <NavbarMenu />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/course" component={Course} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/enrollments" component={Enrollments} />
                <Route exact path="/notice" component={Notice} />
                <Redirect to="/" />
              </Switch>
            <Footer />
        </ScrollTop>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;