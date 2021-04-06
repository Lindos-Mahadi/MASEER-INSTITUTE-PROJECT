import React from 'react';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';
import { Button, Col, Form, Row} from 'react-bootstrap';
import GoogleMaps from './maps/GoogleMaps';

const Contact = () =>{
    return (
        <React.Fragment>
            <section className="py-5 mt-3 contact-section"></section>
                <section className="contact">
                    <div className="dark">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <h2 className="text-uppercase pt-sm-5">contact info</h2>
                                    <p className="lead">Welcome to our Website. We are glad to have you around</p>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                        <h4><PhoneEnabledIcon className="mr-4" />Mobile</h4>
                                        <h5 className="ml-5">+8801765-251201</h5>
                                        </div>

                                        <div className="col-12 col-md-6">
                                        <h4><EmailIcon className="mr-4" />Phone</h4>
                                        <h5 className="ml-5">+8801717-757539</h5>
                                        </div>
                                    </div>
                                    <hr/>
                                    <h2><RoomIcon className="mr-4" />Address</h2>
                                    <p className="lead ml-5">House# 116, Senpara-parbota, Mirpur 10, Dhaka-1216. Bangladesh</p>
                                    <hr/>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <h2 className="text-uppercase pt-sm-5">send a message</h2>
                                    <p className="lead">Your email address will not be published.Required fields'r marked</p>
                                    <hr/>
                                    <div className="contact-section">
                                        <div className="row">
                                        <Form action="https://formspree.io/f/info@maseerinstitute.com" method="post">
                                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                                <Col md="6" sm="12 pb-3">
                                                    <Form.Control type="text" placeholder="Name *" required />
                                                </Col>
                                                <Col md="6" sm="12">
                                                    <Form.Control type="text" placeholder="Email *" required />
                                                </Col>
                                                <Col md="12">
                                                    <Form.Control type="text" className="my-3" placeholder="Subject *" required />
                                                </Col>
                                                <Form.Group controlId="exampleForm">
                                                    <Form.Control as="textarea" Rows={5} placeholder="Message *" required />
                                                    </Form.Group>
                                                </Form.Group>
                                                <Button variant="primary" className="my-2" type="submit">Submit</Button>
                                            </Form>
                                            {/* <form class="" action="" method="POST">
                                                <div className="form-group row">
                                                    <div className="col-md-6 col-sm-12 pb-3">
                                                        <input className="form-control text-primary" type="text" placeholder="Name *" required />
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <input className="form-control" type="text" placeholder="Email *" required />
                                                    </div>
                                                    <div className="col-md-12">
                                                        <input className="form-control my-3" type="text" placeholder="Email *" required />
                                                    </div>
                                                    <div className="form-group">
                                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                    </div>
                                                </div>
                                                <button className="my-2 btn btn-primary" type="submit">Submit</button>
                                            </form> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <GoogleMaps />
        </React.Fragment>
    )
}
export default Contact;