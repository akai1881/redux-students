import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { deleteUser } from '../api/user';
import UserCard from '../components/UserCard/UserCard';
import MainLayout from '../layouts/MainLayout';
import { fetchOneUser } from '../store/actions/usersActions';

const UserDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data, isLoading, error } = useSelector((state) => state.usersReducer.user);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchOneUser(id));
    }, [id]);

    const handleDeleteUser = async () => {
        try {
            await deleteUser(id);
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    };

    if (isLoading) return <h1>...Loading</h1>;
    if (error) return <h1>{error}</h1>;

    return (
        <MainLayout>
            <UserCard user={data} onDelete={handleDeleteUser} />
        </MainLayout>
    );
};

export default UserDetails;
