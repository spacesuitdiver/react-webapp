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
            <div className="form-group">
              <Input label="Email" name="email" type="email" placeholder="smokeypickle@aol.com"/>
            </div>

            <Input label="Password" name="password" type="password" placeholder="Your password"/>
          </form>
        </div>
      </div>
    );
  }
}
