import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/actions/commentActions';

const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment({ postId, name, email, body }));
    setName('');
    setEmail('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Comment</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br/>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br/>
      <textarea
        placeholder="Comment"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      ></textarea>
        <br/>
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;