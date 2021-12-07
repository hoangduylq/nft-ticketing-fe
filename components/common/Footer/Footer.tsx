import React from 'react';
import { Input, Layout } from 'antd';
import { Row, Col, Divider } from 'antd';
import {
  AndroidOutlined,
  AppleOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LaptopOutlined,
  MobileOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { Button } from 'antd/lib/radio';
export default function Footer() {
  const { Footer } = Layout;
  return (
    <Footer className="footer">
      <section className="footer__box">
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div className="form__content">
              <ul>
                <li className="form__title">Hotline</li>
                <a>
                  <a className="form__content--style" href="tel:+8419006408">
                    Hồ Chí Minh: Thứ 2 - Thứ 6 (8:30 - 18:30)
                  </a>
                  <br />
                  <strong>1900.0113</strong>
                </a>
                <br />
                <li className="form__title">Email</li>
                <a className="form__content--style">support@ticketbox.vn</a>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="form__content">
              <ul>
                <li className="form__title">Benefit</li>
                <a>Dễ dàng - Tiện lợi - Bảo mật cao</a>
                <br />
                <li className="form__title">Customer care and support center</li>
                <a className="form__content--style">
                  Hồ Chí Minh: Khu phố vạn phúc- Đường số 2 - Quận Thủ Đức
                </a>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="form__content">
              <ul>
                <li className="form__title">Guide</li>
                <a>Thao tác đơn giản</a>
                <li className="form__title">About our company</li>
                <a>Thông tin về TicketBox</a>
                <br />
                <a>TicketBox Event Landscape</a>
                <br />
                <a>Thông tin tuyển dụng</a>
                <br />
                <a>Quy chế hoạt động sàn TMĐT</a>
                <br />
                <a>Cơ chế giải quyết tranh chấp/khiếu nại</a>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="form__content">
              <ul>
                <li className="form__title">FAQ</li>
                <a>Câu hỏi thường gặp</a>
                <li className="form__title">Sign up to receive e-mail</li>
                <Input placeholder="Email" />
              </ul>
            </div>
          </Col>
        </Row>
        <Divider orientation="left"></Divider>

        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div className="form__content">
              <ul>
                <li className="form__title">TicketBox Application</li>
                <Button className="box__app">
                  <AppleOutlined />
                  <a>Available ON</a>
                  <br />
                  <p>App store</p>
                </Button>
                <Button className="box__app">
                  <AndroidOutlined />
                  <a>Android App On</a>
                  <br />
                  <p>Google play</p>
                </Button>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="form__content">
              <ul>
                <li className="form__title">Check-in Application</li>
                <Button className="box__app">
                  <LaptopOutlined />
                  <a>Desktop App</a>
                  <br />
                  <p>Multi platform</p>
                </Button>
                <Button className="box__app">
                  <MobileOutlined />
                  <a>Android App On</a>
                  <br />
                  <p>Google play</p>
                </Button>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="form__content">
              <ul>
                <li className="form__title">Follow Us</li>
                <FacebookOutlined className="icon__style" />
                <InstagramOutlined className="icon__style" />
                <YoutubeOutlined className="icon__style" />
                <TwitterOutlined className="icon__style" />
              </ul>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="form__content">
              <ul>
                <li className="form__title">Language</li>
              </ul>
            </div>
          </Col>
        </Row>
      </section>
    </Footer>
  );
}
