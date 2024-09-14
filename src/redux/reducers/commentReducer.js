const initialState = {
    comments: [],
    loading: false,
    error: null,
  };
  
  const commentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COMMENTS_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_COMMENTS_SUCCESS':
        return { ...state, loading: false, comments: action.payload };
      case 'FETCH_COMMENTS_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'ADD_COMMENT_SUCCESS':
        return { ...state, comments: [...state.comments, action.payload] };
      default:
        return state;
    }
  };
  
  export default commentReducer;