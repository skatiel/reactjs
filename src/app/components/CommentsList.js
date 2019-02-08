import React from 'react';
import axios from 'axios';
import Comment from './Comment.js';

export default class CommentsList extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      comments: []
    }
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then (response => {
      this.setState = ({comments: response.data})
    });
  }
  render () {
    if (!this.state.comments.lenght) {
      return null;
    }
    const comments = this.state.users.map ((comment, index) => {
      return <Comment key={index} {...comment}/>
    });

    return (
      <div>
        <h1>Комментарии</h1>
        {comments}
      </div>
    );
  }
}