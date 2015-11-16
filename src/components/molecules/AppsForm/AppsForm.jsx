import React, { PropTypes } from 'react';

export default class AppsForm extends React.Component {
  static propTypes = {
    createApp: PropTypes.func.isRequired
  }

  handleSubmit = () => {
    let node = this.refs['todo-input'];

    this.props.createApp(node.value);

    node.value = '';
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="type todo" ref="todo-input" style={ { width: "200px" } } />
        <input type="submit" value="Okay!" onClick={this.handleSubmit} />
      </div>
    );
  }
}
