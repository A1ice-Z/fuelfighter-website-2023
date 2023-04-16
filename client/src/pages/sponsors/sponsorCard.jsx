import React, {useState} from 'react'
import { Card, Modal, Button } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

import '../../styles/pageStyles/Sponsors/card.css'

const AnimatedCard = animated(Card);

export default function SponsorCard({ name, img, level, link, description }) {
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
  
  const getCardStyle = () => levels[level]?.cardStyle || '';
  const getMedal = () => levels[level]?.medal || null;
  const getTitleSpan = () => levels[level]?.titleSpan || null;
  const getModalTitle = () => "modal-"+level.toLowerCase()+"-title";

  const getCardSize = () => levels[level]?.cardSize || '100px';
  return (
    <>
        <AnimatedCard ref={ref} style={{...animationProps, padding: '1%', height:`${getCardSize()}`}} className={`sponsorCard ${getCardStyle()}`} aria-label={`${name} sponsor card`} onClick={handleShowModal}>
          {getMedal()}
          <Card.Img src={img} alt={`${name} img`} aria-label={`${name} image`} />
        </AnimatedCard>
    
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title id="title" className={`${getModalTitle()}`}>{name}</Modal.Title>
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

const levels = {
  Diamond: {
    cardStyle: 'diamondSponsor',
    cardSize: '250px',
    medal: <div className="medal diamond">💎</div>,
    titleSpan: <span className='diamond'>Platinum Sponsor</span>
  },
  Gold: {
    cardStyle: 'goldSponsor',
    cardSize: '200px',
    medal: <div className="medal gold">🥇</div>,
    titleSpan: <span className='gold'>Gold Sponsor</span>
  },
  Silver: {
    cardStyle: 'silverSponsor',
    cardSize: '150px',
    medal: <div className="medal silver">🥈</div>,
    titleSpan: <span className='silver'>Silver Sponsor</span>
  },
  Bronze: {
    cardStyle: 'bronzeSponsor',
    cardSize: '120px',
    medal: <div className="medal bronze">🥉</div>,
    titleSpan: <span className='bronze'>Bronze Sponsor</span>
  },
  Partner: {
    cardStyle: '70px',
    medal: <div className="medal partner">🤝</div>,
    titleSpan: null
  }
};

// const colors = {
//   Diamond: ['#B9F2FF', '#E6E6FA', '#B0C4DE'],
//   Gold: ['#FFD700', '#DAA520', '#FFA500'],
//   Silver: ['#C0C0C0', '#DCDCDC', '#A9A9A9'],
//   Bronze: ['#CD7F32', '#BC8F8F', '#D2691E']
// };

  // const [dim, setDim] = useState([0,0,0,0])
  // useEffect(() => {
  //   if (myRef.current) {
  //     const rect = myRef.current.getBoundingClientRect();
  //     setDim([rect.x, rect.y, rect.width, rect.height]);
  //     console.log(rect.x, rect.y, rect.width, rect.height);
  //   }
  // }, []);