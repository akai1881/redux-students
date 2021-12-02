import { Table } from 'antd';
import React from 'react';

const UsersList = ({ users }) => {
    const columns = [
        {
            title: 'First name',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'Last Name',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'Job',
            dataIndex: 'job',
            key: 'job',
        },
    ];

    return <Table dataSource={users} rowKey="id" columns={columns} pagination={false} />;
};

export default UsersList;
