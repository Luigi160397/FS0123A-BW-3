import { GET_JOBS, GET_POSTS } from "../actions";

const initialState = {
    jobs: []
};

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOBS:
            return {
                ...state,
                jobs: action.payload
            };
        default:
            return state;
    }
};

export default jobReducer;