import React, { useState } from 'react';
import Animation from '../Animation';
// import runSprite from './hero-run.png';
// import attackSprite from './hero-attack.png';
import heroSprite from './hero-sprite.png';

const data = {
  run: { from: 1, to: 12 },
  attack: { from: 13, to: 24 },
};

type TAnimations = keyof typeof data;

const Hero = () => {
  const [animation, setAnimation] = useState<TAnimations>('run');

  return (
    <Animation<TAnimations>
      // onClick={() => setAnimation('attack')}
      image={heroSprite}
      running={animation}
      data={data}
    />
  );
};

export default Hero;
