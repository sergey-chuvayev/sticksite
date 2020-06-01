import React from "react";
import cx from "classnames";

const ArticleType11 = () => {
  return (
    <div className="ArticleType11">
      <div className="ArticleType11__grid">
        <div
          className={cx("ArticleType11__img", "ArticleType11__big")}
          style={{ backgroundImage: "url(/assets/big1.jpg)" }}
        />
        <div
          className={cx("ArticleType11__img", "ArticleType11__big")}
          style={{ backgroundImage: "url(/assets/big2.jpg)" }}
        />
        <div
          className={cx("ArticleType11__img", "ArticleType11__small")}
          style={{ backgroundImage: "url(/assets/big3.jpg)" }}
        />
        <div
          className={cx("ArticleType11__img", "ArticleType11__small")}
          style={{ backgroundImage: "url(/assets/big1.jpg)" }}
        />
        <div
          className={cx("ArticleType11__img", "ArticleType11__small")}
          style={{ backgroundImage: "url(/assets/big3.jpg)" }}
        />
        <div
          className={cx("ArticleType11__img", "ArticleType11__small")}
          style={{ backgroundImage: "url(/assets/big1.jpg)" }}
        />
        <div
          className={cx("ArticleType11__img", "ArticleType11__small")}
          style={{ backgroundImage: "url(/assets/big4.png)" }}
        />
      </div>
      <div className="ArticleType11__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim venenatis
        donec sed massa congue. Lipsum dolor sit amet, consectetur adipiscing
        elit. Enim venenatis donec sed massa congue.
      </div>
    </div>
  );
};

export default ArticleType11;
