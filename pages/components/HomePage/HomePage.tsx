import React, { useState, useEffect } from "react";
import cx from "classnames";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "./BurgerMenu";
import Sprite from "./Sprite";
import { menuItems } from "../../lib/menu-items";
import style from "./HomePage.module.scss";

const HomePage = ({ isAppeared, isStartPlayingSprite }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 599px)" });
  const [isVisible, setIsVisible] = useState(false);
  const [isSpriteSmaler, setIsSpriteSmaler] = useState(false);
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [currentMenuItemId, setCurrentMenuItemId] = useState("");
  setTimeout(() => {
    setIsVisible(true);
  }, 500); // init after video started playing
  if (!isVisible) return null;

  if (isMobile) {
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
        className={cx(style["wide-image"], { [style["opened"]]: isMenuClicked })}
        style={{
          backgroundImage: `url(${
            menuItems.find((mi) => mi.id === currentMenuItemId)?.photo
          })`,
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
            {currentMenuItemId && (
              <>
                <div className={style["sub-text-for"]}>FOR</div>
                <div>
                  {menuItems.find((mi) => mi.id === currentMenuItemId).subtext}
                </div>
              </>
            )}
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
            {menuItems.map((item, i) => {
              return (
                <div
                  key={i}
                  className={style["circle-menu-item"]}
                  onMouseEnter={() => {
                    setIsSpriteSmaler(true);
                    setCurrentMenuItemId(item.id);
                  }}
                  onMouseLeave={() => {
                    setIsSpriteSmaler(false);
                  }}
                  onClick={() => {
                    setIsMenuClicked(true);
                    // maybe extract to handler
                    // add change page after transition
                  }}
                >
                  <img src={item.icon} />
                </div>
              );
            })}
          </div>
          <div className={style["stick"]}>
            <Sprite
              isSmaler={isSpriteSmaler}
              isStartPlayingSprite={isStartPlayingSprite}
            />
            <div
              className={cx(style["inner-image"], {
                [style["active"]]: isSpriteSmaler,
              })}
              style={{
                backgroundImage: `url(${
                  menuItems.find((mi) => mi.id === currentMenuItemId)?.photo
                })`,
              }}
            ></div>
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
          {menuItems.map((item, i) => {
            return (
              <div key={i} className={style["mobile-menu-item"]}>
                <div className={style["mobile-menu-item-img"]}>
                  <img src={item.icon} />
                </div>
                <div className={style["mobile-menu-item-text"]}>
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>

        <div className={style["social"]}>
          {" "}
          {/* TODO: use links here */}
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
