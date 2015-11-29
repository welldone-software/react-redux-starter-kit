import React                 from 'react';
import { Route, IndexRedirect } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import HomeView              from 'views/HomeView';
import AboutView             from 'views/AboutView';

export default (
  <Route component={CoreLayout} path='/'>
    <IndexRedirect to='/home' />
    <Route component={HomeView} path='/home(/:counter)' />
    <Route component={AboutView} path='/about' />
  </Route>
);
