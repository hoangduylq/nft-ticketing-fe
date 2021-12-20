import { FileTextOutlined, SettingOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import { Form, Row, Col, Tabs, Input, Select, DatePicker, Button, InputNumber } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import UploadImage from './UploadImage';
import * as api from '../../api/index';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectorUser } from 'app/user/userSlice';
import router from 'next/router';
import { IEventPayload } from '@/models/event.interface';
import AlertMessage, { TypeAlertEnum } from '../common/Alert/AlertMessage';
import { createEvent } from 'app/event/eventSlice';

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be greater than ${min}',
  },
};

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

interface IFormEventData {
  name: string;
  categoryId: string;
  logoUrl: string;
  bannerUrl: string;
  description: string;
  eventPlaceName: string;
  eventAddress: string;
  saleStartDate: string;
  saleEndDate: string;
  eventStartDate: string;
  eventEndDate: string;
  totalTickets: number;
  availableTickets: number;
  ticketImageUrl: string;
  ticketPrice: number;
  maxTicketOrder: number;
  minTicketOrder: number;
  organizationInfo: string;
  organizationEmail: string;
  organizationPhone: string;
  organizationAddress: string;
  bankName: string;
  cardHolderName: string;
  creditNumber: string;
  userId?: string;
}

const initState: IFormEventData = {
  name: '',
  categoryId: '',
  logoUrl: '',
  bannerUrl: '',
  description: '',
  eventPlaceName: '',
  eventAddress: '',
  saleStartDate: '',
  saleEndDate: '',
  eventStartDate: '',
  eventEndDate: '',
  totalTickets: 0,
  availableTickets: 0,
  ticketImageUrl: '',
  ticketPrice: 0,
  maxTicketOrder: 0,
  minTicketOrder: 0,
  organizationInfo: '',
  organizationEmail: '',
  organizationPhone: '',
  organizationAddress: '',
  bankName: '',
  cardHolderName: '',
  creditNumber: '',
};

