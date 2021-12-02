import { Table } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const UsersList = ({ users }) => {
    const columns = [
        {
            title: 'First name',
            dataIndex: 'first_name',
            key: 'first_name',
            render: (text, row) => <Link to={`/user/${row.id}`}>{text}</Link>,
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
