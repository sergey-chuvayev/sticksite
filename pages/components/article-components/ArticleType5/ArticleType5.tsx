import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";

const ArticleType5 = () => {
  const imagesGrid = useRef(null);
  const [imagesGridClass, setImagesGridClass] = useState<
    "ArticleType5__single-image" | "ArticleType5__multiple-images"
  >("ArticleType5__multiple-images");
  useEffect(() => {
    if (imagesGrid.current.children.length === 1) {
      setImagesGridClass("ArticleType5__single-image");
    }
    if (imagesGrid.current.children.length > 1) {
      setImagesGridClass("ArticleType5__multiple-images");
    }
  }, []);
  return (
    <div className="ArticleType5">
      <div className="ArticleType5__left">
        <div className="ArticleType5__title">HOW TO FIX IMStick<br/>to your DEVICE</div>
        <div className="ArticleType5__divider" />
        <div className="ArticleType5__info-blocks">
          <div className="ArticleType5__block">
            <div className="ArticleType5__num">
              <span>1</span>
            </div>
            <div className="ArticleType5__text">
              Lorem ipsum dolor sit amet, consectetur adips
            </div>
          </div>
          <div className="ArticleType5__block">
            <div className="ArticleType5__num">
              <span>2</span>
            </div>
            <div className="ArticleType5__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eni
            </div>
          </div>
          <div className="ArticleType5__block">
            <div className="ArticleType5__num">
              <span>3</span>
            </div>
            <div className="ArticleType5__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eni
            </div>
          </div>
          <div className="ArticleType5__block">
            <div className="ArticleType5__num">
              <span>4</span>
            </div>
            <div className="ArticleType5__text">
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </div>
        </div>
        <div className="ArticleType5__down-img">
          <img src="/assets/phone.svg" alt="" />
        </div>
      </div>
      <div className="ArticleType5__right">
        <div
          ref={imagesGrid}
          className={cx("ArticleType5__grid", imagesGridClass)}
        >
          <div
            className="ArticleType5__grid-img"
            style={{ backgroundImage: "url(/assets/1.png)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleType5;
