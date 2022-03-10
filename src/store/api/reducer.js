import { SET_DATA, SET_ERROR, SET_LOADING } from "./actions";

const initialState = {
    isError: false,
    isLoading: false,
    data: []
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA: {
            return {
                ...state,
                data: action.data
            };
        }
        case SET_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            };
        }
        case SET_ERROR: {
            return {
                ...state,
                isError: action.isError
            };
        }
        default: {
            return state;
        }
    }
}