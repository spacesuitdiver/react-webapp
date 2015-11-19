import React  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { LoginForm } from 'components/molecules';
import { Dashhead } from 'components/atoms';
import { LoginWithFacebookButton } from 'components/atoms';
import { DividedHeading } from 'components/atoms';

export default class Login extends React.Component {

  render() {
    require("./Login.less");

    return (
      <div className="login">
        <Dashhead title="Login" subTitle="Type in yo creds" />
        <div><LoginWithFacebookButton text="Login with Facebook" type="button"/></div>
        <div>
          <div className="dividedHeading-inner"><DividedHeading text="or"/></div>
        </div>
        <div><LoginForm/></div>
      </div>
    );
  }
}
