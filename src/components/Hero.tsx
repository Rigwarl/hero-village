import React from 'react';
import { connect } from 'react-redux';
import { TState } from 'typesafe-actions';
import { hero } from '../store/root-selectors';
import Animation from './Animation';
import heroSprite from '../assets/hero-sprite.png';

const spriteData = {
  idle: { from: 1, to: 2 },
  run: { from: 1, to: 12 },
  attack: { from: 13, to: 24 },
};

const mapStateToProps = (state: TState) => ({
  move: hero.getMove(state),
});

type TAnimationName = keyof typeof spriteData;
type TProps = ReturnType<typeof mapStateToProps>;

const Hero = ({ move }: TProps) => (
  <Animation<TAnimationName>
    image={heroSprite}
    data={spriteData}
    current={move}
  />
);

export default connect(mapStateToProps)(Hero);
