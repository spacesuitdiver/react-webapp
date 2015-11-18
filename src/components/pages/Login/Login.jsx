import React  from 'react';
import { PropTypes } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { LoginForm } from 'components/molecules';
import { Dashhead } from 'components/atoms';
import { LoginWithFacebookButton } from 'components/atoms';

export default class Login extends React.Component {

  static contextTypes = {
    history: PropTypes.history
  }

  render() {
    require("./Login.less");

    return (
      <div className="login">
        <Dashhead title="Login" subTitle="Type in yo creds" />
        <LoginWithFacebookButton text="Login with Facebook" type="button"/>
        <LoginForm/>
        <button onClick={() => this.context.history.replaceState(null, '/')}>Foo</button>
      </div>
    );
  }
}
