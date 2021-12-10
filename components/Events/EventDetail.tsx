import { Form, Input, Row, Col, DatePicker } from 'antd';
import { FormInstance } from 'antd/es/form';
import React from 'react';

const EventDetail: React.FC = () => {
  const formRef = React.createRef<FormInstance>();

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <main className="event-detail__content">
      <Form {...layout} ref={formRef} name="control-ref" onFinish={onFinish}>
        <Row>
          <Col span={24}>
            <h1 className="event-detail__heading">Event Information</h1>
          </Col>
          <Col span={12} offset={2}>
            <Form.Item name="name" label="Event name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="eventPlaceName" label="Event place name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="eventPlaceAddress"
              label="Event place address"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="ticketPrice!" label="Ticket Price" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="maxTicketOrder" label="Max ticket order" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="minTicketOrder" label="Min ticket order" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="organizationInfo"
              label="Organization Info"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="organizationEmail"
              label="Organization Email"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="organizationPhone"
              label="Organization Phone"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="organizationAddress"
              label="Organization Address"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item name="saleStartDate" label="Sale Start Date" rules={[{ required: true }]}>
              <DatePicker />
            </Form.Item>
            <Form.Item name="saleEndDate" label="Sale End Date" rules={[{ required: true }]}>
              <DatePicker />
            </Form.Item>
            <Form.Item name="eventStartDate" label="Event Start Date" rules={[{ required: true }]}>
              <DatePicker />
            </Form.Item>
            <Form.Item name="eventEndDate" label="Event End Date" rules={[{ required: true }]}>
              <DatePicker />
            </Form.Item>
            {/* <Form.Item name="logoUrl" label="Logo Event">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Form.Item> */}
          </Col>
        </Row>
      </Form>
    </main>
  );
};

export default EventDetail;
