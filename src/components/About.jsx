import React from 'react';
import Button from '@material-ui/core/Button';
import Gallery from './Gallery';


const About = () =>{
    return (
        <React.Fragment>
            <section className="py-5 my-5"></section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h3>Open Day 2020</h3>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ullam molestias minima enim suscipit odit sed perspiciatis beatae quo possimus.</p>
                        <br/>
                        <ul className="list-unstyled">
                            <li>Saturday 20 August 2020</li>
                            <li>Saturday 20 August 2020</li>
                            <li>Saturday 20 August 2020</li>
                            <li>Saturday 20 August 2020</li>
                        </ul>
                        <Button variant="contained" color="secondary">Read More</Button>
                    </div>
                    <div className="col-lg-4">
                        <img className="img-fluid" src="https://images.unsplash.com/photo-1604161547272-167c2fd11c7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1554&q=80" alt=""/>
                    </div>
                    <div className="col-lg-4">
                        <h3>Latest News</h3>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum placeat fugit! Libero, neque mollitia?</p>
                        <i className="fa fa-calendar"><span>January 20 2020</span></i>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum placeat fugit! Libero, neque mollitia?</p>
                        <i className="fa fa-calendar"><span>January 20 2020</span></i>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum placeat fugit! Libero, neque mollitia?</p>
                        <i className="fa fa-calendar"><span>January 20 2020</span></i>
                    </div>
                </div>
            </div>
            <section className="py-5 my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Gallery />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default About;