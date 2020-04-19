import React from "react";
import cx from "classnames";
import style from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={style["HomePage"]}>
      <div className={style["left"]}>
        <div className={style["logo"]}>
          <img className={style["logo__img"]} src="/logo.png" alt="" />
        </div>
        <div className={style["welcome-text"]}>
          IM<span>STICK</span>
          <br />
          YOUR PHONE’S
          <br />
          BEST BUDDY
        </div>
        <div className={style["sub-text"]}>
          FOR <span>BLOGGING</span>
        </div>
        <div className={style["social"]}>
          <div>instagram</div>
          <div>youtube</div>
          <div>facebook</div>
        </div>
      </div>

      <div className={style["middle"]}></div>

      <div className={style["right"]}>
        <div className={style["menu"]}>
          <div className={style["menu-item"]}>Home</div>
          <div className={style["menu-item"]}>Products</div>
          <div className={style["menu-item"]}>Shop</div>
          <div className={style["menu-item"]}>Company</div>
          <div className={cx(style["menu-item"], style["menu-item-cart"])}>
            Cart (0)
          </div>
        </div>

        <div className={style["shop-now"]}>
          <div>
            Shop<br/>
            Now >
          </div>
        </div>
      </div>

      <div className={style["orbits"]}>
        <div className={style["big"]} />
        <div className={style["medium"]} />
      </div>
    </div>
  );
};

export default HomePage;
