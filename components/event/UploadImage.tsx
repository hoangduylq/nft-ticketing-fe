/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import React, { useState } from 'react';
import * as api from '../../api/index';

const UploadImage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleUpload = async (file: any): Promise<any> => {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    const result: any = await api.eventApi.uploadImage(formData);
    setUrl(result.url);
    setLoading(false);
  };

  return (
    <Upload listType="picture-card" action={handleUpload}>
      {url ? '' : uploadButton}
    </Upload>
  );
};

export default UploadImage;
