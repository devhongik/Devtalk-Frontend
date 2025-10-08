import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSeminarState } from '../../../hooks/SeminarManage/useSeminarState';
import { useReviewActions } from '../../../hooks/SeminarManage/useReviewActions';

import Header from '../../../components/admin/seminar-manage/Header';
import MainContent from '../../../components/admin/seminar-manage/MainContent';
import Footer from '../../../components/admin/seminar-manage/Footer';
import AdminModal from '../../../components/admin/common/AdminModal';
import LoadingSpinner from '../../../components/common/LoadingSpinner';

// 페이지
const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

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
    isLoading,
    error,
    isDirty,
    validationErrors,
    activationError,
    updateSeminarData,
    handleBlur,
    hasErrors,
    setInitialState,
  } = useSeminarState(id);

  const { handleRegisterReviewToHome, handleUnregisterReviewFromHome, handleDeleteReview } =
    useReviewActions({
      currentState,
      updateSeminarData,
      setInitialState,
    });

  // 세미나 삭제
  const handleDeleteSeminar = () => {
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
  const handleSave = () => {
    if (!currentState) return;

    console.log('수정하기 클릭: ', currentState);
    alert('세미나가 수정되었습니다.');
    navigate('/admin/seminars');
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
  const handleConfirm = () => {
    if (modalConfig.variant === 'deleteSeminar') {
      console.log(`${id}번 세미나 삭제`);
      navigate(-1);
    } else if (modalConfig.variant === 'deleteReview' && modalConfig.reviewId !== null) {
      handleDeleteReview?.(modalConfig.reviewId);
    } else if (modalConfig.variant === 'cancel') {
      navigate(-1);
    }
  };

  const handleCloseModal = () => {
    setModalConfig({ isOpen: false, variant: null, reviewId: null });
  };

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
    <div className="p-[60px] min-h-screen">
      <Header title="세미나 상세정보 관리" showDeleteButton={true} onDelete={handleDeleteSeminar} />

      <MainContent
        showReviewList={true}
        currentState={currentState}
        validationErrors={validationErrors}
        activationError={activationError}
        updateSeminarData={updateSeminarData}
        handleBlur={handleBlur}
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
