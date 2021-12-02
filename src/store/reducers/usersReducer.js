import { defaultIconPrefixCls } from 'antd/lib/config-provider';
import { FETCH_USERS, FETCH_USER_ERROR, FETCH_USER_LOADING, FETCH_USER_SUCCESS } from '../consts';

const initialState = {
    users: [],
    user: {
        isLoading: false,
        error: '',
        data: {},
    },
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return { ...state, users: action.payload };

        case FETCH_USER_LOADING:
            return { ...state, user: { ...state.user, isLoading: true } };

        case FETCH_USER_SUCCESS:
            return { ...state, user: { isLoading: false, data: action.payload, error: '' } };

        case FETCH_USER_ERROR:
            return { ...state, user: { isLoading: false, data: {}, error: action.payload } };

        default:
            return state;
    }
};

export const setUsers = (payload) => ({ type: FETCH_USERS, payload });

export const setUserLoading = () => ({ type: FETCH_USER_LOADING });

export const setUserSuccess = (payload) => ({ type: FETCH_USER_SUCCESS, payload });

export const setUserError = (msg) => ({ type: FETCH_USER_ERROR, payload: msg });
