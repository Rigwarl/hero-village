import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import * as actions from './actions/root-actions';
import * as selectors from './selectors/root-selectors';
import reducer from './reducers/root-reducer';

export { reducer, actions, selectors };

export default () => createStore(reducer, applyMiddleware(thunk));
