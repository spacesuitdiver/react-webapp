import React         from 'react';
import { PropTypes } from 'react';
import Immutable     from 'immutable';

export default class AppView extends React.Component {
  static propTypes = {
    apps:      PropTypes.instanceOf(Immutable.List).isRequired,
    editApp:   PropTypes.func.isRequired,
    deleteApp: PropTypes.func.isRequired
  }

  handleDelete = (e) => {
    const id = Number(e.target.dataset.id);

    this.props.deleteApp(id);
  }

  handleEdit = (e) => {
    const id         = Number(e.target.dataset.id);
    const currentVal = this.props.app.get(id);

    // For a cutting edge UX
    let text = window.prompt('', currentVal);

    this.props.editApp(id, text);
  }

  render() {
    const btnStyle = {
      'margin': '1em 0 1em 1em'
    };

    return (
      <div id="apps-list">
        {
          this.props.apps.map(function (app, index) {
            return (
              <div style={btnStyle} key={index}>
                <span>{app}</span>

                <button style={btnStyle} data-id={index} onClick={this.handleDelete}>X</button>
                <button style={btnStyle} data-id={index} onClick={this.handleEdit}>Edit</button>
              </div>
            );
          }.bind(this))
        }
      </div>
    );
  }
}
