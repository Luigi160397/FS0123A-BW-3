import { GET_PROFILE, GET_PROFILES } from "../actions";

const initialState = {
  content: null,
  profiles: []
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        content: action.payload
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload
      };
    default:
      return state;
  }
};

export default profileReducer;
