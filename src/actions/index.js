export const FETCH_POSTS = "FETCH_POSTS";

export function fetchPosts(payload) {
  return { type: FETCH_POSTS, payload };
}

