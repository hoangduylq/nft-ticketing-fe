import { FileTextOutlined, MoneyCollectOutlined, SettingOutlined } from '@ant-design/icons';
import { Form, Input, Row, Col, DatePicker, Tabs, Button, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import UploadImage from './UploadImage';

const EventDetail: React.FC = () => {
  const { TabPane } = Tabs;
  const { Option } = Select;

  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <main className="event-detail__content">
        <Form {...layout} name="form-event" onFinish={onFinish} className="event-detail__form">
          <Row>
            <Col span={24}>
              <h1 className="event-detail__heading">Event Information</h1>
            </Col>
            <Col offset={2} span={20}>
              <Tabs>
                <TabPane
                  tab={
                    <span className="tab__title">
                      <FileTextOutlined />
                      Information
                    </span>
                  }
                  key="1"
                >
                  <Row>
                    <Col span={24} className="mb-10">
                      <h2 className="event-detail__heading--secondary">Event Information</h2>
                    </Col>
                    <Col offset={2} span={9}>
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
                      <Form.Item
                        name="eventCategory"
                        label="Event Category"
                        rules={[{ required: true, message: 'Please select event category ' }]}
                      >
                        <Select
                          placeholder="Select event category"
                          // onChange={this.onGenderChange}
                          allowClear
                        >
                          <Option value="1">Phim ảnh</Option>
                          <Option value="2">Điện ảnh</Option>
                          <Option value="3">Sân khấu - điện ảnh</Option>
                          <Option value="4">Nightlife</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        name="description"
                        label="Description"
                        rules={[{ required: true }]}
                      >
                        <TextArea
                          placeholder="Description for event"
                          autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                      </Form.Item>
                    </Col>
                    <Col offset={2} span={9}>
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
                      <Row>
                        <Col span={10}>
                          <Form.Item name="logoUrl" label="Logo event" rules={[{ required: true }]}>
                            <UploadImage />
                          </Form.Item>
                        </Col>
                        <Col span={10}>
                          <Form.Item
                            name="bannerUrl"
                            label="Banner event"
                            rules={[{ required: true }]}
                          >
                            <UploadImage />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane
                  tab={
                    <span className="tab__title">
                      <SettingOutlined />
                      Date, Time and Ticket
                    </span>
                  }
                  key="2"
                >
                  <Row>
                    <Col span={12}>
                      <Col span={24}>
                        <h2 className="event-detail__heading--secondary">Event Time </h2>
                      </Col>
                      <Row>
                        <Col offset={2} span={8}>
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
                        <Col offset={2} span={8}>
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
                    </Col>
                    <Col span={12}>
                      <Col span={24}>
                        <h2 className="event-detail__heading--secondary">Ticket </h2>
                      </Col>
                      <Row>
                        <Col offset={2} span={8}>
                          <Form.Item
                            name="ticketPrice"
                            label="Ticket Price"
                            rules={[{ required: true }]}
                          >
                            <Input />
                          </Form.Item>
                          <Form.Item
                            name="minTicketOrder"
                            label="Minimum ticket order"
                            rules={[{ required: true }]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col offset={2} span={8}>
                          <Form.Item
                            name="totalTickets"
                            label="Total tickets"
                            rules={[{ required: true }]}
                          >
                            <Input />
                          </Form.Item>
                          <Form.Item
                            name="maxTicketOrder"
                            label="Maximum ticket order"
                            rules={[{ required: true }]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col offset={8}>
                          <Form.Item
                            name="ticketImageUrl"
                            label="Ticket Image"
                            rules={[{ required: true }]}
                          >
                            <UploadImage />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane
                  tab={
                    <span className="tab__title">
                      <MoneyCollectOutlined /> Bank Account
                    </span>
                  }
                  key="3"
                >
                  <Row className="bank__containt">
                    <Col span={24} className="mb-10">
                      <h2 className="event-detail__heading--secondary">Bank Account Information</h2>
                    </Col>
                    <Col offset={6} span={12}>
                      <Form.Item name="name" label="Bank name" rules={[{ required: true }]}>
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="cardHolderName"
                        label="Card Holder Name"
                        rules={[{ required: true }]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="creditNumber"
                        label="Credit Number"
                        rules={[{ required: true }]}
                      >
                        <Input />
                      </Form.Item>

                      <Col offset={5} className="mt-40">
                        <Button size="large" className="btn btn--submit  mr-10" htmlType="submit">
                          Create Event
                        </Button>
                        <Button size="large" className="btn btn--cancel">
                          Cancel
                        </Button>
                      </Col>
                    </Col>
                  </Row>
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Form>
      </main>
    </div>
  );
};

export default EventDetail;
