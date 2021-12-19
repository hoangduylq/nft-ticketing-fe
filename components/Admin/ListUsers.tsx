import { Table, Space } from 'antd';

import React from 'react';

const ListUsers: React.FC = () => {
  const { Column } = Table;

  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      username: 'Jim',
      role: 'Admin',
      email: 'lanbd98@gmail.com',
      fa: 'X',
      actions: 'delete',
    });
  }

  return (
    <Table dataSource={data}>
      <Column title="UserName" dataIndex="username" key="username" />
      <Column title="Role" dataIndex="role" key="role" />
      <Column title="Email" dataIndex="email" key="email" />
      <Column title="2FA" dataIndex="fa" key="fa" />
      <Column
        title="Action"
        key="action"
        render={() => (
          <Space size="middle">
            <a>Delete</a>
          </Space>
        )}
      />
    </Table>
  );
};

export default ListUsers;
