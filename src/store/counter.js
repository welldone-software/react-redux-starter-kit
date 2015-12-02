import { createReducer } from 'utils';

export const actions = {
  increment: () => ({ type : 'COUNTER_INCREMENT' }),
  asyncIncrement: () => ({
    type : 'ASYNC_COUNTER_INCREMENT',
    payload: {
      promise: new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(2), 1000);
      }),
      data: 1
    }
  }),
  set: (count) => ({
    type : 'COUNTER_SET',
    payload: { count }
  })
};

const initialState = 0;
export const reducer = createReducer(initialState, {
  'COUNTER_INCREMENT' : (state) => state + 1,
  'ASYNC_COUNTER_INCREMENT_PENDING' : (state, payload) => state + payload,
  'ASYNC_COUNTER_INCREMENT_FULFILLED' : (state, payload) => state + payload,
  'COUNTER_SET' : (state, payload) => payload.count
});

export default {actions, reducer};
