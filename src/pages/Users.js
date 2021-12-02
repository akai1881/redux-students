import { conditionalExpression } from '@babel/types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from '../components/UsersList/UsersList';
import { fetchUsers } from '../store/actions/usersActions';

const users = ['Alex', 'John', 'Daniel'];

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.usersReducer.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return <UsersList users={users} />;
};

export default Users;
