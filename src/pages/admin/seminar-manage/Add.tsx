import { useNavigate } from 'react-router-dom';
import { useSeminarState } from '../../../hooks/SeminarManage/useSeminarState';

import Header from '../../../components/admin/seminar-manage/Header';
import MainContent from '../../../components/admin/seminar-manage/MainContent';
import Footer from '../../../components/admin/seminar-manage/Footer';
import { useState } from 'react';
import AdminModal from '../../../components/admin/common/AdminModal';

const Add = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // id 없이 훅을 호출하여 add 모드
  const {
    currentState,
    isDirty,
    updateSeminarData,
    handleBlur,
    hasErrors,
    validationErrors,
    activationError,
  } = useSeminarState(undefined);

  // 저장
  const handleSave = () => {
    if (!currentState) return;

    console.log('저장하기 클릭: ', currentState);
    alert('세미나가 추가되었습니다.');
    navigate('/admin/seminars');
  };

  const handleCancelClick = () => {
    if (isDirty) {
      setIsModalOpen(true);
    } else {
      navigate('/admin/seminars');
    }
  };

  const handleConfirm = () => {
    navigate('/admin/seminars');
  };

  if (!currentState) {
    return <div className="text-white text-center p-20">로딩 중입니다...</div>;
  }

  return (
    <div className="p-[60px] min-h-screen">
      <Header title="세미나 추가하기" showDeleteButton={false} />

      <MainContent
        showReviewList={false}
        currentState={currentState}
        updateSeminarData={updateSeminarData}
        handleBlur={handleBlur}
        validationErrors={validationErrors}
        activationError={activationError}
      />

      <Footer
        saveButtonText="추가하기"
        isDirty={isDirty}
        hasErrors={hasErrors}
        onSave={handleSave}
        onCancel={handleCancelClick}
      />

      <AdminModal
        isOpen={isModalOpen}
        variant="cancel"
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default Add;
