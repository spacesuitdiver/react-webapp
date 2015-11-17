import React, { PropTypes }   from 'react';
import { AppsView } from 'components/molecules';
import { bindActionCreators } from 'redux';
import * as appActions        from 'actions/appActions';
import { connect }            from 'react-redux';

@connect(state => ({ apps: state.apps }))

export default class Dashboard extends React.Component {
  static propTypes = {
    apps:    PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  static needs = [
    appActions.getApps
  ]
  
  render() {
    const { apps, dispatch } = this.props;

    return (
      <div id="dashboard">
        <AppsView apps={apps} />
      </div>
    );
  }
}
