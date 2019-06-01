import { TThunkAction } from 'typesafe-actions';

import { selectors, actions } from '.';

export default (): TThunkAction<void> => (dispatch, getState) => {
  const time = Date.now();
  const state = getState();

  const prevTime = selectors.time.get(state);

  const heroMove = selectors.hero.getMove(state);
  const heroMoveTime = selectors.hero.getMoveTime(state);
  const heroMoveDuration = selectors.hero.getMoveDuration();
  const heroDamage = selectors.hero.getDamage(state);
  const heroExp = selectors.hero.getExp(state);
  const heroLvlExp = selectors.hero.getLvlExp(state);

  const enemyMove = selectors.enemy.getMove(state);
  const enemyMoveTime = selectors.enemy.getMoveTime(state);
  const enemyMoveDuration = selectors.enemy.getMoveDuration();
  const enemyHealth = selectors.enemy.getHealth(state);
  const enemyExpPerKill = selectors.enemy.getExp(state);
  const enemyCoinsPerKill = selectors.enemy.getCoins(state);

  if (heroExp >= heroLvlExp) {
    dispatch(actions.hero.changeExp(-heroLvlExp));
    dispatch(actions.hero.addLvl());
  }

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
    const attackHit = hitTime >= prevTime && hitTime < time;
    const attackLength = time - heroMoveTime;

    if (attackHit) {
      dispatch(actions.hero.hit(heroDamage));
    }

    if (attackLength >= heroMoveDuration) {
      dispatch(actions.hero.move({ move: 'idle', time }));
    }
  }

  if (enemyMove === 'idle' && enemyHealth <= 0) {
    dispatch(actions.enemy.move({ move: 'dead', time }));
    dispatch(actions.hero.changeExp(enemyExpPerKill));
    dispatch(actions.balance.changeCoins(enemyCoinsPerKill));
  }

  if (enemyMove === 'dead' && enemyMoveTime + enemyMoveDuration <= time) {
    dispatch(actions.enemy.spawn({ time }));
  }

  dispatch(actions.time.set(time));
};
