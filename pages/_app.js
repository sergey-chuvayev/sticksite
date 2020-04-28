import { useState, useEffect } from 'react';
import Head from 'next/head'
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
    
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export default function MyApp({ Component, pageProps }) {
  const size = useWindowSize();
  const [initialScale, setInitialScale] = useState('1.0');

  // useEffect(() => {
  //   console.log('size changed')
  //   if (size.height <= 768) {
  //     setInitialScale('0.8');
  //   }
  //   if (size.height <= 380) {
  //     setInitialScale('0.4');
  //   }  
  // }, [size.height, size.width])
  
  return (
    <>
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}
