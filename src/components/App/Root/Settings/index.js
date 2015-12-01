import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {actions as counterActions} from 'store/stores/counter';

// We define mapStateToProps and mapDispatchToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter : state.counter,
  routerState : state.router
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(counterActions, dispatch)
});
export class HomeView extends React.Component {
  static propTypes = {
    actions  : React.PropTypes.object,
    counter  : React.PropTypes.number
  }

  componentWillMount() {
    let counter = parseInt(this.props.params.counter);
    if(!Number.isInteger(counter)){
      return;
    }
    this.props.actions.set(counter);
  }

  render () {
    let linkUrl = window.location.href.replace(/settings(\/\d*)?$/, 'settings/' + this.props.counter);
    return (
      <div className='container text-center'>
        <h1>Welcome to the React Redux Starter Kit</h1>
        <h2>Sample Counter: {this.props.counter}</h2>
        <h2>Started from: {this.props.params.counter || 0}</h2>
        <button className='btn btn-default'
                onClick={this.props.actions.increment}>
          Increment
        </button>
        <h3>Link to current count:</h3>
        <input readOnly value={linkUrl} style={{width: '300px'}}/>
        <hr />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
