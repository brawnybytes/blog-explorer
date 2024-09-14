import { client } from '../../index';
import { GET_COMMENTS, ADD_COMMENT } from '../../graphql/queries';

export const fetchComments = (postId) => async (dispatch) => {
  dispatch({ type: 'FETCH_COMMENTS_REQUEST' });
  try {
    const { data } = await client.query({
      query: GET_COMMENTS,
      variables: { postId },
    });
    dispatch({ type: 'FETCH_COMMENTS_SUCCESS', payload: data.post.comments.data });
  } catch (error) {
    dispatch({ type: 'FETCH_COMMENTS_FAILURE', payload: error.message });
  }
};

export const addComment = (input) => async (dispatch) => {
  try {
    const { name, email, body } = input;
    const { data } = await client.mutate({
      mutation: ADD_COMMENT,
      variables: { input: { name, email, body } },
    });
    dispatch({ type: 'ADD_COMMENT_SUCCESS', payload: data.createComment });
  } catch (error) {
    console.error('Error adding comment:', error);
  }
};