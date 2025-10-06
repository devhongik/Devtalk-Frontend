import React, { useState } from 'react';
import deleteIcon from '../../../assets/icons/common/delete.svg';

interface AdminPresentationUploadProps {
  onUpload: (files: File[]) => void;
  onRemove: (index: number) => void;
  maxFiles?: number;
  accept?: string;
}

const AdminPresentationUpload: React.FC<AdminPresentationUploadProps> = ({
  onUpload,
  onRemove,
  maxFiles = 10,
  accept = '.pdf,.ppt,.pptx,image/*',
}) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const fileArray = Array.from(newFiles);

    if (files.length + fileArray.length > maxFiles) {
      alert(`최대 ${maxFiles}개까지만 업로드할 수 있습니다.`);
      return;
    }

    const updated = [...files, ...fileArray];
    setFiles(updated);
    onUpload(updated);
  };

  const handleRemove = (index: number) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
    onRemove(index);
  };

  return (
    <div className="w-full mx-auto">
      {/* 업로드 박스 */}
      <div
        className="bg-grey-700 rounded-8 flex flex-col p-[73px] items-center justify-center text-center"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleFiles(e.dataTransfer.files);
        }}
      >
        <p className="text-white subhead-2-medium mb-24">
          첨부할 파일을 끌어다 놓거나, 파일 선택 버튼을 직접 선택해주세요.
        </p>
        <label className="cursor-pointer">
          <input
            type="file"
            accept={accept}
            multiple
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
          <span className="w-[175px] h-[52px] px-[50px] py-[12px] bg-green-300 text-black rounded-8 heading-3-semibold flex items-center justify-center hover:opacity-80">
            파일 선택
          </span>
        </label>
      </div>

      {/* 파일 개수 표시 */}
      <span className="flex items-center gap-1 mt-20 mb-16">
        <span className={files.length ? 'text-green-300' : 'text-grey-300'}>{files.length}개</span>
        <span className="text-grey-300"> / {maxFiles}개</span>
      </span>

      {/* 파일 정보 박스 */}
      <div className="space-y-8">
        {files.length > 0 ? (
          files.map((file, i) => (
            <div key={i} className="bg-grey-700 rounded-8 p-24 flex justify-between items-center">
              <span className="text-grey-200 subhead-2-medium">
                {file.name} [{(file.size / 1024).toFixed(0)}KB]
              </span>
              <button onClick={() => handleRemove(i)} className="cursor-pointer">
                <img src={deleteIcon} alt="삭제" />
              </button>
            </div>
          ))
        ) : (
          <span className="text-grey-200">첨부된 파일 없음</span>
        )}
      </div>
    </div>
  );
};

export default AdminPresentationUpload;
