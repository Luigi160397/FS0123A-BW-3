import { ADD_TO_FAVOURITE, GET_JOBS, REMOVE_FROM_FAVOURITE } from "../actions";

const initialState = {
    jobs: [],
    favJobs: []
};

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOBS:
            return {
                ...state,
                jobs: action.payload
            };
        case ADD_TO_FAVOURITE:
            return {
                ...state,
                favJobs: [...state.favJobs, action.payload],
            }
        case REMOVE_FROM_FAVOURITE:
            return {
                ...state,
                favJobs: state.favJobs.filter((fav) => fav !== action.payload),
            }
        default:
            return state;
    }
};

export default jobReducer;