import { combineReducers } from 'redux';
import hero from './hero/hero-reducer';
import enemy from './enemy/enemy-reducer';

export default combineReducers({ hero, enemy });
