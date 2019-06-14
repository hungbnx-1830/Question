export const FETCH_POSTS = "FETCH_POSTS";
export const ADD_QUESTION = "ADD_QUESTION";

export function fetchPosts(payload) {
  return { type: FETCH_POSTS, payload };
}

export function addQuestion(payload) {
  return { type: ADD_QUESTION, payload };
}
