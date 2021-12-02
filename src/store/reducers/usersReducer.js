import { defaultIconPrefixCls } from 'antd/lib/config-provider';
import { FETCH_USERS } from '../consts';

const initialState = {
    users: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return { ...state, users: action.payload };

        default:
            return state;
    }
};

export const setUsers = (payload) => ({ type: FETCH_USERS, payload });
