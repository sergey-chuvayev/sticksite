import React, { useState, useRef, useEffect } from "react";
import cx from "classnames";
import Carousel from "react-elastic-carousel";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Menu from '../Menu/Menu';
import Sprite from "./Sprite";

const menuItems = [
  {
    id: "auto",
    icon: "/menu/auto.svg",
    photo: "/menu/auto.png",
    subtext: <span>Auto</span>,
  },
  {
    id: "home",
    icon: "/menu/home.svg",
    photo: "/menu/home.png",
    subtext: (
      <>
        <span>HOME & </span>
        <br />
        <span>OFFICE</span>
      </>
    ),
  },
  {
    id: "sport",
    icon: "/menu/sport.svg",
    photo: "/menu/sport.png",
    subtext: <span>Sport</span>,
  },
  {
    id: "travel",
    icon: "/menu/travel.svg",
    photo: "/menu/travel.png",
    subtext: <span>Travel</span>,
  },
  {
    id: "music",
    icon: "/menu/music.svg",
    photo: "/menu/music.png",
    subtext: <span>Music</span>,
  },
  {
    id: "blogging",
    icon: "/menu/blogging.svg",
    photo: "/menu/blogging.png",
    subtext: <span>Blogging</span>,
  },
  {
    id: "horeca",
    icon: "/menu/horeca.svg",
    photo: "/menu/horeca.png",
    subtext: <span>horeca</span>,
  },
  {
    id: "phone",
    icon: "/menu/phone.svg",
    photo: "/menu/phone.png",
    subtext: <span>No phone</span>,
  },
];

