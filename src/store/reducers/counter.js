import { createReducer } from 'utils';

const initialState = 0;
export default createReducer(initialState, {
  'COUNTER_INCREMENT' : (state) => state + 1,
  'COUNTER_SET' : (state, payload) => payload.count
});
