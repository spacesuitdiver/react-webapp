import React, { PropTypes }   from 'react';

import { EmailInput } from 'components/atoms';

export default class LoginForm extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  
  render() {
    const { dispatch } = this.props;

    require('./LoginForm.less');

    return (
      <div id="loginForm">
        <form>
          <div className="form-group">
            <EmailInput />
          </div>

          <input type="password" name="password" placeholder="Your Password" />
        </form>
      </div>
    );
  }
}
