import React from 'react';
import Animation from '../Animation';
import heroSprite from './hero-sprite.png';

const data = {
  run: { from: 1, to: 12 },
  attack: { from: 13, to: 24 },
};

type TAnimations = keyof typeof data;

type TProps = {
  state: TAnimations;
  onClick?: () => void;
};

const Hero = ({ state, onClick }: TProps) => {
  return (
    <Animation<TAnimations>
      onClick={onClick}
      image={heroSprite}
      running={state}
      data={data}
    />
  );
};

export default Hero;
