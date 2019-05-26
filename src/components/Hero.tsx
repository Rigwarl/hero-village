import React from 'react';
import Animation from './Animation';
import heroSprite from '../assets/hero-sprite.png';

const spriteData = {
  idle: { from: 1, to: 2 },
  run: { from: 1, to: 12 },
  attack: { from: 13, to: 24 },
};

type THeroMove = keyof typeof spriteData;

type TProps = {
  state: THeroMove;
};

const Hero = ({ state }: TProps) => {
  return (
    <Animation<THeroMove>
      image={heroSprite}
      data={spriteData}
      current={state}
    />
  );
};

export default Hero;
