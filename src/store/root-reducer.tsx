import { combineReducers } from 'redux';
import area from './area/area-reducer';
import app from './app/app-reducer';
import hero from './hero/hero-reducer';
import enemy from './enemy/enemy-reducer';

export default combineReducers({ area, app, hero, enemy });
