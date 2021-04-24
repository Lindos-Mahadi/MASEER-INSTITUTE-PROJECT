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
                        <Form action="https://formspree.io/f/xknkgpgy" method="POST">
                        <Form.Group as={Row} controlId="formPlaintextPassword">
                              <Form.Label column md="3">Full Name</Form.Label>
                              <Col md="9 mb-3">
                                <Form.Control type="text" name="Full-Name" placeholder="Name" required />
                              </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                              <Form.Label column md="3">Birth ID or NID or Passport No</Form.Label>
                              <Col md="9 mb-3">
                                <Form.Control type="text" name="National-Id-or-Passport-No" placeholder="National Id or Passport No" required />
                              </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                  <Form.Label column md="3">Educational Qualification</Form.Label>
                                  <Col md="9 mb-3">
                                    <Form.Control type="text" name="Educational-Qualification" placeholder="Educational Qualification" required />
                                  </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                  <Form.Label column md="3">Profession</Form.Label>
                                  <Col md="9 mb-3">
                                    <Form.Control type="text" name="Profession" placeholder="Profession" required />
                                  </Col>
                                </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                              <Form.Label column md="3">Course Name</Form.Label>
                              <Col md="9 mb-3">
                                <select className="form-control" name="Select-Course-Name" id="select-profession" required >
                                  <option value="" disable>Select Course or Semestar Name </option>
                                  <option value="Arabic Language & Quranic Grammar 1st Semester">Arabic Language & Quranic Grammar 1st Semester </option>
                                  <option value="Arabic Language & Quranic Grammar 2nd Semester">Arabic Language & Quranic Grammar 2nd Semester </option>
                                  <option value="Arabic Language & Quranic Grammar 3rd Semester">Arabic Language & Quranic Grammar 3rd Semester</option>
                                  <option value="Arabic Language & Quranic Grammar Semester 4 – 6">Arabic Language & Quranic Grammar Semester 4 – 6</option>
                                  <option value="Quran Reading & Reciting program 3 semesters">Quran Reading & Reciting program 3 semesters </option>
                                  <option value="Hifzul Quran Program">Hifzul Quran Program </option>
                                  <option value="Fundamental Quranic Grammar 1st Semester">Fundamental Quranic Grammar 1st Semester </option>
                                  <option value="Fundamental Quranic Grammar 2nd semester">Fundamental Quranic Grammar 2nd semester </option>
                                  <option value="Fundamental Quraic Grammer 3rd semester">Fundamental Quraic Grammer 3rd semester</option>
                                  <option value="Advanced Quran Learning Programme">Advanced Quran Learning Programme</option>
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
                                <Form.Control type="email" name="Email" name="_replyto" placeholder="Enter Your Email" required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                              </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                              <Form.Label column md="3">Phone Number</Form.Label>
                              <Col md="9 mb-3">
                                <Form.Control type="text" name="p-number" placeholder="Enter Your Phone Number" required />
                                <Form.Text className="text-muted">
                                    We'll never share your phone with anyone else.
                                </Form.Text>
                              </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextPassword">
                              <Col>
                                <Button variant="primary" className="float-right ml-3" target="_blank" type="submit"> Submit </Button>
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