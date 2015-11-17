import React         from 'react';
import { PropTypes } from 'react';
import Immutable     from 'immutable';

export default class AppView extends React.Component {
  static propTypes = {
    apps: PropTypes.instanceOf(Immutable.List).isRequired
  }

  render() {

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
