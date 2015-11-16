import React		 from 'react';


export default class SiteNav extends React.Component {

  render() {

	return (
		<nav className="navbar navbar-inverse navbar-fixed-top">
		<div className="container-fluid container-fluid-spacious">
		  <div className="navbar-header">
			<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			  <span className="sr-only">Toggle navigation</span>
			  <span className="icon-bar"></span>
			  <span className="icon-bar"></span>
			  <span className="icon-bar"></span>
			</button>
			<a className="navbar-brand navbar-brand-emphasized" href="../index.html">
			  <span className="icon icon-leaf navbar-brand-icon"></span>
			  Dashboard
			</a>
		  </div>
		  <div id="navbar" className="navbar-collapse collapse">
			<ul className="nav navbar-nav">
			  <li >
				<a href="../order-history/index.html">Order History</a>
			  </li>
			  <li className="active">
				<a href="../fluid/index.html">Fluid layout</a>
			  </li>
			  <li >
				<a href="../icon-nav/index.html">Icon nav</a>
			  </li>
			  <li >
				<a href="../docs/index.html">
				  Docs
				</a>
			  </li>
			  <li >
				<a href="../light/index.html">Light UI</a>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
	);
  }
}
