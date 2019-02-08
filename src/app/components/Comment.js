import React from 'react';

export default class Comment extends React.Component {
  render () {
    return <div>
      <div className="card border-secondary mb-3">
        <div className="card-header">{this.props.name}</div>
        <div className="card-body text-seconday">
          <p>{this.props.name}</p>
          <p>{this.props.email}</p>
          <p>{this.props.body}</p>
        </div>
      </div>
    </div>
  }
}