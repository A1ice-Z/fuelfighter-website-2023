import React, {useState} from 'react'
import { Card, Modal, Button } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

import '../../styles/pageStyles/Sponsors/card.css'

const AnimatedCard = animated(Card);

// const colors = {
//   Diamond: ['#B9F2FF', '#E6E6FA', '#B0C4DE'],
//   Gold: ['#FFD700', '#DAA520', '#FFA500'],
//   Silver: ['#C0C0C0', '#DCDCDC', '#A9A9A9'],
//   Bronze: ['#CD7F32', '#BC8F8F', '#D2691E']
// };

export default function SponsorCard({ name, img, level, link, description }) {
  // const [dim, setDim] = useState([0,0,0,0])
  // useEffect(() => {
  //   if (myRef.current) {
  //     const rect = myRef.current.getBoundingClientRect();
  //     setDim([rect.x, rect.y, rect.width, rect.height]);
  //     console.log(rect.x, rect.y, rect.width, rect.height);
  //   }
  // }, []);

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  
  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(100px)',
  });
  
  const getCardStyle = () => {
    switch (level) {
      case 'Diamond':
        return 'diamondSponsor';
      case 'Gold':
        return 'goldSponsor';
      case 'Silver':
        return 'silverSponsor';
      case 'Bronze':
        return 'bronzeSponsor';
      default:
        return '';
    }
  };

  const getImageStyle = () => {
    switch (level) {
      case 'Diamond':
        return '250px';
      case 'Gold':
        return '200px';
      case 'Silver':
        return '150px';
      case 'Bronze':
        return '100px';
      case 'Partner':
        return '70px';
      default:
        return '';
    }
  };

  const getMedal = () => {
    switch (level) {
      case 'Diamond':
        return <div className="medal diamond">💎</div>;
      case 'Gold':
        return <div className="medal gold">🥇</div>;
      case 'Silver':
        return <div className="medal silver">🥈</div>;
      case 'Bronze':
        return <div className="medal bronze">🥉</div>;
      case 'Partner':
        return <div className="medal partner">🤝</div>;
      default:
        return null;
    }
  };
  const titleSpan = () => {
    switch (level) {
      case 'Diamond':
        return <span className='diamond'>Platinum Sponsor</span>
      case 'Gold':
        return <span className='gold'>{level} Sponsor</span>
      case 'Silver':
        return <span className='silver'>{level} Sponsor</span>
      case 'Bronze':
        return <span className='bronze'>{level} Sponsor</span>
      default:
        return null
    }
  }
  
  return (
    <>
        <AnimatedCard ref={ref} style={{...animationProps, padding: '1%'}} className={`sponsorCard ${getCardStyle()}`} aria-label={`${name} sponsor card`} onClick={handleShowModal}>
          {getMedal()}
          <Card.Img variant="top" src={img} alt={`${name} img`} aria-label={`${name} image`} style={{height:`${getImageStyle()}`}} />
          <div className="sponsorBody">
            <Card.Body>
              <Card.Title>{name}</Card.Title>
            </Card.Body>
          </div>
        </AnimatedCard>
    
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{name} - {titleSpan()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={img} alt={`${name} img`} style={{ float: "right", maxWidth: "50%",  margin: "19px"}} />
          <div style={{ textAlign: "justify" }}>{description}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" href={link}>
            Learn More
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}