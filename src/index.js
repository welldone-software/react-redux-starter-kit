import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { syncReduxAndRouter } from 'redux-simple-router';

import App from 'components/App';
import configureStore from 'store/configureStore';

const target = document.getElementById('root');
const history = createBrowserHistory();
const store = configureStore(window.__INITIAL_STATE__, __DEBUG__);

syncReduxAndRouter(history, store);

const node = (
  <App
    history={history}
    store={store}
    debug={__DEBUG__}
    debugExternal={__DEBUG_NW__}
  />
);

ReactDOM.render(node, target);
