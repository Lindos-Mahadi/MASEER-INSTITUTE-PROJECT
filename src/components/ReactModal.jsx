import React, { useState } from 'react'
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import "../../node_modules/font-awesome/css/font-awesome.min.css";
// import "../../"

const ReactModal = () =>{
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Button variant="btn btn-success btn-outline-dark btn-lg btn-home" onClick={handleShow}>Enroll Course</Button> 
            <Modal show={show} onHide={handleClose} size = "lg" centered >
                <Modal.Header  closeButton>
                  <Modal.Title> <h3 className="text-center">Submit Your Course Details</h3></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Col sm="10 mx-auto">
                      <Form>
                            <Form.Group as={Row} controlId="formPlaintextPassword">
                              <Form.Label column md="3">Full Name</Form.Label>
                              <Col md="9 mb-3">
                                <Form.Control type="text" placeholder="First Name" required />
                              </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                              <Form.Label column md="3">National Id or Passport No</Form.Label>
                              <Col md="9 mb-3">
                                <Form.Control type="text" placeholder="National Id or Passport No" required />
                              </Col>
                            </Form.Group>
                            
                            <Form.Group as={Row} controlId="formPlaintextPassword">
                              <Form.Label column md="3">Course Name</Form.Label>
                              <Col md="9 mb-3">
                                {/* <Form.Control type="text" placeholder="Course or Semestar Name" required /> */}
                                <select className="form-control" name="select-profession" id="select-profession" required >
                                  <option value="" disable>Select Course or Semestar Name </option>
                                  <option value="hacker">Hacker</option>
                                  <option value="gamer">Gamer</option>
                                  <option value="develop">Develop</option>
                                </select>
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

                            <Modal.Footer className="mt-3">
                              <Button variant="secondary" className="float-left" onClick={handleClose}>
                                  Cancel
                                </Button>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Modal.Footer>
                        </Form>

                    </Col>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}
export default ReactModal;