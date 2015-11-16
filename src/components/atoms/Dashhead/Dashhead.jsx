import React, { PropTypes }   from 'react';

export default class Heading extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
  }
  
  render() {

    let subTitle = (this.props.subTitle) ? (<h6>{this.props.subTitle}</h6>) : '';

    return (
      <div className="dashhead">
        <div className="dashhead-inner">
          <div className="dashhead-titles">
            {subTitle}
            <h2 className="dashhead-title">{this.props.title}</h2>
          </div>
        </div>
      </div>
    );
  }
}
