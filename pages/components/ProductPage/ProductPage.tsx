import React, { useState, useEffect, useRef } from "react";
import cx from "classnames";

import Header from "../Header/Header";
import ProductMenu from "../ProductMenu/ProductMenu";

const ProductPage = () => {
  return (
    <div className="ProductPage">
      <div className="ProductPage__vertical-menu">
        <ProductMenu />
      </div>
      <Header themeColor="black" onOpenMenu={() => {}} />
      <div className="ProductPage__main-frame">
        <div className="ProductPage__content-grid">
          <div /> {/* grid span */}
          <div className="ProductPage__image">
            <div
              style={{ backgroundImage: `url(/assets/subround.png)` }}
              className="ProductPage__image__img"
            >
              <div className="ProductPage__image__text">
                <div className="ProductPage__image__text__catname">
                  <span>01</span>
                  <span>OUTDOOR</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ProductPage__text">
            <div className="ProductPage__text__top">
              <div
                style={{ backgroundImage: `url(/assets/subimg.png)` }}
                className="ProductPage__text__top__image"
              />
              <div>
                <div className="ProductPage__text__title">
                  FIND YOUR WAY FOR THE BEST TIME
                </div>
                <div className="ProductPage__text__divider" />
              </div>
            </div>
            <div className="ProductPage__text__text">
              Grab the IMStand. It screws securely into your IMStick and
              provides a stable base with a flexible arm for perfect
              positioning. Use something something.
            </div>
            <img
              className="ProductPage__text__image"
              src="/assets/subimg.png"
              alt=""
            />
          </div>
        </div>
        <div className="ProductPage__category-arrow-down">
          <svg
            width="164"
            height="69"
            viewBox="0 0 164 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="CategoryPage__category-arrow-down--animate">
              <path
                d="M76 43.7631L82.3158 50.4736L88.2368 43.7631"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <line
                x1="82.2632"
                y1="49.5"
                x2="82.2632"
                y2="22.5"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="ProductPage__main-content">{/* content here */}</div>
    </div>
  );
};

export default ProductPage;
