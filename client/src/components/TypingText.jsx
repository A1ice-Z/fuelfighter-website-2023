import React, { useState, useEffect } from 'react';

const TypingText = ({ text, speed, secondaryText, restartDelay }) => {
  const [displayedSecondaryText, setDisplayedSecondaryText] = useState('');
  let index = 0;
  let secondaryIndex = 0;
  let displayedText = '';

  useEffect(() => {
    const interval = setInterval(() => {
      if (index <= text.length) {
        displayedText = text.slice(0, index);
        index++;
      } else if (secondaryIndex <= secondaryText.length) {
        setDisplayedSecondaryText(secondaryText.slice(0, secondaryIndex));
        secondaryIndex++;
      } else {
        setTimeout(() => {
          index = 0;
          secondaryIndex = 0;
          setDisplayedSecondaryText('');
        }, restartDelay);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, secondaryText, restartDelay]);

  return (
    <>
      <h2 style={{ height: '1.5em' }}>{displayedText}</h2>
      {secondaryText && <h2 style={{ height: '1.5em' }}>{displayedSecondaryText}</h2>}
    </>
  );
};

export default TypingText;