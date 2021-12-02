import http from '../../service';
import { setUsers } from '../reducers/usersReducer';

export const fetchUsers = () => async (dispatch) => {
    try {
        const { data } = await http('/contact/');
        dispatch(setUsers(data));
    } catch (error) {
        console.log(error.message);
    }
};
