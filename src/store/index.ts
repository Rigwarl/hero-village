import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import * as actions from './root-actions';
import * as selectors from './root-selectors';
import reducer from './root-reducer';

export { reducer, actions, selectors };

export default () => createStore(reducer, applyMiddleware(thunk));
