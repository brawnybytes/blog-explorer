import React from 'react';
import { useSelector } from 'react-redux';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const PostDetail = ({ postId }) => {
  const post = useSelector((state) =>
    state.posts.posts.find((p) => p.id === postId)
  );

  if (!post) return <div>No post selected</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <CommentList postId={postId} />
      <CommentForm postId={postId} />
    </div>
  );
};

export default PostDetail;