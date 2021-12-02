import React from 'react';
import { Card } from 'antd';

const UserCard = ({ user }) => {
    return (
        <Card>
            <p>
                Name: {user?.first_name} {user?.last_name}
            </p>
            <p>DOB: {user?.birth_date}</p>
            <p>Gender: {user?.gender}</p>
            <p>Job: {user?.job}</p>
            <p>Biography: {user?.biography}</p>
            <p>Status: {user?.is_active ? 'Enabled' : 'Disabled'}</p>
        </Card>
    );
};

export default UserCard;
