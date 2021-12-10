import React from 'react';
import { Carousel, Image } from 'antd';

const CarouselComponent: React.FC = () => {
  return (
    <Carousel autoplay className="carousel-wrap">
      <div className="carousel-wrap__item">
        <Image
          src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/10/08/9101E9.jpg"
          alt="1"
          preview={false}
        />
      </div>
      <div className="carousel-wrap__item">
        <Image
          src="https://images.tkbcdn.com/1/1560/600/Upload/eventcover/2021/11/30/73EB14.jpg"
          alt="1"
          preview={false}
        />
      </div>
      <div className="carousel-wrap__item">
        <Image
          src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/11/06/12B6A3.jpg"
          alt="1"
          preview={false}
        />
      </div>
      <div className="carousel-wrap__item">
        <Image
          src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/11/16/2A6C62.jpg"
          alt="1"
          preview={false}
        />
      </div>
      <div className="carousel-wrap__item">
        <Image
          src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/12/01/078930.jpg"
          alt="1"
          preview={false}
        />
      </div>
      <div className="carousel-wrap__item">
        <Image
          src="https://images.tkbcdn.com/1/1560/600/Upload/eventcover/2020/10/20/9A27FA.jpg"
          alt="1"
          preview={false}
        />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
