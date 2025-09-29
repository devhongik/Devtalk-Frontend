import React from 'react';
import AdminFileUpload from './AdminFileUpload';

interface AdminPresentationUploadProps {
  onUpload: (files: File[]) => void;
  onRemove: (index: number) => void;
}

// 파일 여러개 업로드를 위한 컴포넌트 (다른 컴포넌트 내부에서 사용 가능) : 10개로 지정해둠
const AdminPresentationUpload: React.FC<AdminPresentationUploadProps> = ({
  onUpload,
  onRemove,
}) => {
  return (
    <AdminFileUpload
      accept=".pdf,.ppt,.pptx,image/*"
      maxFiles={10}
      onUpload={onUpload}
      onRemove={onRemove}
    />
  );
};

export default AdminPresentationUpload;
