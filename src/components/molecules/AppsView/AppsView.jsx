import React         from 'react';
import { PropTypes } from 'react';
import Immutable     from 'immutable';

export default class AppView extends React.Component {
  static propTypes = {
    apps: PropTypes.instanceOf(Immutable.List).isRequired
  }

  render() {
    const apps = this.props.apps.toJSON();

    return (
      <div id="apps-list">
        {
          apps.map(function (app, index) {
            return (
              <div key={index}>
                <p>{app.name}</p>
              </div>
            );
          }.bind(this))
        }
      </div>
    );
  }
}
