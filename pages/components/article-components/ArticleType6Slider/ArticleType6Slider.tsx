import React, { useRef, useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import cx from "classnames";

import style from "./ArticleType6Slider.module.scss";

const ArticleType6Slider = () => {
  const carousel = useRef(null);
  const [slidesCount, setSlidesCount] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    setSlidesCount(carousel.current.slider.children.length);
  }, []);
  return (
    <div className={style["ArticleType6Slider"]}> 
      <Carousel
        onChange={(e) => { setCurrentSlide(e.index) }}
        showArrows={false}
        pagination={false}
        className={style['carousel']}
        ref={carousel}
      >
        <div className={style['slider-item']} style={{ backgroundImage: 'url(/assets/big1.jpg)' }} />
        <div className={style['slider-item']} style={{ backgroundImage: 'url(/assets/big2.jpg)' }} />
        <div className={style['slider-item']} style={{ backgroundImage: 'url(/assets/big3.jpg)' }} />
        <div className={style['slider-item']} style={{ backgroundImage: 'url(/assets/big4.png)' }} />
      </Carousel>
      <div className={style['bottom-block']}>
        <div className={style['pagination']}>{currentSlide + 1} / {slidesCount}</div>
        <div className={style['desc']}>
          Lorem ipsum dolor sit amet, consectetur adipiscin Lorem ipsum dolor sit amet, consectetu Lorem ipsum dolor sit amet, consectetur adipiscin Lorem
        </div>
        <div className={style["circle-arrows-nav"]}>
          <div className={style["circle-arrows-nav-back"]} onClick={() => { carousel.current.slidePrev() }} />
          <div className={style["circle-arrows-nav-forth"]} onClick={() => { carousel.current.slideNext() }} />
        </div>
      </div>
    </div>
  );
};

export default ArticleType6Slider;
