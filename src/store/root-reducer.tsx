import { combineReducers } from 'redux';
import app from './app/app-reducer';
import hero from './hero/hero-reducer';
import enemy from './enemy/enemy-reducer';

export default combineReducers({ app, hero, enemy });
