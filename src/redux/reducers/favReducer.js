import { ADD_FRIEND, ADD_TO_FAVOURITE, REMOVE_FRIEND, REMOVE_FROM_FAVOURITE } from "../actions";

const initialState = {
  favJobs: [],
  friends: []
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favJobs: [...state.favJobs, action.payload]
      };
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favJobs: state.favJobs.filter(fav => fav._id !== action.payload._id)
      };
    case ADD_FRIEND:
      return {
        ...state,
        friends: [...state.friends, action.payload]
      };
    case REMOVE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter(fav => fav._id !== action.payload._id)
      };
    default:
      return state;
  }
};

export default favReducer;
