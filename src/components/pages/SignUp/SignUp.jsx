import React, { PropTypes }   from 'react';
import { LoginForm } from 'components/molecules';
import { Dashhead } from 'components/atoms';
import { connect }            from 'react-redux';

@connect(state => ({}))
export default class SignUp extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  
  render() {
    const { dispatch } = this.props;

    require('./SignUp.less');

    return (
      <div className="signUp">
        <div className="signUp-inner">
          <Dashhead title="Sign Up" />
          <LoginForm/>
        </div>
      </div>
    );
  }
}