const HomePage = ({ isAppeared, isStartPlayingSprite }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 599px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const carousel = useRef(null);
  const mobileMenu = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isSpriteSmaler, setIsSpriteSmaler] = useState(false);
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [currentMenuItemId, setCurrentMenuItemId] = useState("");
  const [currentMenuPicIndex, setCurrentMenuPicIndex] = useState(0);

  useEffect(() => {
    // when to scroll to view menu
    if (mobileMenu.current && currentMenuPicIndex <= 4) {
      mobileMenu.current.scrollTo(0, 0);
    }
    if (currentMenuPicIndex > 4) {
      mobileMenu.current.scrollTo(mobileMenu.current.offsetWidth, 0);
    }
  }, [currentMenuPicIndex]);

  setTimeout(() => {
    setIsVisible(true);
  }, 500); // init after video started playing
  if (!isVisible) return null;

  return (
    <>
      <BurgerMenu
        opened={isBurgerOpened}
        close={() => {
          setIsBurgerOpened(false);
        }}
      />
      {!isMobile && (
        <div
          className={cx("HomePage__wide-image", {
            "opened": isMenuClicked,
          })}
          style={{
            backgroundImage: `url(${
              menuItems.find((mi) => mi.id === currentMenuItemId)?.photo
            })`,
          }}
        />
      )}
      <div
        className={cx("HomePage", {
          "is-appeared": isAppeared,
        })}
      >
        <div className="HomePage__mobile-header">
          <div
            className="HomePage__mobile-header-burger"
            onClick={() => {
              setIsBurgerOpened(true);
            }}
          >
            <img src="/mobile/burger.svg" alt="" />
          </div>
          <div className="HomePage__mobile-header-logo">
            <img src="/mobile/logo.svg" alt="" />
          </div>
          <div className="HomePage__mobile-header-bag">
            <img src="/mobile/bag.svg" alt="" />
          </div>
        </div>
        <div className="HomePage__left">
          <div className="HomePage__logo">
            <img className="HomePage__logo__img" src="/logo.svg" alt="" />
          </div>
          <div className="HomePage__welcome-text">
            IM<span>STICK</span>
            <br />
            YOUR PHONE’S
            <br />
            BEST BUDDY
          </div>
          <div className="HomePage__sub-text">
            {currentMenuItemId && (
              <>
                <div className="HomePage__sub-text-for">FOR</div>
                {menuItems.map((mi) => (
                  <div
                    className={cx("HomePage__sub-text-for-text", {
                      "HomePage__active": mi.id === currentMenuItemId,
                    })}
                  >
                    <div>{mi.subtext}</div>
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="HomePage__how">
            <img src="/how.svg" className="HomePage__how-icon" alt="" />
            <div className="HomePage__how-text">
              <span className="HomePage__how-text-red">WATCH</span>
              <br />
              <span className="HomePage__underlined">HOW IT WORKS</span>
              <br />
              <span className="HomePage__underlined">
                Basic Tips <img src="/arrow-right.svg" />
              </span>
              <br />
            </div>
          </div>
          <div className="HomePage__social">
            {/* TODO: use links here */}
            <div className="HomePage__social-item">instagram</div>
            <div className="HomePage__social-item">youtube</div>
            <div className="HomePage__social-item">facebook</div>
          </div>
        </div>

        <div className="HomePage__middle">
          <div className='HomePage__menu'>
            <Menu themeColor="white" />
          </div>
          <div className="HomePage__circle-menu">
            {menuItems.map((item, i) => {
              return (
                <a
                  key={i}
                  className="HomePage__circle-menu-item"
                  onMouseEnter={() => {
                    setIsSpriteSmaler(true);
                    setCurrentMenuItemId(item.id);
                  }}
                  onMouseLeave={() => {
                    setIsSpriteSmaler(false);
                  }}
                  onClick={() => {
                    // just goto an internal link
                    // setIsMenuClicked(true);
                    // maybe extract to handler
                    // add change page after transition
                  }}
                >
                  <img src={item.icon} />
                </a>
              );
            })}
          </div>
          {!isMobile && (
            <div className="HomePage__stick">
              <Sprite
                isSmaler={isSpriteSmaler}
                isStartPlayingSprite={isStartPlayingSprite}
              />
              {menuItems.map((mi) => {
                return (
                  <div
                    className={cx("HomePage__inner-image", {
                      "active":
                        isSpriteSmaler && currentMenuItemId === mi.id,
                    })}
                    id={mi.id}
                    style={{
                      backgroundImage: `url(${mi.photo})`,
                    }}
                  ></div>
                );
              })}
            </div>
          )}
        </div>

        {isMobile && (
          <div className="HomePage__mobile-slider">
            {currentMenuPicIndex !== 0 && (
              <>
                <div
                  className="HomePage__mobile-slider-cross"
                  onClick={() => {
                    carousel.current.goTo(0);
                    setCurrentMenuPicIndex(0);
                  }}
                ></div>
                <div className='HomePage__mobile-slider-name'>
                  FOR <span>{menuItems[currentMenuPicIndex-1].subtext}</span> <img src="/arrow-right.svg" />
                </div>
              </>
            )}
            <Carousel
              itemsToShow={1}
              showArrows={false}
              pagination={false}
              ref={carousel}
              onNextEnd={(e) => {
                setCurrentMenuPicIndex(e.index);
              }}
              onPrevEnd={(e) => {
                setCurrentMenuPicIndex(e.index);
              }}
            >
              <div className="HomePage__mobile-slider-item">
                <Sprite isStartPlayingSprite={true} isSmaler={false} />
              </div>
              <div className="HomePage__mobile-slider-item">
                <div
                  className="HomePage__mobile-slider-item-pic"
                  style={{
                    backgroundImage: `url(/menu/auto.png)`,
                  }}
                />
              </div>
              <div className="HomePage__mobile-slider-item">
                <div
                  className="HomePage__mobile-slider-item-pic"
                  style={{
                    backgroundImage: `url(/menu/home.png)`,
                  }}
                />
              </div>
              <div className="HomePage__mobile-slider-item">
                <div
                  className="HomePage__mobile-slider-item-pic"
                  style={{
                    backgroundImage: `url(/menu/sport.png)`,
                  }}
                />
              </div>
              <div className="HomePage__mobile-slider-item">
                <div
                  className="HomePage__mobile-slider-item-pic"
                  style={{
                    backgroundImage: `url(/menu/travel.png)`,
                  }}
                />
              </div>
              <div className="HomePage__mobile-slider-item">
                <div
                  className="HomePage__mobile-slider-item-pic"
                  style={{
                    backgroundImage: `url(/menu/music.png)`,
                  }}
                />
              </div>
              <div className="HomePage__mobile-slider-item">
                <div
                  className="HomePage__mobile-slider-item-pic"
                  style={{
                    backgroundImage: `url(/menu/blogging.png)`,
                  }}
                />
              </div>
              <div className="HomePage__mobile-slider-item">
                <div
                  className="HomePage__mobile-slider-item-pic"
                  style={{
                    backgroundImage: `url(/menu/horeca.png)`,
                  }}
                />
              </div>
              <div className="HomePage__mobile-slider-item">
                <div
                  className="HomePage__mobile-slider-item-pic"
                  style={{
                    backgroundImage: `url(/menu/phone.png)`,
                  }}
                />
              </div>
            </Carousel>
          </div>
        )}

        <div className="HomePage__right">
          <div className="HomePage__cart">99</div>

          <div className="HomePage__shop-now">
            <div>
              Shop
              <br />
              Now <img src="/arrow-right.svg" />
            </div>
          </div>
        </div>

        <div className="HomePage__mobile-menu" ref={mobileMenu}>
          {menuItems.map((item, i) => {
            return (
              <div
                key={i}
                className={cx("HomePage__mobile-menu-item", {
                  "active": currentMenuPicIndex === i + 1, // +1 because of the stick
                })}
                onClick={() => {
                  setCurrentMenuPicIndex(i + 1);
                  carousel.current.goTo(i + 1);
                }}
              >
                <div className="HomePage__mobile-menu-item-img">
                  <img src={item.icon} />
                </div>
                <div className="HomePage__mobile-menu-item-text">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>

        <div className="HomePage__orbits">
          <div className="HomePage__big" />
          <div className="HomePage__medium" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
