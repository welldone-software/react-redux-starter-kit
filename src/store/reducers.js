import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';

import {reducer as counterReducer} from './stores/counter';

export default combineReducers({
  counterReducer,
  routing: routeReducer
});
