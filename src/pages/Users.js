import { conditionalExpression } from '@babel/types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from '../components/UsersList/UsersList';
import MainLayout from '../layouts/MainLayout';
import { fetchUsers } from '../store/actions/usersActions';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.usersReducer.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <MainLayout>
            <UsersList users={users} />
        </MainLayout>
    );
};

export default Users;
