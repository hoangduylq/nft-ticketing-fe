import { PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import React, { useState } from 'react';
import * as api from '../../api/index';

const UploadImage: React.FC = () => {
  const [url, setUrl] = useState('');

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleUpload = async (file: any): Promise<any> => {
    const formData = new FormData();
    formData.append('file', file);
    const result: any = await api.eventApi.uploadImage(formData);
    setUrl(result.url);
  };

  return (
    <Upload listType="picture-card" action={handleUpload}>
      {uploadButton}
    </Upload>
  );
};

export default UploadImage;
