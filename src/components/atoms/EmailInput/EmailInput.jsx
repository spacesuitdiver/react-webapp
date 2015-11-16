import React, { PropTypes }   from 'react';

export default class EmailInput extends React.Component {
  static propTypes = {
    email: PropTypes.string.isOptional
  }
  
  render() {
    return (
      <div className="form-group">
        <label>Email</label>
        <input className="form-control" type="email" name="email" placeholder="john@johndoe.com" value={this.props.email} />
      </div>
    );
  }
}
