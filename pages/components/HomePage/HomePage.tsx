import React, { useState, useEffect } from "react";
import cx from "classnames";
import { useMediaQuery } from 'react-responsive'
import Sprite from "./Sprite";
import style from "./HomePage.module.scss";

const Icon = () => (
  <svg viewBox="-2 -2 24 24">
    <path
      fill="#fff"
      d="M10,6.536c-2.263,0-4.099,1.836-4.099,4.098S7.737,14.732,10,14.732s4.099-1.836,4.099-4.098S12.263,6.536,10,6.536M10,13.871c-1.784,0-3.235-1.453-3.235-3.237S8.216,7.399,10,7.399c1.784,0,3.235,1.452,3.235,3.235S11.784,13.871,10,13.871M17.118,5.672l-3.237,0.014L12.52,3.697c-0.082-0.105-0.209-0.168-0.343-0.168H7.824c-0.134,0-0.261,0.062-0.343,0.168L6.12,5.686H2.882c-0.951,0-1.726,0.748-1.726,1.699v7.362c0,0.951,0.774,1.725,1.726,1.725h14.236c0.951,0,1.726-0.773,1.726-1.725V7.195C18.844,6.244,18.069,5.672,17.118,5.672 M17.98,14.746c0,0.477-0.386,0.861-0.862,0.861H2.882c-0.477,0-0.863-0.385-0.863-0.861V7.384c0-0.477,0.386-0.85,0.863-0.85l3.451,0.014c0.134,0,0.261-0.062,0.343-0.168l1.361-1.989h3.926l1.361,1.989c0.082,0.105,0.209,0.168,0.343,0.168l3.451-0.014c0.477,0,0.862,0.184,0.862,0.661V14.746z"
    ></path>
  </svg>
);

const HomePage = ({ isAppeared, isStartPlayingSprite }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 599px)' });
  const [isVisible, setIsVisible] = useState(false);
  setTimeout(() => {
    setIsVisible(true);
  }, 500); // init after video started playing
  if (!isVisible) return null;
   
  if (isMobile) { // if mobile
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  return (
    <div
      className={cx(style["HomePage"], { [style["is-appeared"]]: isAppeared })}
    >
      <div className={style["mobile-header"]}>
        <div className={style["mobile-header-burger"]}>
          <img src="/mobile/burger.svg" alt="" />
        </div>
        <div className={style["mobile-header-logo"]}>
          <img src="/mobile/logo.svg" alt="" />
        </div>
        <div className={style["mobile-header-bag"]}>
          <img src="/mobile/bag.svg" alt="" />
        </div>
      </div>
      <div className={style["left"]}>
        <div className={style["logo"]}>
          <img className={style["logo__img"]} src="/logomain.webp" alt="" />
        </div>
        <div className={style["welcome-text"]}>
          IM<span>STICK</span>
          <br />
          YOUR PHONE’S
          <br />
          BEST BUDDY
        </div>
        <div className={style["sub-text"]}>
          <div className={style["sub-text-for"]}>FOR</div>
          <div>
            <span>HOME & </span>
            <br />
            <span>OFFICE</span>
          </div>
        </div>
        <div className={style["how"]}>
          <img src="/how.svg" className={style["how-icon"]} alt="" />
          <div className={style["how-text"]}>
            <span className={style["how-text-red"]}>WATCH</span>
            <br />
            <span>HOW IT WORKS</span>
            <br />
            <span>
              Basic Tips <img src="/arrow-right.svg" />
            </span>
            <br />
          </div>
        </div>
      </div>

      <div className={style["middle"]}>
        <div className={style["menu"]}>
          <div className={style["menu-item"]}>Home</div>
          <div className={style["menu-item"]}>Products</div>
          <div className={style["menu-item"]}>Shop</div>
          <div className={style["menu-item"]}>Company</div>
        </div>
        <div className={style["circle-menu"]}>
          <div className={style["circle-menu-item"]}>
            <img src="/menu/plane.svg" />
          </div>
          <div className={style["circle-menu-item"]}>
            <img src="/menu/plane.svg" />
          </div>
          <div className={style["circle-menu-item"]}>
            <img src="/menu/plane.svg" />
          </div>
          <div className={style["circle-menu-item"]}>
            <img src="/menu/plane.svg" />
          </div>
          <div className={style["circle-menu-item"]}>
            <img src="/menu/plane.svg" />
          </div>
          <div className={style["circle-menu-item"]}>
            <img src="/menu/plane.svg" />
          </div>
          <div className={style["circle-menu-item"]}>
            <img src="/menu/plane.svg" />
          </div>
          <div className={style["circle-menu-item"]}>
            <img src="/menu/plane.svg" />
          </div>
        </div>
        <div className={style["stick"]}>
          <Sprite isStartPlayingSprite={isStartPlayingSprite} />
        </div>
      </div>

      <div className={style["right"]}>
        <div className={style["cart"]}>Cart (0)</div>

        <div className={style["shop-now"]}>
          <div>
            Shop
            <br />
            Now <img src="/arrow-right.svg" />
          </div>
        </div>
      </div>

      <div className={style["mobile-menu"]}>
        {[
          "Home",
          "Auto",
          "How it Works",
          "Home",
          "Auto",
          "How it Works",
          "Last one",
        ].map((item, i) => {
          return (
            <div key={i} className={style["mobile-menu-item"]}>
              <div className={style["mobile-menu-item-img"]}>
                <img src="/menu/plane.svg" />
              </div>
              <div className={style["mobile-menu-item-text"]}>{item}</div>
            </div>
          )
        })}
      </div>

      <div className={style["social"]}>
        <div className={style["social-item"]}>instagram</div>
        <div className={style["social-item"]}>youtube</div>
        <div className={style["social-item"]}>facebook</div>
      </div>

      <div className={style["orbits"]}>
        <div className={style["big"]} />
        <div className={style["medium"]} />
      </div>
    </div>
  );
};

export default HomePage;
