import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";

const ArticleType4 = () => {
  const imagesGrid = useRef(null);
  const [imagesGridClass, setImagesGridClass] = useState<
    "ArticleType4__single-image" | "ArticleType4__multiple-images"
  >("ArticleType4__multiple-images");
  useEffect(() => {
    if (imagesGrid.current.children.length === 1) {
      setImagesGridClass("ArticleType4__single-image");
    }
    if (imagesGrid.current.children.length > 1) {
      setImagesGridClass("ArticleType4__multiple-images");
    }
  }, []);
  return (
    <div className="ArticleType4">
      <div className="ArticleType4__left">
        <div className="ArticleType4__title">
          <div className="ArticleType4__title-small">
            <span>SIMPLE SOLUTION</span>
          </div>
          <div className="ArticleType4__title-big">
            TITLE THIS IS THE <br /> more proofs
          </div>
        </div>
        <div className="ArticleType4__desc">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam volup.
        </div>
        <div className="ArticleType4__addition">
          <div className="ArticleType4__addition-block">
            <div className="ArticleType4__icon">
              <img src="/assets/magnet.svg" alt="" />
            </div>
            <div className="ArticleType4__text">
              Use only with speific clear surface
            </div>
          </div>
          <div className="ArticleType4__addition-block">
            <div className="ArticleType4__icon">
              <img src="/assets/bar.svg" alt="" />
            </div>
            <div className="ArticleType4__text">
              Any angle for you best picture or video, anytime anywhere
            </div>
          </div>
        </div>
      </div>
      <div
        className={cx("ArticleType4__right", imagesGridClass)}
        ref={imagesGrid}
      >
        <div
          className="ArticleType4__grid-img"
          style={{ backgroundImage: "url(/assets/1.png)" }}
        ></div>
        <div
          className="ArticleType4__grid-img"
          style={{ backgroundImage: "url(/assets/2.png)" }}
        ></div>
        <div
          className="ArticleType4__grid-img"
          style={{ backgroundImage: "url(/assets/3.png)" }}
        ></div>
        <div
          className="ArticleType4__grid-img"
          style={{ backgroundImage: "url(/assets/1.png)" }}
        ></div>
      </div>
    </div>
  );
};

export default ArticleType4;
