import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSeminarState } from '../../../hooks/SeminarManage/detail/useSeminarState';
import { useSeminarAddActions } from '../../../hooks/SeminarManage/actions/useSeminarActions';
import { mapStateToAddRequest } from '../../../utils/seminarMapper';

import Header from '../../../components/admin/seminar-manage/Header';
import MainContent from '../../../components/admin/seminar-manage/MainContent';
import Footer from '../../../components/admin/seminar-manage/Footer';
import AdminModal from '../../../components/admin/common/AdminModal';
import LoadingSpinner from '../../../components/common/LoadingSpinner';

const Add = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    currentState,
    isDirty,
    updateSeminarData,
    updatePendingFiles,
    updateSpeakerProfile,
    hasErrors,
    validationErrors,
    activationError,
    pendingFiles,
    getError,
  } = useSeminarState(undefined);

  const { handleAddSeminar, isLoading } = useSeminarAddActions();

  const handleSave = async () => {
    if (!currentState) return;

    if (hasErrors) {
      const firstError = getError();
      alert(firstError || '입력 내용을 확인해주세요.');
      return;
    }

    try {
      const addRequest = mapStateToAddRequest(currentState);
      await handleAddSeminar(addRequest, pendingFiles);

      alert('세미나가 추가되었습니다.');
      navigate('/admin/seminars');
    } catch (error: any) {
      alert(error);
    }
  };

  const handleCancelClick = () => {
    if (isDirty) {
      setIsModalOpen(true);
    } else {
      navigate('/admin/seminars');
    }
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    navigate('/admin/seminars');
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!currentState) {
    return <div className="text-white text-center p-20">알 수 없는 오류가 발생했습니다.</div>;
  }

  return (
    <div className="p-[60px] min-h-screen">
      <Header title="세미나 추가하기" showDeleteButton={false} />

      <MainContent
        showReviewList={false}
        currentState={currentState}
        pendingFiles={pendingFiles}
        updateSeminarData={updateSeminarData}
        updatePendingFiles={updatePendingFiles}
        updateSpeakerProfile={updateSpeakerProfile}
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
