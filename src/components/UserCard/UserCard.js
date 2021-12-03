import React from 'react';
import { Card } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const UserCard = ({ user, onDelete }) => {
    return (
        <Card
            actions={[<EditOutlined key="edit" />, <DeleteOutlined onClick={onDelete} key="delete" />]}
            style={{ width: 300 }}
        >
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
