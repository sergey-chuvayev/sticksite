import React, { useState, useEffect, useRef } from "react";
import cx from "classnames";

import Header from "../Header/Header";
import VerticalMenu from "../VerticalMenu/VerticalMenu";

const SubcategoryPage = () => {
  return (
    <div className="SubcategoryPage">
      <div className="SubcategoryPage__vertical-menu">
        <VerticalMenu color="black" />
      </div>
      <Header themeColor="black" onOpenMenu={() => {}} />
      <div className="SubcategoryPage__main-frame">
        <div className="SubcategoryPage__content-grid">
          <div /> {/* grid span */}
          <div className="SubcategoryPage__image">
            <div className="SubcategoryPage__image__text">
              <div className="SubcategoryPage__image__text__catname">
                <span>01</span>
                <span>OUTDOOR</span>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(/assets/subround.png)` }}           
              className="SubcategoryPage__image__img"
            />
          </div>
          <div className="SubcategoryPage__text">
            <div className="SubcategoryPage__text__top">
              <div
                style={{ backgroundImage: `url(/assets/subimg.png)` }}
                className="SubcategoryPage__text__top__image"
              />
              <div>
                <div className="SubcategoryPage__text__title">
                  FIND YOUR WAY FOR THE BEST TIME
                </div>
                <div className="SubcategoryPage__text__divider" />
              </div>
            </div>
            <div className="SubcategoryPage__text__text">
              Grab the IMStand. It screws securely into your IMStick and
              provides a stable base with a flexible arm for perfect
              positioning. Use something something.
            </div>
            <img
              className="SubcategoryPage__text__image"
              src="/assets/subimg.png"
              alt=""
            />
          </div>
        </div>
        <div className="SubcategoryPage__category-arrow-down" />
      </div>
      <div className="SubcategoryPage__main-content">{/* content here */}</div>
    </div>
  );
};

export default SubcategoryPage;
