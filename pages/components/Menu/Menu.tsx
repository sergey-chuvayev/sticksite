import React, { useState } from 'react';
import cx from 'classnames';

import style from './Menu.module.scss';

const Menu = () => {
  const [isSubMenuOpened, setIsSubMenuOpened] = useState(false);
  return (
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
  )
}

export default Menu;
