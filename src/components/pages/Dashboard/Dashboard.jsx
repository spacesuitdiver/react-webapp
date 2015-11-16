import React, { PropTypes }   from 'react';
import { AppsView, AppsForm } from 'components/molecules';
import { bindActionCreators } from 'redux';
import * as AppActions        from 'actions/AppActions';
import { connect }            from 'react-redux';

@connect(state => ({ apps: state.apps }))

export default class Dashboard extends React.Component {
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
