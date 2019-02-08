import React from 'react';

export default class User extends React.Component {
  render () {
    return <div>
      <div className="card border-secondary mb-3">
        <div className="card-header">{this.props.username}</div>
        <div className="card-body text-seconday">
          <p>{this.props.name}</p>
          <p>{this.props.email}</p>
          <p>{this.props.phone}</p>
          <p>{this.props.website}</p>
        </div>
      </div>
    </div>
  }
}