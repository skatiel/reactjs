import React from 'react';
import {Link} from 'react-router';

export default class Menu extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
      <Link to="/" className="navbar-brand">{this.props.brand}</Link>
      </div>
      <div className="collapse navbar-collapse">
        <ul>
          {this.props.children}
        </ul>
      </div>
      </nav>
    );
  }
}
