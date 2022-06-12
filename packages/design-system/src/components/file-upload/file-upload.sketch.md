```tsx
interface UploadProps {
  accept?: string
  maxSize?: string
  minSize?: string
  allowMultiple?: boolean
  files?: File[]
  onUpload?: (newFiles: File[]) => void
}

<Upload accept="..." maxSize="..." minSize="..." allowMultiple files={[]} onUpload={()=>{}}>
  <UploadFileDropzone>
    <UploadTrigger>Upload files</UploadTrigger>
  </UploadFileDropzone>

  <UploadError>
      <ErrorIcon/>
      <Text>There was an error uploading...</Text>
  </UploadError>

  <UploadFileList files={[...]}>
    <UploadFile>
      <FileIcon as={CustomIcon} />
      <FileName>user_photo.png</FileName>

      <FileRemoveButton onClick={()=>{}}>
        <RemoveIcon />
      </FileRemoveButton>

      <FilePreviewButton onClick={()=>{}}>
        <PreviewIcon />
      </FilePreviewButton>
    </UploadFile>
  </UploadFileList>
</Upload>
```
