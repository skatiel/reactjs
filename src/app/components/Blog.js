import React from 'react';
import Post from './Post';

export default class Blog extends React.Component {
  render () {
    const items = this.props.items.map ((items, index) => { 
      return <Post key={index} title={items.title} url={items.url} text={items.text} postBody={items.postBody} />
  });
    return <div>
        <h2>{this.props.titleBlog}</h2>
          <ul>
            {items}
          </ul>
       </div>;
  }
}