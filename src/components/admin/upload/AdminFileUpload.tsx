import React, { useState } from 'react';
import deleteIcon from '../../../assets/icons/common/delete.svg';

interface AdminFileUploadProps {
  accept?: string; // 허용 파일 형식 (ex: "image/*, .pdf")
  maxFiles?: number; // 최대 파일 개수
  onUpload: (files: File[]) => void;
  onRemove: (index: number) => void;
}

const AdminFileUpload: React.FC<AdminFileUploadProps> = ({
  accept = '*/*',
  maxFiles = 1,
  onUpload,
  onRemove,
}) => {
  const [files, setFiles] = useState<File[]>([]);

  // 파일 처리
  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const fileArray = Array.from(newFiles);

    // 파일 개수 최대인 경우 - 삭제 요청 알림
    let updatedFiles = [...files, ...fileArray];
    if (updatedFiles.length > maxFiles) {
      alert(
        `최대 ${maxFiles}개까지만 업로드할 수 있습니다. 기존 파일을 삭제한 후 다시 업로드해주세요.`
      );
      return; // 업로드 취소
    }

    setFiles(updatedFiles);
    onUpload(updatedFiles);
    // API 연동 시 수정
  };

  // 파일 삭제
  const handleRemove = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onRemove(index);
    // API 연동 시 수정
  };

  return (
    <div className="space-y-4">
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
            multiple={maxFiles > 1}
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
          <span className="w-[175px] h-[52px] px-[50px] py-[12px] bg-green-300 text-black rounded-8 heading-3-semibold flex items-center justify-center hover:opacity-80">
            파일 선택
          </span>
        </label>
      </div>

      {/* 사진 개수 표시 */}
      <span className="flex items-center gap-1 mt-20 mb-16">
        <span className={files.length ? 'text-green-300' : 'text-grey-300'}>{files.length}개</span>
        <span className="text-grey-300"> / {maxFiles}개</span>
      </span>

      {/* 파일 정보 박스 */}
      <div className="space-y-2">
        {files.length > 0 ? (
          <div className="space-y-8">
            {files.map((file, i) => (
              <div key={i} className="bg-grey-700 rounded-8 p-24 flex justify-between items-center">
                <span className="text-grey-200 subhead-2-medium">
                  {file.name} [{(file.size / 1024).toFixed(0)}KB]
                </span>
                <button onClick={() => handleRemove(i)} className="cursor-pointer">
                  <img src={deleteIcon} alt="삭제" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <span className="text-grey-200">첨부된 파일 없음</span>
        )}
      </div>
    </div>
  );
};

export default AdminFileUpload;
