import React, { useState, useEffect } from "react";
import cx from "classnames";

const SubMenuItem = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <div className="BurgerMenu__menu-sub-item__text" onClick={() => { setIsOpened(!isOpened) }}>
        <div className="BurgerMenu__menu-sub-item__num">01</div>
        <span>Auto</span>
        <div className={cx("BurgerMenu__menu-sub-item__arrow", { "opened": isOpened })} />
      </div>
      {isOpened && (
        <div className="BurgerMenu__menu-sub-item__submenu">
          <div>Gym</div>
          <div>Ourdoor</div>
          <div>Yoga</div>
          <div>Bike</div>
          <div>Sailing</div>
        </div>
      )}
    </>
  );
};

const MenuItem = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <div
        className="BurgerMenu__menu-item"
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        How to use
      </div>
      {isOpened && (
        <div className="BurgerMenu__menu-sub">
          <div className="BurgerMenu__menu-sub-item">
            <SubMenuItem />
          </div>
          <div className="BurgerMenu__menu-sub-item">
            <div className="BurgerMenu__menu-sub-item__text">
              <div className="BurgerMenu__menu-sub-item__num">02</div>
              <span>Home & Office</span>
              <div className="BurgerMenu__menu-sub-item__arrow" />
            </div>
          </div>
          <div className="BurgerMenu__menu-sub-item">
            <div className="BurgerMenu__menu-sub-item__text">
              <div className="BurgerMenu__menu-sub-item__num">03</div>
              <span>Sport</span>
              <div className="BurgerMenu__menu-sub-item__arrow" />
            </div>
          </div>
          <div className="BurgerMenu__menu-sub-item">
            <div className="BurgerMenu__menu-sub-item__text">
              <div className="BurgerMenu__menu-sub-item__num">04</div>
              <span>Travel</span>
              <div className="BurgerMenu__menu-sub-item__arrow" />
            </div>
          </div>
          <div className="BurgerMenu__menu-sub-item">
            <div className="BurgerMenu__menu-sub-item__text">
              <div className="BurgerMenu__menu-sub-item__num">05</div>
              <span>Music</span>
              <div className="BurgerMenu__menu-sub-item__arrow" />
            </div>
          </div>
          <div className="BurgerMenu__menu-sub-item">
            <div className="BurgerMenu__menu-sub-item__text">
              <div className="BurgerMenu__menu-sub-item__num">06</div>
              <span>Blogging</span>
              <div className="BurgerMenu__menu-sub-item__arrow" />
            </div>
          </div>
          <div className="BurgerMenu__menu-sub-item">
            <div className="BurgerMenu__menu-sub-item__text">
              <div className="BurgerMenu__menu-sub-item__num">07</div>
              <span>Horeca</span>
              <div className="BurgerMenu__menu-sub-item__arrow" />
            </div>
          </div>
          <div className="BurgerMenu__menu-sub-item">
            <div className="BurgerMenu__menu-sub-item__text">
              <div className="BurgerMenu__menu-sub-item__num">08</div>
              <span>No phone</span>
              <div className="BurgerMenu__menu-sub-item__arrow" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const BurgerMenu = ({ opened, close }) => {
  return (
    <div className={cx("BurgerMenu", { BurgerMenu__opened: opened })}>
      <div className="BurgerMenu__header">
        <div className="BurgerMenu__bag">
          <span>99</span>
        </div>
        <div className="BurgerMenu__logo" />
        <div
          className="BurgerMenu__cross"
          onClick={() => {
            close();
          }}
        />
      </div>

      <div className="BurgerMenu__menu">
        <MenuItem />
        <div className="BurgerMenu__menu-item">Products</div>
        <div className="BurgerMenu__menu-item">Shop</div>
        <div className="BurgerMenu__menu-item">About us</div>
      </div>

      <div className="BurgerMenu__bottom">
        <div className="BurgerMenu__rights">
          <div className="BurgerMenu__rights__divider" />
          <div className="BurgerMenu__rights__text">
            2020 The Stick Company All rights reserved
          </div>
        </div>
        <div className="BurgerMenu__socials">
          <a className="BurgerMenu__socials-item">
            <img src="/mobile/youtube.svg" alt="" />
          </a>
          <a className="BurgerMenu__socials-item">
            <img src="/mobile/instagram.svg" alt="" />
          </a>
          <a className="BurgerMenu__socials-item">
            <img src="/mobile/facebook.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
