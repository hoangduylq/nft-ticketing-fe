import { HomeOutlined, VideoCameraOutlined } from '@ant-design/icons';
import React from 'react';

const CategoryList: React.FC = () => {
  return (
    <section className="category_wrapper">
      <div className="category_list">
        <div className="category_item">
          <HomeOutlined />
          <span>Home</span>
        </div>
        <div className="category_item">
          <VideoCameraOutlined />
          <span>Movie</span>
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
