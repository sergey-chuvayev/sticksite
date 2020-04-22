import React from 'react';
import SpriteAnimator from 'react-sprite-animator';

const Sprite = () => {
 return (
    <SpriteAnimator
      sprite='/sprite1.png'
      width={540}
      height={420}
      fps={1}
      direction="vertical"
      frameCount={87}
      wrapAfter={9}
    />
 )
}

export default Sprite;
