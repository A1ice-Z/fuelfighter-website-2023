import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Join = () => {
    return (
        <div className='primaryColor'>
            <Container fluid className="p-0">
                <Row className="align-items-center" style={{ backgroundImage: `url('https://bsic.it/wp-content/uploads/2021/09/Join-Us-Header.jpg')`, backgroundSize: 'cover', minHeight: '50vh' }}>
                <Col>
                    <h1 className="text-center">Join Us</h1>
                </Col>
                </Row>
            </Container>
            <Container>
                <p className="text-center">We are currently recruiting for Autonomous, Electrical, Design, Software, Marketing & Finance.</p>
                <div className="text-center">
                <Button variant="primary">Apply Now</Button>
                </div>
                <h3 className="text-center mt-5">Available Roles</h3>
                <ul>
                    <li>Autonomous</li>
                    <li>Electrical</li>
                    <li>Design</li>
                    <li>Software</li>
                    <li>Marketing</li>
                    <li>Finance</li>
                </ul>
            </Container>
        </div>
      );
};