import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Course from "./components/Course";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () =>{
  return(
    <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/course" component={Course} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default App;