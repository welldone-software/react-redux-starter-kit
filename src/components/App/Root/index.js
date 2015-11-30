import React from 'react';
import { Link } from 'react-router';

import 'styles/core.scss';

export default class Root extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render () {
    return (
      <div className='page-container'>
        <div className='menu-container text-center'>
          <Link to='/settings'>Settings</Link>
          <span>{' | '}</span>
          <Link to='/'>Documents</Link>
        </div>
        <div className='view-container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
