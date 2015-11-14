import React, { PropTypes } from 'react';
import SiteNav from 'components/molecules/SiteNav';

export default class App extends React.Component {

  static propTypes = {
    children: PropTypes.object
  }

  render() {
    require('styles/app.less');

    return (
      <div id="app">
        <SiteNav/>
        {this.props.children}
      </div>
    );
  }
}
