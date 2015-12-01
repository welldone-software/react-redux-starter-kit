import { createReducer } from 'utils';

export const actions = {
  increment2: () => ({ type : 'COUNTER_INCREMENT2' }),
  set2: (count) => ({
    type : 'COUNTER_SET2',
    payload: { count }
  })
};

const initialState2 = 0;
export const reducer = createReducer(initialState2, {
  'COUNTER_INCREMENT2' : (state) => state + 1,
  'COUNTER_SET2' : (state, payload) => payload.count
});

export default {actions, reducer};
