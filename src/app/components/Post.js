import React from 'react';

export default class Post extends React.Component {
  render () {
    return <div><li><a href={this.props.url}><h2>{this.props.title}</h2>
    <p>{this.props.postBody}</p></a>
    <div id={this.props.text} className="modalDialog"><div>
      <a href="#close" title="Close" className="close">X</a>
      <h2>{this.props.title}</h2>
      <p>{this.props.postBody}</p>
</div>
</div></li></div>
  }
}