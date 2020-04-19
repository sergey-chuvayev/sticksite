import React from "react";
import cx from "classnames";
import style from "./HomePage.module.scss";

const Icon = () => (
  <svg viewBox="-2 -2 24 24">
    <path fill="#fff" d="M10,6.536c-2.263,0-4.099,1.836-4.099,4.098S7.737,14.732,10,14.732s4.099-1.836,4.099-4.098S12.263,6.536,10,6.536M10,13.871c-1.784,0-3.235-1.453-3.235-3.237S8.216,7.399,10,7.399c1.784,0,3.235,1.452,3.235,3.235S11.784,13.871,10,13.871M17.118,5.672l-3.237,0.014L12.52,3.697c-0.082-0.105-0.209-0.168-0.343-0.168H7.824c-0.134,0-0.261,0.062-0.343,0.168L6.12,5.686H2.882c-0.951,0-1.726,0.748-1.726,1.699v7.362c0,0.951,0.774,1.725,1.726,1.725h14.236c0.951,0,1.726-0.773,1.726-1.725V7.195C18.844,6.244,18.069,5.672,17.118,5.672 M17.98,14.746c0,0.477-0.386,0.861-0.862,0.861H2.882c-0.477,0-0.863-0.385-0.863-0.861V7.384c0-0.477,0.386-0.85,0.863-0.85l3.451,0.014c0.134,0,0.261-0.062,0.343-0.168l1.361-1.989h3.926l1.361,1.989c0.082,0.105,0.209,0.168,0.343,0.168l3.451-0.014c0.477,0,0.862,0.184,0.862,0.661V14.746z"></path>
  </svg>
);

const HomePage = () => {
  return (
    <div className={style["HomePage"]}>
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
          FOR <span>BLOGGING</span>
        </div>
        <div className={style["social"]}>
          <div>instagram</div>
          <div>youtube</div>
          <div>facebook</div>
        </div>
      </div>

      <div className={style["middle"]}>
        <div className={style["circle-menu"]}>
          <div className={style["circle-menu-item"]}><Icon /></div>
          <div className={style["circle-menu-item"]}><Icon /></div>
          <div className={style["circle-menu-item"]}><Icon /></div>
          <div className={style["circle-menu-item"]}><Icon /></div>
          <div className={style["circle-menu-item"]}><Icon /></div>
          <div className={style["circle-menu-item"]}><Icon /></div>
          <div className={style["circle-menu-item"]}><Icon /></div>
          <div className={style["circle-menu-item"]}><Icon /></div>
        </div>
        <div className={style["stick"]}>
          <img src="/stick.png" alt=""/>
        </div>
      </div>

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