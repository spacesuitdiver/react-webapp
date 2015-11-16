import React, { PropTypes }   from 'react';

export default class Input extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isOptional,
    value: PropTypes.string.isOptional
  }
  
  render() {

    return (
      <div className="form-group">
        <label>{this.props.label}</label>
        <input className="form-control" 
          type={this.props.type} 
          name={this.props.name} 
          placeholder={this.props.placeholder}
          value={this.props.value} />
      </div>
    );
  }
}
