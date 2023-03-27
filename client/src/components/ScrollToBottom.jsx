import React, { useState, useEffect } from 'react';

const ScrollToBottom = ({appear, disappear}) => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const chevronDown = document.querySelector(appear);
    const sponsorForm = document.querySelector(disappear);
    if (chevronDown && sponsorForm) {
      const chevronDownBottom = chevronDown.getBoundingClientRect().bottom;
      const sponsorFormTop = sponsorForm.getBoundingClientRect().top;
      setVisible(chevronDownBottom < 0 && sponsorFormTop > window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    visible && (
      <div
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '80px',
          cursor: 'pointer',
          zIndex: '1000',
        }}
        onClick={handleClick}
      >
        <i className="bi bi-arrow-down-circle-fill" style={{ fontSize: '3rem', color: '#add8e6'}}></i>
      </div>
    )
  );
};

export default ScrollToBottom;