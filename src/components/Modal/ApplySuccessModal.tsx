import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ApplySuccessModalProps {
  open: boolean;
  onClose: () => void;
  type: 'online' | 'offline';
}

const ApplySuccessModal: React.FC<ApplySuccessModalProps> = ({ open, onClose, type }) => {
  const navigate = useNavigate();
  if (!open) return null;

  const message =
    type === 'online'
      ? '온라인 접속 링크는 행사 전날 메일로 안내되며, \n당일 오프라인 참여로 전환 가능합니다 😊'
      : '즐겁고 유익한 시간이 되실 수 있도록 \n열심히 준비하겠습니다 😊';

  const handleClose = () => {
    onClose(); // 상태 정리
    navigate('/seminar/:id');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative bg-grey-700 rounded-12 shadow-lg w-[343px] z-10 text-center">
        <div className="text-white subhead-1-semibold mt-40 mb-8">신청이 완료되었습니다.</div>
        <p className="text-grey-300 body-1-medium mb-28 whitespace-pre-line">{message}</p>

        <div className="border-t border-grey-500"></div>
        <button
          onClick={handleClose}
          className="w-full py-20 text-gradient subhead-1-semibold rounded-12 cursor-pointer"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default ApplySuccessModal;
