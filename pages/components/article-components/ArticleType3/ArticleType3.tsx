import React from "react";

const ArticleType3 = () => {
  return (
    <div className="ArticleType3">
      <div
        className="ArticleType3__image"
        style={{ backgroundImage: "url(/assets/1.png)" }}
      />
      <div className="ArticleType3__content">
        <div className="ArticleType3__title">
          a new generation <br />
          of tripods
        </div>
        <div className="ArticleType3__divider" />
        <div className="ArticleType3__desc">
          Sed ut perspiciatis unde omnis iste natus error sit volupta tem
          accusantium doloremque laudan ong tium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto{" "}
          <span className="ArticleType3__red">IMStand</span> vitae dicta sunt
          explicabo.
        </div>
      </div>
    </div>
  );
};

export default ArticleType3;
