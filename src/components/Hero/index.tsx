import React from 'react';
import Animation from '../Animation';
import heroSprite from './hero-sprite.png';

const SpriteData = {
  run: { from: 1, to: 12 },
  attack: { from: 13, to: 24 },
};

export type THeroState = keyof typeof SpriteData;

type TProps = {
  state: THeroState;
  onClick?: () => void;
};

const Hero = ({ state, onClick }: TProps) => {
  return (
    <Animation<THeroState>
      onClick={onClick}
      image={heroSprite}
      current={state}
      data={SpriteData}
    />
  );
};

export default Hero;
