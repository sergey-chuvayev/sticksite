import React, { useState, useRef, useEffect } from "react";
import cx from "classnames";
import Carousel from "react-elastic-carousel";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "./BurgerMenu";
import Sprite from "./Sprite";
import style from "./HomePage.module.scss";

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
  const [isSubMenuOpened, setIsSubMenuOpened] = useState(false);
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

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <>
      <BurgerMenu
        opened={isBurgerOpened}
        close={() => {
          setIsBurgerOpened(false);
        }}
      />
      {!isMobile && !isSubMenuOpened && (
        <div
          className={cx(style["wide-image"], {
            [style["opened"]]: isMenuClicked,
          })}
          style={{
            backgroundImage: `url(${
              menuItems.find((mi) => mi.id === currentMenuItemId)?.photo
            })`,
          }}
        />
      )}
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
                {menuItems.map((mi) => (
                  <div
                    className={cx(style["sub-text-for-text"], {
                      [style["active"]]: mi.id === currentMenuItemId,
                    })}
                  >
                    <div>{mi.subtext}</div>
                  </div>
                ))}
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
          <div className={style["social"]}>
            {/* TODO: use links here */}
            <div className={style["social-item"]}>instagram</div>
            <div className={style["social-item"]}>youtube</div>
            <div className={style["social-item"]}>facebook</div>
          </div>
        </div>

        <div className={style["middle"]}>
          <div className={style["menu"]}>
            <div
              className={cx(style["menu-item"], style["with-arrow"])}
              onMouseEnter={() => {
                setIsSubMenuOpened(true);
              }}
              onMouseLeave={(e) => {
                setIsSubMenuOpened(false);
              }}
            >
              <span>How to use</span>{" "}
              <img className={style["arrow"]} src="/arrow-right.svg" />
              {isSubMenuOpened && (
                <div className={style["menu-sub-overlay"]}>
                  <div
                    className={cx(style["menu-sub"], {
                      [style["open-animation"]]: isSubMenuOpened,
                    })}
                  >
                    <div className={style["menu-sub-item"]}>
                      <span>Auto</span>
                    </div>
                    <div className={style["menu-sub-item"]}>
                      <span>Home & Office</span>
                    </div>
                    <div className={style["menu-sub-item"]}>
                      <span>Sport</span>
                    </div>
                    <div className={style["menu-sub-item"]}>
                      <span>Travel</span>
                    </div>
                    <div className={style["menu-sub-item"]}>
                      <span>Music</span>
                    </div>
                    <div className={style["menu-sub-item"]}>
                      <span>Blogging</span>
                    </div>
                    <div className={style["menu-sub-item"]}>
                      <span>Horeca</span>
                    </div>
                    <div className={style["menu-sub-item"]}>
                      <span>No phone</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
          {!isMobile && (
            <div className={style["stick"]}>
              <Sprite
                isSmaler={isSpriteSmaler}
                isStartPlayingSprite={isStartPlayingSprite}
              />
              {menuItems.map((mi) => {
                return (
                  <div
                    className={cx(style["inner-image"], {
                      [style["active"]]:
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
          <div className={style["mobile-slider"]}>
            {currentMenuPicIndex !== 0 && (
              <>
                <div
                  className={style["mobile-slider-cross"]}
                  onClick={() => {
                    carousel.current.goTo(0);
                    setCurrentMenuPicIndex(0);
                  }}
                ></div>
                <div className={style['mobile-slider-name']}>
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
              <div className={style["mobile-slider-item"]}>
                <Sprite isStartPlayingSprite={true} isSmaler={false} />
              </div>
              <div className={style["mobile-slider-item"]}>
                <div
                  className={style["mobile-slider-item-pic"]}
                  style={{
                    backgroundImage: `url(/menu/auto.png)`,
                  }}
                />
              </div>
              <div className={style["mobile-slider-item"]}>
                <div
                  className={style["mobile-slider-item-pic"]}
                  style={{
                    backgroundImage: `url(/menu/home.png)`,
                  }}
                />
              </div>
              <div className={style["mobile-slider-item"]}>
                <div
                  className={style["mobile-slider-item-pic"]}
                  style={{
                    backgroundImage: `url(/menu/sport.png)`,
                  }}
                />
              </div>
              <div className={style["mobile-slider-item"]}>
                <div
                  className={style["mobile-slider-item-pic"]}
                  style={{
                    backgroundImage: `url(/menu/travel.png)`,
                  }}
                />
              </div>
              <div className={style["mobile-slider-item"]}>
                <div
                  className={style["mobile-slider-item-pic"]}
                  style={{
                    backgroundImage: `url(/menu/music.png)`,
                  }}
                />
              </div>
              <div className={style["mobile-slider-item"]}>
                <div
                  className={style["mobile-slider-item-pic"]}
                  style={{
                    backgroundImage: `url(/menu/blogging.png)`,
                  }}
                />
              </div>
              <div className={style["mobile-slider-item"]}>
                <div
                  className={style["mobile-slider-item-pic"]}
                  style={{
                    backgroundImage: `url(/menu/horeca.png)`,
                  }}
                />
              </div>
              <div className={style["mobile-slider-item"]}>
                <div
                  className={style["mobile-slider-item-pic"]}
                  style={{
                    backgroundImage: `url(/menu/phone.png)`,
                  }}
                />
              </div>
            </Carousel>
          </div>
        )}

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

        <div className={style["mobile-menu"]} ref={mobileMenu}>
          {menuItems.map((item, i) => {
            return (
              <div
                key={i}
                className={cx(style["mobile-menu-item"], {
                  [style["active"]]: currentMenuPicIndex === i + 1, // +1 because of the stick
                })}
                onClick={() => {
                  setCurrentMenuPicIndex(i + 1);
                  carousel.current.goTo(i + 1);
                }}
              >
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

        <div className={style["orbits"]}>
          <div className={style["big"]} />
          <div className={style["medium"]} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
