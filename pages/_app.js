import { useState, useEffect } from 'react';
import { menuItems } from './components/HomePage/menu-items';
import '../styles/styles.css'

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

    const img = new Image(); // preload sprite
    img.src = '/sprite.png';
    menuItems.forEach((item) => { // preload all images
      const img = new Image();
      img.src = item.photo;
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
