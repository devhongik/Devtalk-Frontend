import React from 'react';
import AdminFileUpload from './AdminFileUpload';

interface AdminImageUploadProps {
  title: string;
  onUpload: (files: File[]) => void;
  onRemove: (index: number) => void;
}

// 1개짜리 이미지 업로드를 위한 컴포넌트(고정 크기 박스 감싸져있고, 제목 받아와야 함)
const AdminImageUpload: React.FC<AdminImageUploadProps> = ({ title, onUpload, onRemove }) => {
  return (
    <div className="w-full max-w-[1030px] min-w-[650px] mx-auto bg-grey-900 p-6 rounded-10 space-y-4">
      <h2 className="heading-2-bold text-white mb-24">{title}</h2>
      <AdminFileUpload accept="image/*" maxFiles={1} onUpload={onUpload} onRemove={onRemove} />
    </div>
  );
};

export default AdminImageUpload;
