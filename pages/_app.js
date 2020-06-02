import React, { useState, useEffect } from 'react';

import '../styles/styles.css';
import './components/Header/Header.scss';
import './components/Menu/Menu.scss';
import './components/Logo/Logo.scss';
import './components/Intro/Intro.scss';
import './components/CategoryPage/CategoryPage.scss';
import './components/BurgerMenu/BurgerMenu.scss';
import './components/HomePage/HomePage.scss';
import './components/SubcategoryPage/SubcategoryPage.scss';
import './components/VerticalMenu/VerticalMenu.scss';
import './components/article-components/ArticleType1/ArticleType1.scss';
import './components/article-components/ArticleType2/ArticleType2.scss';
import './components/article-components/ArticleType3/ArticleType3.scss';
import './components/article-components/ArticleType4/ArticleType4.scss';
import './components/article-components/ArticleType5/ArticleType5.scss';
import './components/article-components/ArticleType6Slider/ArticleType6Slider.scss';
import './components/article-components/ArticleType7/ArticleType7.scss';
import './components/article-components/ArticleType8/ArticleType8.scss';
import './components/article-components/ArticleType9/ArticleType9.scss';
import './components/article-components/ArticleType10/ArticleType10.scss';
import './components/article-components/ArticleType11/ArticleType11.scss';

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
