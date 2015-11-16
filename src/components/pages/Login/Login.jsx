import React, { PropTypes }   from 'react';
import { LoginForm } from 'components/molecules';
import { Dashhead } from 'components/atoms';

export default class Login extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  
  render() {
    const { dispatch } = this.props;
    require("./Login.less");

    return (
      <div className="login">
        <Dashhead title="Login" subTitle="Type in yo creds" />
        <LoginForm/>
      </div>
    );
  }
}
