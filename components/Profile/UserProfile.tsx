import { MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, DatePicker, Form, Input, Row, Space } from 'antd';
import React from 'react';
import { Radio } from 'antd';

const UserProfile: React.FC = () => {
  const [value, setValue] = React.useState(1);

  const onChange = (e: any) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

  return (
    <Row justify="center">
      <Col span="12">
        <section className="profile-box">
          <Space align="center" direction="vertical" className="profile-box__header">
            <h1>My Profile </h1>
            <Avatar size={150} icon={<UserOutlined />} />
          </Space>

          <Form
            name="basic"
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            className="form"
            scrollToFirstError={true}
          >
            <p>FullName</p>
            <Form.Item name="name" className="form__item">
              <Input
                size="large"
                placeholder="Fullname"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <p>Email</p>
            <Form.Item name="email" className="form__item">
              <Input
                size="large"
                placeholder="example@gmail.com"
                prefix={<MailOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <p>Phone</p>
            <Form.Item name="number" className="form__item">
              <Input size="large" prefix={<PhoneOutlined className="site-form-item-icon" />} />
            </Form.Item>
            <p>Birthday</p>
            <Form.Item name="birthday" className="form__item">
              <DatePicker size="large" format={dateFormatList} />
            </Form.Item>
            <p>Gender</p>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>
                <span>Male</span>
              </Radio>
              <Radio value={2}>
                <span>Female</span>
              </Radio>
              <Radio value={3}>
                <span>Orther</span>
              </Radio>
            </Radio.Group>
            <Button type="primary" htmlType="submit" size="large" className="form__btn--change">
              Update
            </Button>
          </Form>
        </section>
      </Col>
    </Row>
  );
};

export default UserProfile;
