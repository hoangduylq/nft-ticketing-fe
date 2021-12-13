import { FileTextOutlined, SettingOutlined } from '@ant-design/icons';
import { Form, Input, Row, Col, DatePicker, Tabs, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';

const EventDetail: React.FC = () => {
  const { TabPane } = Tabs;

  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <main className="event-detail__content">
      <Form {...layout} name="control-ref" onFinish={onFinish} className="event-detail__form">
        <Row>
          <Col span={24}>
            <h1 className="event-detail__heading">Event Information</h1>
          </Col>
          <Col offset={2} span={22}>
            <Tabs>
              <TabPane
                tab={
                  <span>
                    <FileTextOutlined />
                    Information
                  </span>
                }
                key="1"
              >
                <Row>
                  <Col span={10}>
                    <Form.Item name="eventName" label="Event name" rules={[{ required: true }]}>
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="eventPlaceName"
                      label="Event place name"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="eventPlaceAddress"
                      label="Event place address"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                      <TextArea
                        placeholder="Description for event"
                        autoSize={{ minRows: 3, maxRows: 5 }}
                      />
                    </Form.Item>
                  </Col>
                  <Col offset={2} span={10}>
                    <Form.Item
                      name="organizationInfo"
                      label="Organizer's Information"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="organizationEmail"
                      label="Organizer's email"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="organizationPhone"
                      label="Organizer's Phone"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="organizationAddress"
                      label="Organizer's Address"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <SettingOutlined />
                    Date, Time and Ticket
                  </span>
                }
                key="2"
              >
                <Row>
                  <Col span={24}>
                    <h2 className="event-detail__heading--secondary">Event Time </h2>
                  </Col>
                  <Col offset={4} span={6}>
                    <Form.Item
                      name="eventStartDate"
                      label="Event start date"
                      rules={[{ required: true }]}
                    >
                      <DatePicker />
                    </Form.Item>
                    <Form.Item
                      name="saleStartDate"
                      label="Sale start date"
                      rules={[{ required: true }]}
                    >
                      <DatePicker />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item
                      name="eventEndDate"
                      label="Event end date"
                      rules={[{ required: true }]}
                    >
                      <DatePicker />
                    </Form.Item>
                    <Form.Item
                      name="saleEndDate"
                      label="Sale end date"
                      rules={[{ required: true }]}
                    >
                      <DatePicker />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <h2 className="event-detail__heading--secondary">Ticket </h2>
                  </Col>
                  <Col offset={4} span={4}>
                    <Form.Item name="ticketPrice" label="Ticket Price" rules={[{ required: true }]}>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col offset={2} span={4}>
                    <Form.Item
                      name="minTicketOrder"
                      label="Minimum ticket order"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col offset={2} span={4}>
                    <Form.Item
                      name="maxTicketOrder"
                      label="Maximum ticket order"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Col>
          <Col offset={20} span={4} className="event-detail__control">
            <Button size="large">Submit</Button>
            <Button size="large">Cancel</Button>
          </Col>
        </Row>
      </Form>
    </main>
  );
};

export default EventDetail;