const EventDetail: React.FC = () => {
  const { TabPane } = Tabs;
  const { Option } = Select;

  const user = useAppSelector(selectorUser);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const [formValues, setFormValues] = useState({
    ...initState,
  });
  const [alertMessage, setAlertMessage] = useState({ message: '', title: TypeAlertEnum.Info });
  const [isDisplayAlert, setIsDisplayAlert] = useState(false);

  useEffect(() => {
    setIsDisplayAlert(alertMessage.message ? true : false);
  }, [alertMessage]);

  useEffect(() => {
    const getBankAccount = async () => {
      const result: any = await api.userApi.findBankByUserId(user.id);
      setFormValues({
        ...formValues,
        bankName: result.name,
        cardHolderName: result.cardHolderName,
        creditNumber: result.creditNumber,
      });
    };
    getBankAccount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    form.setFieldsValue(formValues);
  }, [form, formValues]);

  const onFinish = async (values: any) => {
    const payload: IEventPayload = { ...values, userId: user.id };
    try {
      const result: any = await api.eventApi.createEvent(payload);
      dispatch(createEvent(result.id));
      setAlertMessage({ message: 'Created Event Successfully!', title: TypeAlertEnum.Success });
      router.push('/events/my-event');
    } catch (error: any) {
      setAlertMessage({ message: error.message, title: TypeAlertEnum.Error });
    }
  };

  const handleCancel = () => {
    if (confirm('Do you want cancel create event?')) {
      router.push('/');
    } else {
      return;
    }
  };

  const disabledDate = (current: any) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  };

  const handleUploadImage = (url: string, field: string) => {
    form.setFields([{ name: field, value: url }]);
  };

  return (
    <Row>
      <Col offset="16" span="8">
        {isDisplayAlert && (
          <AlertMessage message={alertMessage.message} title={alertMessage.title} />
        )}
      </Col>
      <Col span={24}>
        <main className="event-detail__content">
          <Form
            {...layout}
            form={form}
            name="form-event"
            onFinish={onFinish}
            className="event-detail__form"
            validateMessages={validateMessages}
            initialValues={formValues}
            autoComplete="on"
          >
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
                        <Form.Item name="name" label="Event name" rules={[{ required: true }]}>
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
                          name="categoryId"
                          label="Event Category"
                          rules={[{ required: true, message: 'Please select event category ' }]}
                        >
                          <Select
                            placeholder="Select event category"
                            // onChange={this.onGenderChange}
                            allowClear
                          >
                            <Option value="1ac31ea0-5131-42c3-9ca8-99767ebf0d3c">Phim ảnh</Option>
                            <Option value="c6022b20-f3ac-4477-922a-675be5b2fdb1">Điện ảnh</Option>
                            <Option value="d8dc4274-805d-47e8-8f02-e5c5848c96b4">
                              Sân khấu - điện ảnh
                            </Option>
                            <Option value="f61b0beb-1665-4a93-b9c2-44e1378f4f96">Nightlife</Option>
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
                            <Form.Item name="logoUrl" label="Logo event">
                              <UploadImage
                                onSetUrlImage={(url) => {
                                  handleUploadImage(url, 'logoUrl');
                                }}
                              />
                            </Form.Item>
                          </Col>
                          <Col span={10}>
                            <Form.Item name="bannerUrl" label="Banner event">
                              <UploadImage
                                onSetUrlImage={(url) => {
                                  handleUploadImage(url, 'bannerUrl');
                                }}
                              />
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
                              <DatePicker format="DD-MM-YYYY" disabledDate={disabledDate} />
                            </Form.Item>
                            <Form.Item
                              name="saleStartDate"
                              label="Sale start date"
                              rules={[{ required: true }]}
                            >
                              <DatePicker format="DD-MM-YYYY" disabledDate={disabledDate} />
                            </Form.Item>
                          </Col>
                          <Col offset={2} span={8}>
                            <Form.Item
                              name="eventEndDate"
                              label="Event end date"
                              rules={[{ required: true }]}
                            >
                              <DatePicker format="DD-MM-YYYY" disabledDate={disabledDate} />
                            </Form.Item>
                            <Form.Item
                              name="saleEndDate"
                              label="Sale end date"
                              rules={[{ required: true }]}
                            >
                              <DatePicker format="DD-MM-YYYY" disabledDate={disabledDate} />
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
                              rules={[
                                { required: true },
                                {
                                  type: 'number',
                                  min: 1,
                                  message: 'Please input number greater than 0',
                                },
                              ]}
                            >
                              <InputNumber className="w-100" />
                            </Form.Item>
                            <Form.Item
                              name="minTicketOrder"
                              label="Minimum ticket order"
                              rules={[
                                { required: true },
                                {
                                  type: 'number',
                                  min: 1,
                                  message: 'Please input number greater than 0',
                                },
                              ]}
                            >
                              <InputNumber className="w-100" />
                            </Form.Item>
                          </Col>
                          <Col offset={2} span={8}>
                            <Form.Item
                              name="totalTickets"
                              label="Total tickets"
                              rules={[
                                { required: true },
                                {
                                  type: 'number',
                                  min: 1,
                                  message: 'Please input number greater than 0',
                                },
                              ]}
                            >
                              <InputNumber className="w-100" />
                            </Form.Item>
                            <Form.Item
                              name="maxTicketOrder"
                              label="Maximum ticket order"
                              rules={[
                                { required: true },
                                {
                                  type: 'number',
                                  min: 1,
                                  message: 'Please input number greater than 0',
                                },
                              ]}
                            >
                              <InputNumber className="w-100" />
                            </Form.Item>
                          </Col>
                          <Col offset={8}>
                            <Form.Item name="ticketImageUrl" label="Ticket Image">
                              <UploadImage
                                onSetUrlImage={(url) => {
                                  handleUploadImage(url, 'ticketImageUrl');
                                }}
                              />
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
                    <Row>
                      <Col span={24} className="mb-10">
                        <h2 className="event-detail__heading--secondary">
                          Bank Account Information
                        </h2>
                      </Col>
                      <Col offset={6} span={12}>
                        <Form.Item name="bankName" label="Bank name" rules={[{ required: true }]}>
                          <Input readOnly />
                        </Form.Item>
                        <Form.Item
                          name="cardHolderName"
                          label="Card Holder Name"
                          rules={[{ required: true }]}
                        >
                          <Input readOnly />
                        </Form.Item>
                        <Form.Item
                          name="creditNumber"
                          label="Credit Number"
                          rules={[{ required: true }]}
                        >
                          <Input readOnly />
                        </Form.Item>

                        <Col offset={5} className="mt-40">
                          <Button size="large" className="btn btn--submit  mr-10" htmlType="submit">
                            Create Event
                          </Button>
                          <Button size="large" className="btn btn--cancel" onClick={handleCancel}>
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
      </Col>
    </Row>
  );
};

export default EventDetail;
