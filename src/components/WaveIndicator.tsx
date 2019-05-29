import React from 'react';
import { connect } from 'react-redux';
import { TState } from 'typesafe-actions';
import { getWave } from '../store/area/area-selectors';

const mapDispatchToProps = (state: TState) => ({
  wave: getWave(state),
});

type TProps = ReturnType<typeof mapDispatchToProps>;

const WaveIndicator = ({ wave }: TProps) => (
  <div style={{ margin: '15px 50px' }}>wave: {wave}</div>
);

export default connect(mapDispatchToProps)(WaveIndicator);
