import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import _ from 'lodash';

import counter from './counter';
import counter2 from './counter2';

let subStores = {
  counter, counter2
};

export default combineReducers({
  ..._.transform(subStores, (result, subStore, subStoreName) => {
    result[subStoreName] = subStore.reducer;
  }),
  routing: routeReducer
});
