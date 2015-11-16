import React, { PropTypes } from 'react';
import { SiteNav } from 'components/molecules';

export default class App extends React.Component {

  static propTypes = {
    children: PropTypes.object
  }

  render() {
    require('styles/app.less');

    return (
      <div id="app">
        <SiteNav/>
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}
