import React from 'react';
import Upload from './file-upload';

export default {
  title: 'CHAKRA/File Upload',
};

export const UploadInput = () => (
  <Upload maxW="800px" mx="auto" mt={8}>
    <Upload.TitleGroup>
      <Upload.Icon />
      <Upload.Title>Upload or drop your files here</Upload.Title>
    </Upload.TitleGroup>
    <Upload.Text>Maximum 2MB support JPG and PNG format</Upload.Text>
  </Upload>
);
