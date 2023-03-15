import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ParallaxImage = ({ image }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container fluid className="p-0">
      <Row className="align-items-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          minHeight: '50vh',
          backgroundAttachment: 'fixed',
          backgroundPosition: `center calc(50% + ${scrollY * 0.3}px)`,
        }}>
        <Col>
          <h1 className="text-center primaryColor">Join Us</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default ParallaxImage;
