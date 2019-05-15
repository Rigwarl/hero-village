import React, { useState } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import runSprite from './hero-run.png';
import attackSprite from './hero-attack.png';

const Hero = () => {
  const [sprite, setSprite] = useState(runSprite);

  return (
    <Spritesheet
      onClick={() => setSprite(attackSprite)}
      image={sprite}
      steps={12}
      fps={12}
      direction="forward"
      loop={true}
      widthFrame={900}
      heightFrame={900}
      onLoopComplete={() => setSprite(runSprite)}
    />
  );
};

export default Hero;
