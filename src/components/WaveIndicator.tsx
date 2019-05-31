import React from 'react';
import { connect } from 'react-redux';
import { TState } from 'typesafe-actions';

import { selectors } from '../store';

const mapStateToProps = (state: TState) => ({
  wave: selectors.enemy.getWave(state),
});

type TProps = ReturnType<typeof mapStateToProps>;

const WaveIndicator = ({ wave }: TProps) => <span>wave: {wave}</span>;

export default connect(mapStateToProps)(WaveIndicator);
