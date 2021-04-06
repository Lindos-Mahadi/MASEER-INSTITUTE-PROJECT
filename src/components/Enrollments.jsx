import React from 'react'
import {Button, Group, Label, Col, Form, Modal, Row} from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Enrollments = ()=>{
    return (
        <React.Fragment>
            <section className="pt-5"></section>
            <section className="pt-5"></section>
            <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <Form action="https://formspree.io/f/info@maseerinstitute.com" method="post">
                        <Form.Group as={Row} controlId="formPlaintextPassword">
                              <Form.Label column md="3">Full Name</Form.Label>
                              <Col md="9 mb-3">
                                <Form.Control type="text" placeholder="Name" required />
                              </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                              <Form.Label column md="3">National Id or Passport No</Form.Label>
                              <Col md="9 mb-3">
                                <Form.Control type="text" placeholder="National Id or Passport No" required />
                              </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                  <Form.Label column md="3">Educational Qualification</Form.Label>
                                  <Col md="9 mb-3">
                                    <Form.Control type="text" placeholder="Educational Qualification" required />
                                  </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                  <Form.Label column md="3">Profession</Form.Label>
                                  <Col md="9 mb-3">
                                    <Form.Control type="text" placeholder="Profession" required />
                                  </Col>
                                </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                              <Form.Label column md="3">Course Name</Form.Label>
                              <Col md="9 mb-3">
                                {/* <Form.Control type="text" placeholder="Course or Semestar Name" required /> */}
                                <select className="form-control" name="select-profession" id="select-profession" required >
                                  <option value="" disable>Select Course or Semestar Name </option>
                                  <option value="hacker">Arabic Language & Quranic Grammar 1st Semester </option>
                                  <option value="gamer">Arabic Language & Quranic Grammar 2nd Semester </option>
                                  <option value="develop">Arabic Language & Quranic Grammar 3rd Semester</option>
                                  <option value="develop">Arabic Language & Quranic Grammar Semester 4 – 6</option>
                                  <option value="develop">Quran Reading & Reciting program 3 semesters </option>
                                  <option value="develop">Hifzul Quran Program </option>
                                  <option value="develop">Fundamental Quranic Grammar 1st Semester </option>
                                  <option value="develop">Fundamental Quranic Grammar 2nd semester </option>
                                  <option value="develop">Fundamental Quraic Grammer 3rd semester</option>
                                  <option value="develop">Advanced Quran Learning Programme</option>
                                </select>
                                <Form.Text className="text-muted">
                                    Please review our courses before selecting a course.
                                </Form.Text>
                                <NavLink exact activeClassName="menu_active" className="nav-link float-right" to="/course">Click Here</NavLink>
                              </Col>
                              
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                              <Form.Label column md="3">E-mail Address</Form.Label>
                              <Col md="9 mb-3">
                                <Form.Control type="email" placeholder="Enter Your Email" required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                              </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                              <Form.Label column md="3">Phone Number</Form.Label>
                              <Col md="9 mb-3">
                                <Form.Control type="text" placeholder="Enter Your Phone Number" required />
                                <Form.Text className="text-muted">
                                    We'll never share your phone with anyone else.
                                </Form.Text>
                              </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextPassword">
                              <Col>
                                <Button variant="primary" className="float-right ml-3" type="submit"> Submit </Button>
                                <Button variant="danger" className="float-right" type="cancel">Cancel</Button>
                              </Col>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
            </section>
        </React.Fragment>
    )
}
export default Enrollments;