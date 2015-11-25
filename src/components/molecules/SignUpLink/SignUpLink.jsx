import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as routerActions from 'actions/routerActions';

@connect(
  state => state,
  routerActions)
export default class SignUpLink extends React.Component {
  static propTypes = {
    updatePath: PropTypes.func.isRequired,
  }
  
  render() {
    const { updatePath } = this.props;

    return (
      <div className="signUpLink">
        <div>Don't have an account? <a href="#" onClick={() => updatePath('/signup')}>Sign Up</a></div>
      </div>
    );
  }
}
