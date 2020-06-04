import { ACTION_TYPES_POSTS } from "../actions/action-types";

export default function reducerActivePost(state = {}, action) {
  switch (action.type) {
    case ACTION_TYPES_POSTS.READ:
      return action.payload;
  }
  return state;
}
