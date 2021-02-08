import React, { useState } from 'react'
import {Button, Col, Form, Modal, Row} from "react-bootstrap";

const ReactModal = () =>{
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Button variant="info" onClick={handleShow}>Course Registration</Button> 
            <Modal show={show} onHide={handleClose} size = "lg" centered >
                <Modal.Header  closeButton>
                  <Modal.Title> <h3 className="text-center">Submit Your Course Details</h3></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Col sm="10 mx-auto">
                      <Form>
                            <Form.Group as={Row} controlId="formPlaintextPassword">
                              <Form.Label column md="3">First Name</Form.Label>
                              <Col md="9 mb-3">
                                <Form.Control type="text" placeholder="First Name" required />
                              </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                              <Form.Label column md="3">Last Name</Form.Label>
                              <Col md="9 mb-3">
                                <Form.Control type="text" placeholder="Last Name" required />
                              </Col>
                            </Form.Group>
                            
                            <Form.Group as={Row} controlId="formPlaintextPassword">
                              <Form.Label column md="3">Course Name</Form.Label>
                              <Col md="9 mb-3">
                                <Form.Control type="text" placeholder="Course or Semestar Name" required />
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