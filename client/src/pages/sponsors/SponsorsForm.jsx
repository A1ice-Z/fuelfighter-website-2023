import React, { useState } from 'react';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';

export default function SponsorForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [employer, setEmployer] = useState('');
  const [messageText, setMessageText] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);


  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
        emailObject: emailAddress,
        name: firstName,
        surname: lastName,
        employer: employer,
        message: messageText
      };
      
      fetch('/backend/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setSubmissionStatus('success');
        } else {
          setSubmissionStatus('error');
        }
        setShowModal(true);
      })
      .catch(error => {
        console.error(error);
        setSubmissionStatus('error');
      });
    }

    return (
      <>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Email Status</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>
            {submissionStatus === 'success' && <p style={{ color: 'green', fontWeight: 'bold', fontSize: '1.2em' }}>Mail Sent Successfully</p>}
            {submissionStatus === 'error' && <p style={{ color: 'red', fontWeight: 'bold', fontSize: '1.2em' }}>There was an error sending your email, contact us from here</p>}
          </div>
          </Modal.Body>
        </Modal>
        <Form className='primaryColor' style={{marginInline:"7%", marginBlock:"3%"}} onSubmit={handleSubmit}>
        <h3>CONTACT US TO LEARN MORE ABOUT BECOMING A PARTNER</h3>
        {/* <div>
          {submissionStatus === 'success' && <p style={{ color: 'green', fontWeight: 'bold', fontSize: '1.2em' }}>Mail Sent Successfully</p>}
          {submissionStatus === 'error' && <p style={{ color: 'red', fontWeight: 'bold', fontSize: '1.2em' }}>There was an error sending your email, contact us from here</p>}
        </div> */}
        <Row style={{margin:"3%"}}>
          <Col>
            <Form.Group controlId="firstName">
              <Form.Label>First Name<span className="required">*</span></Form.Label>
              <Form.Control type="text" placeholder="Enter first name" onChange={(event) => setFirstName(event.target.value)} required />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId = "lastName">
              <Form.Label>Last Name<span className="required">*</span></Form.Label>
              <Form.Control type="text" placeholder="Enter last name" onChange={(event) => setLastName(event.target.value)} required/>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="emailAddress">
                <Form.Label>Email Address<span className="required">*</span></Form.Label>
                <Form.Control type="email" placeholder="Enter email address" onChange={(event) => setEmailAddress(event.target.value)} required/>
            </Form.Group>
          </Col>
        </Row>
        
        <Row style={{margin:"3%"}}>
            <Form.Group controlId = "employer">
                <Form.Label>Employer</Form.Label>
                <Form.Control type="text" placeholder="Enter employer" onChange={(event) => setEmployer(event.target.value)}/>
            </Form.Group>
        </Row>

        <Row style={{margin:"3%"}}>
            <Form.Group controlId="message">
            <Form.Label>Message<span className="required">*</span></Form.Label>
            <Form.Control as='textarea' rows={3} onChange={(event) => setMessageText(event.target.value)} required/>
            </Form.Group>
        </Row>
        <Button type="submit" style={{'backgroundColor':'var(--primary-color)','borderColor':'var(--primary-color)', 'color': 'var(--secondary-color)', marginInline:"45%", paddingInline:'3%'}}>
          SUBMIT
        </Button>
      </Form>
      </>
    );
}