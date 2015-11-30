import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import Root from './Root';
import Documents from './Root/Documents';
import Settings from './Root/Settings';

export default (
  <Route component={Root} path='/'>
    <IndexRedirect to='/documents' />
    <Route component={Documents} path='/documents' />
    <Route component={Settings} path='/settings(/:counter)' />
  </Route>
);
