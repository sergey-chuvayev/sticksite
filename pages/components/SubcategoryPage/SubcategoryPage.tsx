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
      <Header themeColor="black" />
      <div className="SubcategoryPage__main-frame">
        <div className="SubcategoryPage__content-grid">
          <div /> {/* grid span */}
          <div className="SubcategoryPage__image">
            <div className="SubcategoryPage__image__text">
              {/* <div className="SubcategoryPage__image__text__num">
                03
              </div> */}
              <div className="SubcategoryPage__image__text__catname">
                OUTDOOR
              </div>
            </div>
            <img src="/assets/subround.png" alt="" />
          </div>
          <div className="SubcategoryPage__text">
            <div className="SubcategoryPage__text__title">
              FIND YOUR WAY FOR THE BEST TIME
            </div>
            <div className="SubcategoryPage__text__divider" />
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
