import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ParallaxImage = ({ image, title, subtitle, height}) => {
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
          minHeight: `${height}`,
          width: `100%`,
          backgroundAttachment: 'fixed',
          backgroundPosition: `center calc(50% - ${scrollY * 0.3}px)`,
          margin: '0',
        }}>
        <Col>
          <h1 className="text-center primaryColor" style={{
              fontSize: '3.5em',
              fontWeight: 'bold',
              marginTop: '10%',
              marginBottom: '5%',
              color: 'var(--primary-color)',
            }}>{title}</h1>
          {subtitle && (<p className="text-center primaryColor" style={{
              fontSize: '1.5em',
              marginBottom: '5%',
              color: 'var(--primary-color)',
            }}>{subtitle}</p>)}
        </Col>
      </Row>
    </Container>
  );
};

export default ParallaxImage;
