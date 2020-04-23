import React from "react";
import SpriteAnimator from "react-sprite-animator";
import style from "./HomePage.module.scss";

const Sprite = ({ isStartPlayingSprite }) => {
  return (
    <div className={style['Sprite']} style={{ opacity: isStartPlayingSprite ? 1 : 0 }}>
      <SpriteAnimator
        sprite="/sprite.png"
        width={460}
        height={312}
        fps={30}
        direction="vertical"
        frameCount={88}
        wrapAfter={9}
        loop={false}
        shouldAnimate={isStartPlayingSprite}
      />
    </div>
  );
};

export default Sprite;
