import { COUNTER_INCREMENT, COUNTER_SET } from 'constants/counter';

export default {
  increment: () => ({ type : COUNTER_INCREMENT }),
  set: (count) => ({
    type : COUNTER_SET,
    payload: { count }
  })
};
