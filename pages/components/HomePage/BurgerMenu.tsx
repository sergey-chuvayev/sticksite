import React, { useState, useEffect } from "react";
import cx from "classnames";

const BurgerMenu = ({ opened, close }) => {
  const [isSubOpened, setIsSubOpened] = useState(false);
  return (
    <div className={cx("BurgerMenu", { "BurgerMenu__opened": opened })}>
      <div className="BurgerMenu__cross" onClick={() => {
        setIsSubOpened(false);
        close();
      }}>
        <img src="/mobile/cross.svg" alt="" />
      </div>
      <div className="BurgerMenu__logo">
        <img src="/logo.svg" alt="" />
      </div>
      <div className="BurgerMenu__menu">
        <div
          className={cx("BurgerMenu__menu-item", "BurgerMenu__with-arrow", {
            "BurgerMenu__active": isSubOpened,
          })}
          onClick={() => {
            setIsSubOpened(!isSubOpened);
          }}
        >
          <span>How to use</span>{" "}
          <img className="BurgerMenu__arrow" src="/arrow-right.svg" />
        </div>
        {isSubOpened && (
          <div className="BurgerMenu__menu-sub">
            <div className="BurgerMenu__menu-sub-item">Auto</div>
            <div className="BurgerMenu__menu-sub-item">Home & Office</div>
            <div className="BurgerMenu__menu-sub-item">Sport</div>
            <div className="BurgerMenu__menu-sub-item">Travel</div>
            <div className="BurgerMenu__menu-sub-item">Music</div>
            <div className="BurgerMenu__menu-sub-item">Blogging</div>
            <div className="BurgerMenu__menu-sub-item">Horeca</div>
            <div className="BurgerMenu__menu-sub-item">No phone</div>
          </div>
        )}
        <div className="BurgerMenu__menu-item">Products</div>
        <div className="BurgerMenu__menu-item">Shop</div>
        <div className="BurgerMenu__menu-item">About us</div>
      </div>
      <div className="BurgerMenu__bottom">
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
