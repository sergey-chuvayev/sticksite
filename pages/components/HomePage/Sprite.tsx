import React from 'react';
import SpriteAnimator from 'react-sprite-animator';

const Sprite = () => {
 return (
    <SpriteAnimator
      sprite='/sprite.png'
      width={460}
      height={312}
      fps={40}
      direction="vertical"
      frameCount={88}
      wrapAfter={9}
      loop={false}
    />
 )
}

export default Sprite;
