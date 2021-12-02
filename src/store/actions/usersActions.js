import http from '../../service';
import { setUserError, setUserLoading, setUsers, setUserSuccess } from '../reducers/usersReducer';

export const fetchUsers = () => async (dispatch) => {
    try {
        const { data } = await http('/contact/');
        dispatch(setUsers(data));
    } catch (error) {
        console.log(error.message);
    }
};

export const fetchOneUser = (id) => async (dispatch) => {
    dispatch(setUserLoading());
    try {
        const { data } = await http(`/contact/${id}`);
        dispatch(setUserSuccess(data));
    } catch (error) {
        console.log(error.message);
        dispatch(setUserError(error.message));
    }
};
