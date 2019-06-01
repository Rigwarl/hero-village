import React from 'react';
import { connect } from 'react-redux';
import { TState } from 'typesafe-actions';

import HealthBar from './HealthBar';
import { selectors } from '../store';

const mapStateToProps = (state: TState) => ({
  health: selectors.hero.getHealth(state),
  maxHealth: selectors.hero.getMaxHealth(),
});

type TProps = ReturnType<typeof mapStateToProps>;

const EnemyHealthBar = ({ health, maxHealth }: TProps) => (
  <HealthBar health={health} maxHealth={maxHealth} />
);

export default connect(mapStateToProps)(EnemyHealthBar);
