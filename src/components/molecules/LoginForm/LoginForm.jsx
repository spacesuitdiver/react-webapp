import React, { PropTypes }   from 'react';

import { Input } from 'components/atoms';

export default class LoginForm extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  
  render() {
    const { dispatch } = this.props;

    return (
      <div className="loginForm">
        <div className="loginForm-inner">
          <form>
            <Input label="Email" name="email" type="email" placeholder="smokeypickle@aol.com"/>
            <Input label="Password" name="password" type="password" placeholder="Your password"/>
          </form>
        </div>
      </div>
    );
  }
}
