import React from "react";
import SpriteAnimator from "react-sprite-animator";
import style from "./HomePage.module.scss";

const Sprite = () => {
  return (
    <div className={style['Sprite']}>
      <SpriteAnimator
        sprite="/sprite.png"
        width={460}
        height={312}
        fps={40}
        direction="vertical"
        frameCount={88}
        wrapAfter={9}
        loop={false}
      />
    </div>
  );
};

export default Sprite;
