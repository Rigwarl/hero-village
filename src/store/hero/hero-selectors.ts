import { TState } from 'typesafe-actions';
import * as HERO from './hero-constants';

export const getMaxHealth = () => HERO.HEALTH;

export const getHealth = (state: TState) =>
  getMaxHealth() - state.hero.missedHealth;

export const getDamage = () => HERO.DAMAGE;

export const getMove = (state: TState) => state.hero.move;

export const getMoveDuration = () => HERO.MOVE_DURATION;
