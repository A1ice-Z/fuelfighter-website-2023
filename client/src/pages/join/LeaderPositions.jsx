import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

// import imageMocked from '../../assets/404-img.jpeg';

const LeaderPositions = ({ positions }) => {
  const [selectedPosition, setSelectedPosition] = useState(positions[0]);
  const [selectedRow, setSelectedRow] = useState('Board');

  const handleSelectPosition = (position) => {
    setSelectedPosition(position);
  };

  const handleSelectRow = (event) => {
    setSelectedRow(event.target.value);
  };

  const firstRowPositions = positions.slice(0, 5);
  const secondRowPositions = positions.slice(5);

  return (
    <div className='positions-wrapper'>
    <Container>
      <Row>
        <Col>
          <h3>Select the position:</h3>
          <Button className="button-positions" variant={selectedRow === 'Board' ? 'outline-light' : 'light'} value="Board" onClick={handleSelectRow}>
            Board
          </Button>
          <Button className="button-positions" variant={selectedRow === 'Group Leader' ? 'outline-light' : 'light'} value="Group Leader" onClick={handleSelectRow}>
            Group Leaders
          </Button>
        </Col>
      </Row>
      {selectedRow === 'Board' && (
        <Row>
          {firstRowPositions.map((position) => (
            <Col
              key={position.title}
              className={`position-item ${
                position === selectedPosition ? 'selected' : ''
              }`}
              onClick={() => handleSelectPosition(position)}
            >
              {position.title}
            </Col>
          ))}
        </Row>
      )}
      {selectedRow === 'Group Leader' && (
        <Row>
          {secondRowPositions.map((position) => (
            <Col
              key={position.title}
              className={`position-item ${
                position === selectedPosition ? 'selected' : ''
              }`}
              onClick={() => handleSelectPosition(position)}
            >
              {position.title}
            </Col>
          ))}
        </Row>
      )}
      <Row className="selected-position" style={{flexDirection: 'row', marginTop: '2rem'}}>
        <h3 style={{textAlign: 'center'}} className='rainbow_text_animated'>{selectedPosition.title}</h3>
        <Col xs={12} sm={5}>
          <img src={selectedPosition.image} alt={selectedPosition.title} className="position-image" />
          {/* <img src={imageMocked} alt={selectedPosition.title} className="position-image" /> */}
        </Col>
        <Col xs={12} sm={7}>
          <p style={{textAlign: 'justify'}}>{selectedPosition.description}</p>
        </Col>
        
        
      </Row>
    </Container>
    </div>
  );
};

export default LeaderPositions;