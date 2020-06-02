import React, { useRef, useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import cx from "classnames";

const texts = [
  'One Lorem ipsum dolor sit amet, consectetur adipiscin Lorem ipsum dolor sit amet, consectetu Lorem ipsum dolor sit amet, consectetur adipisci Lorem',
  'Two Lorem ipsum dolor sit amet, consectetur adipiscin Lorem ipsum dolor sit amet, consectetu Lorem ipsum dolor sit amet, consectetur adipisci Lorem',
  'Three Lorem ipsum dolor sit amet, consectetur adipiscin Lorem ipsum dolor sit amet, consectetu Lorem ipsum dolor sit amet, consectetur adipisci Lorem',
  'Four Lorem ipsum dolor sit amet, consectetur adipiscin Lorem ipsum dolor sit amet, consectetu Lorem ipsum dolor sit amet, consectetur adipisci Lorem',
]

const ArticleType6Slider = () => {
  const carousel = useRef(null);
  const [slidesCount, setSlidesCount] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    setSlidesCount(carousel.current.slider.children.length);
  }, []);
  return (
    <div className="ArticleType6Slider">
      <Carousel
        onChange={(e) => {
          setCurrentSlide(e.index);
        }}
        showArrows={false}
        pagination={false}
        className="ArticleType6Slider__carousel"
        ref={carousel}
      >
        <div
          className="ArticleType6Slider__slider-item"
          style={{ backgroundImage: "url(/assets/big1.jpg)" }}
        />
        <div
          className="ArticleType6Slider__slider-item"
          style={{ backgroundImage: "url(/assets/big2.jpg)" }}
        />
        <div
          className="ArticleType6Slider__slider-item"
          style={{ backgroundImage: "url(/assets/big3.jpg)" }}
        />
        <div
          className="ArticleType6Slider__slider-item"
          style={{ backgroundImage: "url(/assets/big4.png)" }}
        />
      </Carousel>
      <div className="ArticleType6Slider__bottom-block">
        <div className="ArticleType6Slider__pagination">
          {currentSlide + 1} / {slidesCount}
        </div>
        <div className="ArticleType6Slider__desc">
          {texts[currentSlide]}
        </div>
        <div className="ArticleType6Slider__circle-arrows-nav">
          <div
            className="ArticleType6Slider__circle-arrows-nav-back"
            onClick={() => {
              carousel.current.slidePrev();
            }}
          />
          <div
            className="ArticleType6Slider__circle-arrows-nav-forth"
            onClick={() => {
              carousel.current.slideNext();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleType6Slider;
