import { AntDesignOutlined, FieldTimeOutlined, EnvironmentFilled } from '@ant-design/icons';
import { Row, Col, Avatar, Typography } from 'antd';
import { IEventPayload } from '../../models/event.interface';

interface IEventItemProps {
  item: IEventPayload;
}

const EvenItem: React.FC<IEventItemProps> = (props) => {
  const { Title } = Typography;

  return (
    <article className="order-item">
      <Row className="order-item__header">
        <Col flex={1}>
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            src={props.item.logoUrl}
            icon={<AntDesignOutlined />}
          />
        </Col>
        <Col className="order-item__info" flex={10}>
          <Title level={2}>{props.item.name}</Title>
          <div className="order-item__info__item">
            <FieldTimeOutlined />
            <span className="order-item__info__item__description">{props.item.eventStartDate}</span>
          </div>
          <div className="order-item__info__item">
            <EnvironmentFilled />
            <span className="order-item__info__item__description">
              {`${props.item.eventPlaceName} - ${props.item.eventAddress}`}
            </span>
          </div>
        </Col>
      </Row>
    </article>
  );
};

export default EvenItem;
