import { createReducer } from 'utils';

export const actions = {
  increment: () => ({ type : 'COUNTER_INCREMENT' }),
  set: (count) => ({
    type : 'COUNTER_SET',
    payload: { count }
  })
};

const initialState = 0;
export const reducer = createReducer(initialState, {
  'COUNTER_INCREMENT' : (state) => state + 1,
  'COUNTER_SET' : (state, payload) => payload.count
});

export default {actions, reducer};
