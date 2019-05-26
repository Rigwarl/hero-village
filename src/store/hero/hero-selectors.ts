import { RootState } from 'typesafe-actions';
import * as HERO from './hero-constants';

export const getMaxHealth = () => HERO.HEALTH;

export const getHealth = (state: RootState) =>
  getMaxHealth() - state.hero.missedHealth;

export const getDamage = () => HERO.DAMAGE;

export const getMove = (state: RootState) => state.hero.move;

export const getMoveDuration = () => HERO.MOVE_DURATION;
