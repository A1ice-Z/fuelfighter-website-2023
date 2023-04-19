import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const PersonCard = ({firstname, lastname, image, study, email, linkedin}) => {
  
  return (
    <Card style={{ width: '40%', border: 'none', fontSize: '1.7rem'}} className='secondaryColor'>
      <Card.Img variant="top" src={image} style={{ objectFit: 'fit' }} />
      <Card.Body>
        <Card.Title>{firstname} {lastname}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{study}</Card.Subtitle>
        <ListGroup variant="flush">
          <ListGroup.Item style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <a href={linkedin}>
              <i className="bi bi-linkedin"></i>
            </a>
            <a href={`mailto:${email}`}>
              <i className="bi bi-envelope"></i>
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default PersonCard;