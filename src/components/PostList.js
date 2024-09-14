import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';

const PostList = ({ onSelectPost }) => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <div style={{marginLeft: 20}}>Loading posts...</div>;
  if (error) return <div style={{marginLeft: 20}}>Error: {error}</div>;

  return (
    <div className="post-list-container">
      <h2 className="list-title">Blog Posts</h2>
      <ul className="post-list">
        {posts.map((post) => (
          <li
            key={post.id}
            className="post-strip"
            onClick={() => onSelectPost(post.id)}
          >
            <h3 className="post-title">{post.title}</h3>
            <p className="post-body">{post.body.slice(0, 80)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
