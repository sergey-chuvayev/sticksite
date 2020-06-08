import React, { useState } from "react";
import cx from "classnames";

const ProductMenu = () => {
  return (
    <div className={cx("ProductMenu")}>
      <div className="ProductMenu__item">
        <img src="/assets/ProductMenu1.png" alt=""/>
        <div className="ProductMenu__item__name">
          IMStick
        </div>
      </div>
      <div className="ProductMenu__item">
        <img src="/assets/ProductMenu2.png" alt=""/>
        <div className="ProductMenu__item__name">
          IMStand
        </div>
      </div>
      <div className="ProductMenu__item is-active">
        <img src="/assets/ProductMenu3.png" alt=""/>
        <div className="ProductMenu__item__name">
          IMKeeper
        </div>
      </div>
      <div className="ProductMenu__item">
        <img src="/assets/ProductMenu4.png" alt=""/>
        <div className="ProductMenu__item__name">
          IMButton
        </div>
      </div>
      <div className="ProductMenu__item">
        <img src="/assets/ProductMenu5.png" alt=""/>
        <div className="ProductMenu__item__name">
          IMStrap
        </div>
      </div>
    </div>
  );
};

export default ProductMenu;
