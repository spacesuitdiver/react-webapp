import React, { PropTypes }   from 'react';
import { LoginForm } from 'components/molecules';
import { Heading } from 'components/atoms';

export default class Login extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  
  render() {
    const { dispatch } = this.props;

    return (
      <div id="page-login">
        <Heading title="Login" subTitle="Type in yo creds" />
        <LoginForm/>
      </div>
    );
  }
}
