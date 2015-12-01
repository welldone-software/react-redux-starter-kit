import thunk from 'redux-thunk';
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';

import DevTools from 'components/dev/DevTools';

export default function configureStore (rootReducer, initialState, debug = false) {
  let createStoreWithMiddleware;

  const middleware = applyMiddleware(thunk);

  if (debug) {
    createStoreWithMiddleware = compose(
      middleware,
      DevTools.instrument()
    );
  } else {
    createStoreWithMiddleware = compose(middleware);
  }

  return createStoreWithMiddleware(createStore)(
    rootReducer, initialState
  );
}
