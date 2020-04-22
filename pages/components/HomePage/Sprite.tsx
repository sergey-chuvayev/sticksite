import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';

const Sprite = () => {
 return (
    <Spritesheet
      image={`/sprite.png`}
      widthFrame={540}
      heightFrame={420}
      steps={90}
      fps={12}
      autoplay={true}
      loop={true}
    />
 )
}

export default Sprite;
