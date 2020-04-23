import React from "react";
import SpriteAnimator from "react-sprite-animator";
import style from "./HomePage.module.scss";

const Sprite = ({ isStartPlayingAnimation }) => {
  return (
    <div className={style['Sprite']} style={{ opacity: isStartPlayingAnimation ? 1 : 0 }}>
      <SpriteAnimator
        sprite="/sprite.png"
        width={460}
        height={312}
        fps={30}
        direction="vertical"
        frameCount={88}
        wrapAfter={9}
        loop={false}
        shouldAnimate={isStartPlayingAnimation}
      />
    </div>
  );
};

export default Sprite;
