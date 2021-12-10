import {
  EditOutlined,
  AppstoreAddOutlined,
  SearchOutlined,
  ArrowRightOutlined,
  FieldNumberOutlined,
} from '@ant-design/icons';
import { Button, Form, Input, Modal, Select } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';

// export interface ICategory {
//   id: string;
//   name: string;
// }

// interface ICreateEventProps {
//   listCategory: ICategory[];
// }

const CreateEvent: React.FC = () => {
  const { Option } = Select;
  const router = useRouter();

  const [visible, setVisible] = React.useState(true);

  const handleOk = () => {
    console.log('Clicked handle button');
    setVisible(false);
    router.push('/events/sfsfs');
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Modal
      title="Create Event"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      className="modal__heading"
      footer={[
        <Button
          key="back"
          onClick={handleCancel}
          danger
          type="default"
          size="large"
          className="modal__btn modal__btn--cancel"
        >
          Cancel
        </Button>,
        <Button
          key="submit"
          type="default"
          onClick={handleOk}
          className="modal__btn modal__btn--submit"
          size="large"
        >
          Create Event <ArrowRightOutlined className="site-form-item-icon" />
        </Button>,
      ]}
    >
      <Form
        name="create-event"
        className="form__create-event"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item name="name" rules={[{ required: true, message: 'Please input event name!' }]}>
          <Input
            prefix={<EditOutlined className="site-form-item-icon" />}
            placeholder="Event name"
          />
        </Form.Item>
        <Form.Item
          name="eventPlaceName"
          rules={[{ required: true, message: 'Please input event place name!' }]}
        >
          <Input
            prefix={<AppstoreAddOutlined className="site-form-item-icon" />}
            placeholder="Event place name"
          />
        </Form.Item>
        <Form.Item
          name="eventAddress"
          rules={[{ required: true, message: 'Please input event place address!' }]}
        >
          <Input
            prefix={<SearchOutlined className="site-form-item-icon" />}
            placeholder="Event place address"
          />
        </Form.Item>
        <Form.Item
          name="totalTickets"
          rules={[{ required: true, message: 'Please input number of ticket!' }]}
        >
          <Input
            prefix={<FieldNumberOutlined className="site-form-item-icon" />}
            placeholder="NUmber of ticket"
          />
        </Form.Item>
        <Form.Item
          name="eventCategory"
          rules={[{ required: true, message: 'Please select event category ' }]}
        >
          <Select
            placeholder="Select event category"
            // onChange={this.onGenderChange}
            allowClear
          >
            {/* {props.listCategory.map((category) => (
              <Option value={category.id} key={category.id}>
                {category.name}
              </Option>
            ))} */}

            <Option value="1">Phim ảnh</Option>
            <Option value="2">Điện ảnh</Option>
            <Option value="3">Sân khấu - điện ảnh</Option>
            <Option value="4">Nightlife</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateEvent;
