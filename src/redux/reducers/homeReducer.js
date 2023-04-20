import { GET_POSTS, GET_SEARCH_QUERY } from "../actions";

const initialState = {
  posts: [],
  queryResult: []
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case GET_SEARCH_QUERY:
      return {
        ...state,
        queryResult: action.payload
      }
    default:
      return state;
  }
};

export default profileReducer;
