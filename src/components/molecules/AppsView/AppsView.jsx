import React         from 'react';
import { PropTypes } from 'react';

export default class AppView extends React.Component {
  static propTypes = {
    apps: PropTypes.array.isRequired
  }

  render() {
    console.log(this.props.apps)
    return (
      <div id="apps-list">
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
