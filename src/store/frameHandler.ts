import { TStore } from 'typesafe-actions';
import { app, hero, enemy } from './root-selectors';
import * as actions from './root-actions';

export default (store: TStore) => {
  const time = Date.now();
  const state = store.getState();
  const dispatch = store.dispatch;

  const appTime = app.getTime(state);

  const heroMove = hero.getMove(state);
  const heroMoveTime = hero.getMoveTime(state);
  const heroMoveDuration = hero.getMoveDuration();
  const heroDamage = hero.getDamage();

  const enemyMove = enemy.getMove(state);
  const enemyMoveTime = enemy.getMoveTime(state);
  const enemyMoveDuration = enemy.getMoveDuration();
  const enemyHealth = enemy.getHealth(state);

  if (heroMove === 'idle') {
    if (enemyMove === 'dead') {
      dispatch(actions.hero.move({ move: 'run', time }));
    } else {
      dispatch(actions.hero.move({ move: 'attack', time }));
    }
  }

  if (heroMove === 'run') {
    if (enemyMove === 'idle' && enemyMoveTime + enemyMoveDuration <= time) {
      dispatch(actions.hero.move({ move: 'attack', time }));
    }
  }

  if (heroMove === 'attack') {
    const hitTime = heroMoveTime + heroMoveDuration / 2;
    const attackHit = hitTime >= appTime && hitTime < time;
    const attackLength = time - heroMoveTime;

    if (attackHit) {
      dispatch(actions.enemy.damage({ damage: heroDamage }));
    }

    if (attackLength >= heroMoveDuration) {
      dispatch(actions.hero.move({ move: 'idle', time }));
    }
  }

  if (enemyMove === 'idle' && enemyHealth <= 0) {
    dispatch(actions.enemy.move({ move: 'dead', time }));
  }

  if (enemyMove === 'dead' && enemyMoveTime + enemyMoveDuration <= time) {
    dispatch(dispatch(actions.enemy.spawn({ time })));
  }

  dispatch(actions.app.setTime({ time }));
};
