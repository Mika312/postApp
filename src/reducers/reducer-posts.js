import { ACTION_TYPES_POSTS } from "../actions/action-types";

export default function reducerPosts(state = [], action) {
  switch (action.type) {
    case ACTION_TYPES_POSTS.READ_ALL:
      return action.payload;
    case ACTION_TYPES_POSTS.DELETE:
      return state.filter((post) => {
        if (post.id === action.payload) {
          return false;
        } else {
          return true;
        }
      });
    case ACTION_TYPES_POSTS.CREATE:
      return [...state, action.payload];
  }
  return state;
}
