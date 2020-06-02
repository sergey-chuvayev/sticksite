import React, { useState, useEffect, useRef } from "react";
import cx from "classnames";
import Carousel from "react-elastic-carousel";

import Header from "../Header/Header";
import VerticalMenu from "../VerticalMenu/VerticalMenu";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import ArticleType1 from "../article-components/ArticleType1/ArticleType1";
import ArticleType2 from "../article-components/ArticleType2/ArticleType2";
import ArticleType3 from "../article-components/ArticleType3/ArticleType3";
import ArticleType4 from "../article-components/ArticleType4/ArticleType4";
import ArticleType5 from "../article-components/ArticleType5/ArticleType5";
import ArticleType6Slider from "../article-components/ArticleType6Slider/ArticleType6Slider";
import ArticleType7 from "../article-components/ArticleType7/ArticleType7";
import ArticleType8 from "../article-components/ArticleType8/ArticleType8";
import ArticleType9 from "../article-components/ArticleType9/ArticleType9";
import ArticleType10 from "../article-components/ArticleType10/ArticleType10";
import ArticleType11 from "../article-components/ArticleType11/ArticleType11";

const CategoryPage = () => {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [backgroundSize, setBackgroundSize] = useState(100);
  const [themeColor, setThemeColor] = useState<"white" | "black">("white");
  const page = useRef(null);
  const carousel = useRef(null);
  useEffect(() => {
    if (scrollPosition < page.current.offsetHeight) {
      setBackgroundSize(100 + scrollPosition / 40);
    }
    if (scrollPosition >= (page.current.offsetHeight / 2)) {
      // make menu black after half scrolled page
      setThemeColor("black");
    } else {
      setThemeColor("white");
    }
  }, [scrollPosition]);

  return (
    <div
      ref={page}
      className="CategoryPage"
      onScroll={(e) => {
        setScrollPosition(e.currentTarget.scrollTop);
      }}
    >
      <BurgerMenu
        opened={isBurgerOpened}
        close={() => {
          setIsBurgerOpened(false);
        }}
      />
      <Carousel
        showArrows={false}
        pagination={false}
        className="CategoryPage__carousel"
        ref={carousel}
        style={{ transform: `scale(${backgroundSize / 100})` }}
      >
        <div
          className="CategoryPage__bgimage"
          style={{ backgroundImage: "url(/assets/big1.jpg)" }}
        ></div>
        <div
          className="CategoryPage__bgimage"
          style={{ backgroundImage: "url(/assets/big2.jpg)" }}
        ></div>
        <div
          className="CategoryPage__bgimage"
          style={{ backgroundImage: "url(/assets/big3.jpg)" }}
        ></div>
        <div
          className="CategoryPage__bgimage"
          style={{ backgroundImage: "url(/assets/big4.png)" }}
        ></div>
      </Carousel>
      <div className="CategoryPage__vertical-menu">
        <VerticalMenu color={themeColor} />
      </div>
      <Header themeColor={themeColor} onOpenMenu={() => { setIsBurgerOpened(true) }} />
      <div className="CategoryPage__main-frame">
        <div className="CategoryPage__middle">
          <div className="CategoryPage__content">
            <div className="CategoryPage__small-title">IMSPORT</div>
            <div className="CategoryPage__big-title">
              HOW TO USE
              <br />
              IMSTICK FOR
              <br />
              Sport activities
            </div>
            <div className="CategoryPage__circle-arrows-nav">
              <div
                className="CategoryPage__circle-arrows-nav-back"
                onClick={() => {
                  carousel.current.slidePrev();
                }}
              ></div>
              <div
                className="CategoryPage__circle-arrows-nav-forth"
                onClick={() => {
                  carousel.current.slideNext();
                }}
              ></div>
            </div>
            <div className="CategoryPage__description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium now er doloremque noe laudantium, totam rem aperiam,
              eaque ipsa quae ab illo
            </div>
          </div>
        </div>
        <div className="CategoryPage__category-arrow-down" />
      </div>
      <div className="CategoryPage__main-content">
        <div className="CategoryPage__main-content-section">
          <ArticleType1 />
        </div>
        <div className="CategoryPage__main-content-section">
          <ArticleType2 />
        </div>
        <div className="CategoryPage__main-content-section">
          <ArticleType3 />
        </div>
        <div className="CategoryPage__main-content-section">
          <ArticleType4 />
        </div>
        <div className="CategoryPage__main-content-section">
          <ArticleType5 />
        </div>
        <div className="CategoryPage__main-content-section CategoryPage__main-content-section--no-rigth-padding">
          <ArticleType6Slider />
        </div>
        <div className="CategoryPage__main-content-section">
          <ArticleType7 />
        </div>
        <div className="CategoryPage__main-content-section">
          <ArticleType8 />
        </div>
        <div className="CategoryPage__main-content-section">
          <ArticleType9 />
        </div>
        <div className="CategoryPage__main-content-section">
          <ArticleType10 />
        </div>
        <div className="CategoryPage__main-content-section">
          <ArticleType11 />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
