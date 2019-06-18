import {
  FETCH_POSTS,
  ADD_QUESTION,
  UPDATE_QUESTION,
  UPDATED_QUESTION,
  DELETE_QUESTION

} from "../actions/index";

const initialState = {
  posts: [],
  search: "",
  post: ""
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
    case ADD_QUESTION:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case UPDATE_QUESTION:
      return {
        ...state,
        post: action.payload
      };
    case UPDATED_QUESTION:
      return {
        ...state,
        posts: state.posts.map(e =>
          e.id === action.payload.id ? (e = action.payload) : e
        )
      };
    case DELETE_QUESTION:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    default:
      return state;
  }
}
