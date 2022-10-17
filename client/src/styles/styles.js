import { useState, useEffect } from "react";

const clrs = {
    blue            : "#222f5c",
    white           : '#ffffff',
    green           : "#9BCBA7",
}
export const colors = {
    darkPrimary     : clrs.blue,
    darkSecondary   : clrs.white,
    darkTertiary    : clrs.green, 

    lightPrimary    : clrs.white,
    lightSecondary  : clrs.blue,
    lightTertiary   : clrs.green,
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
