import React, { useState, useEffect } from 'react';
import Head from 'next/head';
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

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.getElementById('container').style = 'height: ' + window.innerHeight + 'px';

    function handleResize() {
      document.getElementById('container').style = 'height: ' + window.innerHeight + 'px';
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);
  return (
    <Component {...pageProps} />
  )
}
