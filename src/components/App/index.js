import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect } from 'react-router';

import { createDevToolsWindow } from 'utils';
import DevTools from 'components/dev/DevTools';
import routes from './routes';

export default class App extends React.Component {
  static propTypes = {
    history : React.PropTypes.object.isRequired,
    store   : React.PropTypes.object.isRequired,
    debug   : React.PropTypes.bool,
    debugExternal : React.PropTypes.bool
  }

  static defaultProps = {
    debug : false,
    debugExternal : false
  }

  renderDevTools () {
    if (!this.props.debug) {
      return null;
    }

    return this.props.debugExternal ?
      createDevToolsWindow(this.props.store) : <DevTools />;
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div>
          <Router history={this.props.history}>
            {routes}
          </Router>
          {this.renderDevTools()}
        </div>
      </Provider>
    );
  }
}
