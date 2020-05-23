import React from "react";

import style from "./ArticleType7.module.scss";

const ArticleType7 = () => {
  return (
    <div className={style["ArticleType7"]}>
      <div className={style["left"]}>
        <div className={style["title"]}>
          <span>Sed ut perspiciatis unde omnis iste natus erro</span>
        </div>
      </div>
      <div className={style["right"]}>
        <div className={style["desc"]}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntu.
        </div>
      </div>
    </div>
  );
};

export default ArticleType7;
