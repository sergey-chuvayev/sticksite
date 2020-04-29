import React, { useState } from "react";
import cx from "classnames";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "./BurgerMenu";
import Sprite from "./Sprite";
import style from "./HomePage.module.scss";

const HomePage = ({ isAppeared, isStartPlayingSprite }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 599px)" });
  const [isVisible, setIsVisible] = useState(false);
  const [isSpriteSmaler, setIsSpriteSmaler] = useState(false);
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  setTimeout(() => {
    setIsVisible(true);
  }, 500); // init after video started playing
  if (!isVisible) return null;

  if (isMobile) {
    // // if mobile
    // window.addEventListener("resize", () => {
    //   // We execute the same script as before
    //   let vh = window.innerHeight * 0.01;
    //   document.documentElement.style.setProperty("--vh", `${vh}px`);
    // });
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  return (
    <>
      <BurgerMenu
        opened={isBurgerOpened}
        close={() => {
          setIsBurgerOpened(false);
        }}
      />
      <div
        className={cx(style["HomePage"], {
          [style["is-appeared"]]: isAppeared,
        })}
      >
        <div className={style["mobile-header"]}>
          <div
            className={style["mobile-header-burger"]}
            onClick={() => {
              setIsBurgerOpened(true);
            }}
          >
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
            <img className={style["logo__img"]} src="/logo.svg" alt="" />
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
              <span className={style["underlined"]}>HOW IT WORKS</span>
              <br />
              <span className={style["underlined"]}>
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
            {[
              "Home",
              "Auto",
              "How it Works",
              "Home",
              "Auto",
              "How it Works",
              "Last one",
              "Last one",
            ].map((item, i) => {
              return (
                <div
                  key={i}
                  className={style["circle-menu-item"]}
                  onMouseEnter={() => {
                    setIsSpriteSmaler(true);
                  }}
                  onMouseLeave={() => {
                    setIsSpriteSmaler(false);
                  }}
                >
                  <img src="/menu/plane.svg" />
                </div>
              );
            })}
          </div>
          <div className={style["stick"]}>
            <Sprite
              isSmaler={isSpriteSmaler}
              isStartPlayingSprite={isStartPlayingSprite}
            />
            <div className={cx(style['inner-image'], { [style['active']]: isSpriteSmaler })}>
              <img src="https://www.infovac.fr/images/actu/Covid2020.jpg" alt=""/>
            </div>
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
            );
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
    </>
  );
};

export default HomePage;
