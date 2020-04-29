import React from "react";
import cx from 'classnames';
import SpriteAnimator from "react-sprite-animator";
import style from "./Sprite.module.scss";

const Sprite = ({ isStartPlayingSprite, isSmaler }) => {
  return (
    <div
      className={cx(style['Sprite'], { [style['smalldown']]: isSmaler })}
      style={{ opacity: isStartPlayingSprite ? 1 : 0 }}
    >
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
