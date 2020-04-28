import React, { useState } from "react";
import cx from "classnames";
import style from "./BurgerMenu.module.scss";

const BurgerMenu = ({ opened, close }) => {
  const [isSubOpened, setIsSubOpened] = useState(false);
  return (
    <div className={cx(style["BurgerMenu"], { [style["opened"]]: opened })}>
      <div className={style["cross"]} onClick={close}>
        <img src="/mobile/cross.svg" alt="" />
      </div>
      <div className={style["logo"]}>
        <img src="/logo.svg" alt="" />
      </div>
      <div className={style["menu"]}>
        <div
          className={cx(style["menu-item"], { [style["active"]]: isSubOpened })}
          onClick={() => {
            setIsSubOpened(!isSubOpened);
          }}
        >
          <span>How to use</span> <img className={style["arrow"]} src="/arrow-right.svg" />
        </div>
        {isSubOpened && (
          <div className={style["menu-sub"]}>
            <div className={style["menu-sub-item"]}>Auto</div>
            <div className={style["menu-sub-item"]}>Home & Office</div>
            <div className={style["menu-sub-item"]}>Sport</div>
            <div className={style["menu-sub-item"]}>Travel</div>
            <div className={style["menu-sub-item"]}>Music</div>
            <div className={style["menu-sub-item"]}>Blogging</div>
            <div className={style["menu-sub-item"]}>Horeca</div>
            <div className={style["menu-sub-item"]}>No phone</div>
          </div>
        )}
        <div className={style["menu-item"]}>Products</div>
        <div className={style["menu-item"]}>Shop</div>
        <div className={style["menu-item"]}>About us</div>
      </div>
      <div className={style["bottom"]}>
        <div className={style["socials"]}>
          <a className={style["socials-item"]}>
            <img src="/mobile/facebook.svg" alt="" />
          </a>
          <a className={style["socials-item"]}>
            <img src="/mobile/instagram.svg" alt="" />
          </a>
          <a className={style["socials-item"]}>
            <img src="/mobile/youtube.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
