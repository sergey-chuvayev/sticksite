import React from 'react';
import SpriteAnimator from 'react-sprite-animator';

const Sprite = () => {
 return (
    <SpriteAnimator
      sprite='/sprite.png'
      width={460}
      height={312}
      fps={30}
      direction="vertical"
      frameCount={88}
      wrapAfter={30}
    />
    // <div style={{
    //   backgroundImage: 'url(/sprite.png)',
    //   width: 540,
    //   height: 420,
    // }}></div>
 )
}

export default Sprite;
