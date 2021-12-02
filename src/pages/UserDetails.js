import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import UserCard from '../components/UserCard/UserCard';
import MainLayout from '../layouts/MainLayout';
import { fetchOneUser } from '../store/actions/usersActions';

const UserDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data, isLoading, error } = useSelector((state) => state.usersReducer.user);

    useEffect(() => {
        dispatch(fetchOneUser(id));
    }, [id]);

    if (isLoading) return <h1>...Loading</h1>;
    if (error) return <h1>{error}</h1>;

    return (
        <MainLayout>
            <UserCard user={data} />
        </MainLayout>
    );
};

export default UserDetails;
