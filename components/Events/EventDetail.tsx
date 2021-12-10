import { Form, Input, Select, Row, Col } from 'antd';
import { FormInstance } from 'antd/es/form';
import React from 'react';

const EventDetail: React.FC = () => {
  const { Option } = Select;
  const formRef = React.createRef<FormInstance>();

  const layout = {
    labelCol: { span: 4 },
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
          <Col span={14}>
            <Form.Item name="name" label="Event Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
              <Select
                placeholder="Select a option and change input text above"
                // onChange={onGenderChange}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) =>
                prevValues.gender !== currentValues.gender
              }
            >
              {({ getFieldValue }) =>
                getFieldValue('gender') === 'other' ? (
                  <Form.Item
                    name="customizeGender"
                    label="Customize Gender"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                ) : null
              }
            </Form.Item>
            {/* <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item> */}
          </Col>
          <Col span={10}></Col>
        </Row>
      </Form>
    </main>
  );
};

export default EventDetail;
