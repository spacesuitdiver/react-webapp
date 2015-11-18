import React, { PropTypes }   from 'react';

export default class LoginWithFacebookButton extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }
  
  render() {

    require("./LoginWithFacebookButton.less");

    return (
      <div className="facebookButton">
        <div className="facebookButton-inner">
          <button className="btn btn-lg btn-facebookButton" type={this.props.type}>
            <span className="icon icon-thumbs-up"></span>
            {this.props.text}
          </button>
        </div>
      </div>
    );
  }
}
