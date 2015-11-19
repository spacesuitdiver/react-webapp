import React, { PropTypes } from 'react';

export default class DividedHeading extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

render() {
    return (
      <div className="hr-divider">
        <h3 className="hr-divider-content hr-divider-heading">{this.props.text}</h3>
      </div>
    );
  }
}
