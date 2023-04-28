import { GET_EXPERIENCES, GET_PROFILE, GET_PROFILES, GET_USER } from "../actions";

const initialState = {
  content: null,
  profiles: [],
  experiencies: [],
  user: null
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
    case GET_EXPERIENCES:
      return {
        ...state,
        experiencies: action.payload
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default profileReducer;
