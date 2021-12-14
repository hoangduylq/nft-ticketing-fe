import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const EventDescription: React.FC = () => {
  return (
    <div className="description-container">
      <Tabs size="small" type="line">
        <TabPane tab="Introduction" key="1">
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
        </TabPane>
        <TabPane tab="Information" key="2">
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
        </TabPane>
        <TabPane tab="Organization" key="3">
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default EventDescription;
