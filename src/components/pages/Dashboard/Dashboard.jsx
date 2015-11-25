import React, { PropTypes }   from 'react';
import { AppsView } from 'components/molecules';
import * as appActions        from 'actions/appActions';
import { connect }            from 'react-redux';

@connect(state => ({ apps: state.apps }))
export default class Dashboard extends React.Component {
  static propTypes = {
    apps:    PropTypes.any.isRequired,
  }

  componentWillMount() {
    this.props.dispatch(appActions.getApps());
  }
  
  render() {
    const { apps } = this.props;

    return (
      <div id="dashboard">
        <AppsView apps={apps} />
      </div>
    );
  }
}
