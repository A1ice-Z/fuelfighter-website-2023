import React, { useEffect }from 'react';

const IframeCarousel = () => {
  const iframes = [
    "https://www.instagram.com/p/CkVy0n4tFwI/embed",
    "https://www.instagram.com/p/Cjr3umZtZDT/embed",
    "https://www.instagram.com/p/CXEFltgs3_3/embed",
    "https://www.instagram.com/p/CW_COGBMVcG/embed",
    "https://www.instagram.com/p/CW8xB2CLqFy/embed",
    "https://www.instagram.com/p/CW56_1As7gD/embed",
    "https://www.instagram.com/p/CW3fAo4LTmf/embed",
    "https://www.instagram.com/p/CWvNtIPLvKZ/embed"
  ];
  const [startIndex, setStartIndex] = React.useState(0);
  const [nPosts, setNPosts] = React.useState(3);

  const handleLeftClick = () => {
    setStartIndex(startIndex => Math.max(0, startIndex - 1));
  }

  const handleRightClick = () => {
    setStartIndex(startIndex => Math.min(iframes.length - nPosts, startIndex + 1));
  }

  useEffect(() => {
    setNPosts(window.screen.width >= 1000 ? 3 : window.screen.width > 700 ? 2 : 1);
  }, [window.screen.width]);

  return (
    <>
    <div id="iframe-container" style={{display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-evenly'}}>
        <div onClick={handleLeftClick} style={{width: '100%', display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', fontSize: '3vw', cursor: 'pointer'}}>
            {
                startIndex !== 0 && (<i className="bi bi-caret-left-fill"></i>)
            }
        </div>
      {iframes.slice(startIndex, startIndex + nPosts).map(src => (
        <iframe key={src} src={src} title={src} height={350} scrolling="no" style={{marginLeft: '10px'}}></iframe>
      ))}
      <div onClick={handleRightClick} style={{width: '100%', display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', fontSize: '3vw', cursor: 'pointer'}}>
        {
            (startIndex+nPosts) !== 8 && (<i className="bi bi-caret-right-fill"></i>)
        }
      </div>
    </div>
    <div style={{width: '100%', display: 'flex', alignContent: 'center', justifyContent: 'center', fontSize: '3vw'}}>
    {
        iframes.map((link, index) => {
            let idBullet = (index >= startIndex && index <= startIndex+nPosts-1) ? "selectedBullet" : "";
            return(
                <i className="bi bi-dot" id={idBullet} key={index}></i>
            )
        })
    }
    </div>
    </>
    
  );
}

export default IframeCarousel;