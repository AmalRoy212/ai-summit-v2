import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import type { UploadProps } from 'antd/lib/upload/interface';

const props: UploadProps = {
  name: 'file',
  headers: {
    authorization: 'authorization-text',
  },
  accept: 'image/png, image/jpeg', // Accepts only PNG and JPEG images
  onChange(info) {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  progress: {
    strokeColor: {
      '0%': '#108ee9',
      '100%': '#87d068',
    },
    strokeWidth: 3,
    format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
  },
  customRequest(options: any) {
    const { file, onSuccess, onError, onProgress } = options;
    
    const formData = new FormData();
    formData.append('file', file as Blob); // Ensure the field name matches your backend expectation

    fetch('/api/upload', {
      method: 'POST',
      headers: {
        'Authorization': 'authorization-text',
      },
      body: formData
    }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok.');
      }
    }).then(data => {
      onSuccess(data, file);
    }).catch(error => {
      onError(error);
    });

    const config = {
      onUploadProgress: (event: ProgressEvent) => {
        if (event.lengthComputable) {
          onProgress({ percent: (event.loaded / event.total) * 100 });
        }
      }
    };

    // Fetch does not natively support progress updates; this is a mock and you might need additional libraries like Axios for real progress feedback.
  }
};

const App: React.FC = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
);

export default App;
