import React, { PropTypes }   from 'react';
import { LoginForm } from 'components/molecules';
import { Heading } from 'components/atoms';

export default class SignUp extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  
  render() {
    const { dispatch } = this.props;

    const styles = require('./SignUp.less');

    console.log(styles);

    return (
      <div className={styles.signup}>
        <Heading title="Sign Up" />
        <LoginForm/>
      </div>
    );
  }
}
