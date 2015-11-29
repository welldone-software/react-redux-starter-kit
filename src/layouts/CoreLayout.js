import React from 'react';
import 'styles/core.scss';
import { Link } from 'react-router';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render () {
    return (
      <div className='page-container'>
        <div className='menu-container text-center'>
          <Link to='/about'>About</Link>
          <span>{' | '}</span>
          <Link to='/'>Home</Link>
        </div>
        <div className='view-container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
