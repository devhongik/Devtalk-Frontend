import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSeminarState } from '../../../hooks/SeminarManage/detail/useSeminarState';
import { useReviewActions } from '../../../hooks/SeminarManage/actions/useReviewActions';
import { useSeminarUpdateActions } from '../../../hooks/SeminarManage/actions/useSeminarActions';

import Header from '../../../components/admin/seminar-manage/Header';
import MainContent from '../../../components/admin/seminar-manage/MainContent';
import Footer from '../../../components/admin/seminar-manage/Footer';
import AdminModal from '../../../components/admin/common/AdminModal';
import LoadingSpinner from '../../../components/common/LoadingSpinner';

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const seminarId = id ? parseInt(id) : undefined;

  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    variant: 'deleteSeminar' | 'deleteReview' | 'cancel' | null;
    reviewId: number | null;
  }>({
    isOpen: false,
    variant: null,
    reviewId: null,
  });

  const {
    currentState,
    reviews,
    isLoading: isSeminarLoading,
    error,
    isDirty,
    validationErrors,
    activationError,
    updateSeminarData,
    updatePendingFiles,
    updateSpeakerProfile,
    hasErrors,
    pendingFiles,
  } = useSeminarState(id);

  const {
    handleRegisterReviewToHome,
    handleUnregisterReviewFromHome,
    handleDeleteReview,
    isLoading: isReviewLoading,
  } = useReviewActions({ seminarId });

  const {
    handleUpdateSeminar,
    handleDeleteSeminar,
    isLoading: isSeminarUpdating,
  } = useSeminarUpdateActions(seminarId);

  // 세미나 삭제 모달 열기
  const handleDeleteSeminarModal = () => {
    setModalConfig({
      isOpen: true,
      variant: 'deleteSeminar',
      reviewId: null,
    });
  };

  // 후기 삭제
  const handleDeleteReviewModal = (reviewId: number) => {
    setModalConfig({
      isOpen: true,
      variant: 'deleteReview',
      reviewId,
    });
  };

  // 저장
  const handleSave = async () => {
    if (!currentState) return;

    try {
      await handleUpdateSeminar(currentState, pendingFiles);
      alert('세미나가 수정되었습니다.');
    } catch (error: any) {
      alert(error.message);
    }
  };

  // 취소
  const handleCancel = () => {
    if (!currentState) return;

    if (isDirty) {
      setModalConfig({
        isOpen: true,
        variant: 'cancel',
        reviewId: null,
      });
    } else {
      navigate(-1);
    }
  };

  // 모달에서 삭제하기 클릭 시
  const handleConfirm = async () => {
    if (modalConfig.variant === 'deleteSeminar') {
      try {
        await handleDeleteSeminar();
        navigate('/admin/seminars');
      } catch (error: any) {
        alert(error.message);
      }
    } else if (modalConfig.variant === 'deleteReview' && modalConfig.reviewId !== null) {
      handleDeleteReview?.(modalConfig.reviewId);
    } else if (modalConfig.variant === 'cancel') {
      navigate(-1);
    }
  };

  const handleCloseModal = () => {
    setModalConfig({ isOpen: false, variant: null, reviewId: null });
  };

  const isLoading = isSeminarLoading || isReviewLoading || isSeminarUpdating;

  // 로딩 상태
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // 에러 상태
  if (error) {
    return <div className="text-status-error text-center p-20">{error}</div>;
  }

  // 데이터가 없는 경우
  if (!currentState) {
    return <div className="text-white text-center p-20">세미나 정보가 없습니다.</div>;
  }

  return (
    <div className="mx-60 my-40 min-h-screen">
      <Header
        title="세미나 상세정보 관리"
        showDeleteButton={true}
        onDelete={handleDeleteSeminarModal}
      />

      <MainContent
        showReviewList={true}
        currentState={currentState}
        reviews={reviews ?? []}
        pendingFiles={pendingFiles}
        validationErrors={validationErrors}
        activationError={activationError}
        updateSeminarData={updateSeminarData}
        updatePendingFiles={updatePendingFiles}
        updateSpeakerProfile={updateSpeakerProfile}
        handleRegisterReviewToHome={handleRegisterReviewToHome}
        handleUnregisterReviewFromHome={handleUnregisterReviewFromHome}
        handleDeleteReview={handleDeleteReviewModal}
      />

      <Footer
        saveButtonText="수정하기"
        isDirty={isDirty}
        hasErrors={hasErrors}
        onSave={handleSave}
        onCancel={handleCancel}
      />

      {modalConfig.variant && (
        <AdminModal
          isOpen={modalConfig.isOpen}
          onClose={handleCloseModal}
          onConfirm={handleConfirm}
          variant={modalConfig.variant}
        />
      )}
    </div>
  );
};

export default Detail;
