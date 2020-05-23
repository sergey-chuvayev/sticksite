import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";

import style from "./ArticleType4.module.scss";

const ArticleType4 = () => {
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
    <div className={style["ArticleType4"]}>
      <div className={style["left"]}>
        <div className={style["title"]}>
          <div className={style["title-small"]}>
            <span>SIMPLE SOLUTION</span>
          </div>
          <div className={style["title-big"]}>
            TITLE THIS IS THE <br /> more proofs
          </div>
        </div>
        <div className={style["desc"]}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam volup.
        </div>
        <div className={style["addition"]}>
          <div className={style["addition-block"]}>
            <div className={style["icon"]}>
              <img src="/assets/magnet.svg" alt="" />
            </div>
            <div className={style["text"]}>
              Use only with speific clear surface
            </div>
          </div>
          <div className={style["addition-block"]}>
            <div className={style["icon"]}>
              <img src="/assets/bar.svg" alt="" />
            </div>
            <div className={style["text"]}>
              Any angle for you best picture or video, anytime anywhere
            </div>
          </div>
        </div>
      </div>
      <div
        className={cx(style["right"], style[imagesGridClass])}
        ref={imagesGrid}
      >
        <div
          className={style["grid-img"]}
          style={{ backgroundImage: "url(/assets/1.png)" }}
        ></div>
        <div
          className={style["grid-img"]}
          style={{ backgroundImage: "url(/assets/2.png)" }}
        ></div>
        <div
          className={style["grid-img"]}
          style={{ backgroundImage: "url(/assets/3.png)" }}
        ></div>
        <div
          className={style["grid-img"]}
          style={{ backgroundImage: "url(/assets/1.png)" }}
        ></div>
      </div>
    </div>
  );
};

export default ArticleType4;
