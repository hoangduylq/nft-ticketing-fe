import { Button, Layout } from 'antd';
import React from 'react';

const HeaderManager: React.FC = () => {
  return (
    <Layout>
      <div className="box-header">
        <h4>Manager User</h4>
        <p>
          Create new user or update a user existing user. You can then set their permission here to
        </p>
        <Button type="primary" shape="default" size="large">
          Add a new user
        </Button>
      </div>
    </Layout>
  );
};

export default HeaderManager;
