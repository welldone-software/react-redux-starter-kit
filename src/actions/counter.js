export default {
  increment: () => ({ type : 'COUNTER_INCREMENT' }),
  set: (count) => ({
    type : 'COUNTER_SET',
    payload: { count }
  })
};
