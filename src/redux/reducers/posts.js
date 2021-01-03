import { FETCH_COMMENTS, FETCH_POST, FETCH_POSTS } from "../actions/posts";

const initialState = {
  items: [],
  currentPost: null,
  comments: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case FETCH_POST:
      return {
        ...state,
        currentPost: action.payload
      };
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    default:
      return state;
  }
}
