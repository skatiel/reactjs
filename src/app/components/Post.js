import React from 'react';

export default class Post extends React.Component {
  render () {
    return <div>
      <div className="card border-secondary mb-3">
        <div className="card-header">{this.props.title}</div>
        <div className="card-body text-seconday">
          <p>{this.props.title}</p>
          <p>{this.props.body}</p>
        </div>
      </div>
    </div>
  }
}