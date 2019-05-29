import React from 'react';
import { connect } from 'react-redux';
import { TState } from 'typesafe-actions';

import HealthBar from './HealthBar';
import { hero } from '../store/root-selectors';

const mapStateToProps = (state: TState) => ({
  health: hero.getHealth(state),
  maxHealth: hero.getMaxHealth(),
});

type TProps = ReturnType<typeof mapStateToProps>;

const EnemyHealthBar = ({ health, maxHealth }: TProps) => (
  <HealthBar health={health} maxHealth={maxHealth} />
);

export default connect(mapStateToProps)(EnemyHealthBar);