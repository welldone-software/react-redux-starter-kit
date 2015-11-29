import { createReducer }     from '../utils';
import { COUNTER_INCREMENT, COUNTER_SET } from 'constants/counter';

const initialState = 0;
export default createReducer(initialState, {
  [COUNTER_INCREMENT] : (state) => state + 1,
  [COUNTER_SET] : (state, payload) => payload.count
});
