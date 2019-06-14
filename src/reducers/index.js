import {
  FETCH_POSTS,
  ADD_QUESTION

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
    default:
      return state;
  }
}
