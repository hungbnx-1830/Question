import {
  FETCH_POSTS

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

    default:
      return state;
  }
}
