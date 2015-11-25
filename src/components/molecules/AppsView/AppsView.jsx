import React         from 'react';
import { PropTypes } from 'react';

export default class AppView extends React.Component {
  static propTypes = {
    apps: PropTypes.array.isRequired
  }

  render() {
    return (
      <div id="apps-list">
        <h1>My Apps</h1>
        {
          this.props.apps.map(function (app, index) {
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
