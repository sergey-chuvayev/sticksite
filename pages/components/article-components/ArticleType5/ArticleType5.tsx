import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";

import style from "./ArticleType5.module.scss";

const ArticleType5 = () => {
  const imagesGrid = useRef(null);
  const [imagesGridClass, setImagesGridClass] = useState<
    "single-image" | "multiple-images"
  >("multiple-images");
  useEffect(() => {
    if (imagesGrid.current.children.length === 1) {
      setImagesGridClass("single-image");
    }
    if (imagesGrid.current.children.length > 1) {
      setImagesGridClass("multiple-images");
    }
  }, []);
  return (
    <div className={style["ArticleType5"]}>
      <div className={style["left"]}>
        <div className={style["title"]}>HOW TO FIX IMStick<br/>to your DEVICE</div>
        <div className={style["divider"]} />
        <div className={style["info-blocks"]}>
          <div className={style["block"]}>
            <div className={style["num"]}>
              <span>1</span>
            </div>
            <div className={style["text"]}>
              Lorem ipsum dolor sit amet, consectetur adips
            </div>
          </div>
          <div className={style["block"]}>
            <div className={style["num"]}>
              <span>2</span>
            </div>
            <div className={style["text"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eni
            </div>
          </div>
          <div className={style["block"]}>
            <div className={style["num"]}>
              <span>3</span>
            </div>
            <div className={style["text"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eni
            </div>
          </div>
          <div className={style["block"]}>
            <div className={style["num"]}>
              <span>4</span>
            </div>
            <div className={style["text"]}>
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </div>
        </div>
        <div className={style["down-img"]}>
          <img src="/assets/phone.svg" alt="" />
        </div>
      </div>
      <div className={style["right"]}>
        <div
          ref={imagesGrid}
          className={cx(style["grid"], style[imagesGridClass])}
        >
          <div
            className={style["grid-img"]}
            style={{ backgroundImage: "url(/assets/1.png)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleType5;
