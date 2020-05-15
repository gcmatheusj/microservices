import React from 'react';

const CommentList = ({ comments }) => {
  const renderedComments = comments.map(comment => {
    let content;

    if(comment.status === 'approved') {
      content = comment.content
    } else if (comment.status === 'pending') {
      content = 'This comment is awaiting moderation'
    } else {
      content = 'This comment has been reject'
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
