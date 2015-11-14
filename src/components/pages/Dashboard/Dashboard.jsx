import React, { PropTypes }   from 'react';
import AppsView               from 'components/molecules/AppsView';
import AppsForm               from 'components/molecules/AppsForm';
import { bindActionCreators } from 'redux';
import * as AppActions        from 'actions/AppActions';
import { connect }            from 'react-redux';

@connect(state => ({ apps: state.apps }))

export default class Home extends React.Component {
  static propTypes = {
    apps:    PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  static needs = [
    AppActions.getApps
  ]
  
  render() {
    const { apps, dispatch } = this.props;

    return (
      <div id="home">
        <AppsView apps={apps}
          {...bindActionCreators(AppActions, dispatch)} />

        <AppsForm
          {...bindActionCreators(AppActions, dispatch)}/>
      </div>
    );
  }
}
