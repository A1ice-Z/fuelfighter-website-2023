import React, { useState, useEffect } from 'react';

const TypingText = ({ text, speed, secondaryText }) => {
  const [displayedSecondaryText, setDisplayedSecondaryText] = useState('');
  // let index = 0;
  let secondaryIndex = 0;
  // let displayedText = '';

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondaryIndex <= secondaryText.length) {
        setDisplayedSecondaryText(secondaryText.slice(0, secondaryIndex));
        secondaryIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, secondaryText]);

  return (
    <>
      <h2 style={{ height: '1.5em' }}>{text}</h2>
      {secondaryText && <h2 style={{ height: '1.5em' }}>{displayedSecondaryText}</h2>}
    </>
  );
};

export default TypingText;