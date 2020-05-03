import React, { useState, useEffect } from 'react';
import '../styles/styles.css';

const preloadedPhotos = [
  '/menu/auto.png',
  '/menu/home.png',
  '/menu/sport.png',
  '/menu/travel.png',
  '/menu/music.png',
  '/menu/blogging.png',
  '/menu/horeca.png',
  '/menu/phone.png',
  '/sprite.png',
]

function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    preloadedPhotos.forEach((item) => { // preload all images
      // const img = new Image();
      const img = document.createElement('img');
      img.src = item;
      img.style = 'display: none';
    });
    
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  return windowSize;
}

export default function MyApp({ Component, pageProps }) {
  const size = useWindowSize();
  const [initialScale, setInitialScale] = useState('1.0');
  
  return (
    <Component {...pageProps} />
  )
}
