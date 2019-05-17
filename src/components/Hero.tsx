import React from 'react';
import Animation from './Animation';
import heroSprite from '../assets/hero-sprite.png';

const spriteData = {
  run: { from: 1, to: 12 },
  attack: { from: 13, to: 24 },
};

export type THeroState = keyof typeof spriteData;

type TProps = {
  state: THeroState;
  onClick?: () => void;
};

const Hero = ({ state, onClick }: TProps) => {
  return (
    <Animation<THeroState>
      image={heroSprite}
      data={spriteData}
      current={state}
      onClick={onClick}
    />
  );
};

export default Hero;
