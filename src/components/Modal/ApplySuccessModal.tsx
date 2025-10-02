import React from 'react';

interface ApplySuccessModalProps {
  open: boolean;
  onClose: () => void;
}

const ApplySuccessModal: React.FC<ApplySuccessModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* 배경 */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* 팝업 박스 */}
      <div className="relative bg-grey-700 rounded-12 shadow-lg w-[343px] z-10 text-center">
        {/* 제목 */}
        <div className="text-white subhead-1-semibold mt-40 mb-8">신청이 완료되었습니다.</div>

        {/* 메시지 */}
        <p className="text-grey-300 body-1-medium mb-28">
          즐겁고 유익한 시간이 되실 수 있도록 <br />
          열심히 준비하겠습니다 <span className="inline-block">😊</span>
        </p>

        {/* 구분선 */}
        <div className="border-t border-grey-500"></div>

        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="w-full py-20 text-gradient subhead-1-semibold rounded-12"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default ApplySuccessModal;
