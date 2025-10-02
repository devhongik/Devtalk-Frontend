import { useNavigate, useParams } from 'react-router-dom';
import { useSeminarState } from '../../../hooks/SeminarManage/useSeminarState';
import { useReviewActions } from '../../../hooks/SeminarManage/useReviewActions';

import Header from '../../../components/admin/seminar-manage/Header';
import MainContent from '../../../components/admin/seminar-manage/MainContent';
import Footer from '../../../components/admin/seminar-manage/Footer';

// 페이지
const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

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
  const handleDelete = () => {
    if (!currentState) return;

    if (window.confirm('해당 세미나를 정말로 삭제하시겠습니까?')) {
      console.log(`${id}번 세미나 삭제`);
      navigate(-1);
    }
  };

  // 저장
  const handleSave = () => {
    if (!currentState) return;

    if (window.confirm('변경사항들을 저장하시겠습니까?')) {
      console.log('저장할 데이터: ', currentState);

      setInitialState(currentState);

      alert('저장되었습니다.');
    }
  };

  // 취소 (변경 사항이 있을 때는 사용자에게 확인을 받음)
  const handleCancel = () => {
    if (!currentState) return;

    if (isDirty && window.confirm('변경사항이 있습니다. 정말 취소하시겠습니까?')) {
      navigate(-1);
    }
  };

  // 로딩 상태
  if (isLoading) {
    return <div className="text-white text-center p-20">데이터를 불러오는 중입니다...</div>;
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
      <Header title="세미나 상세정보 관리" showDeleteButton={true} onDelete={handleDelete} />

      <MainContent
        showReviewList={true}
        currentState={currentState}
        validationErrors={validationErrors}
        activationError={activationError}
        updateSeminarData={updateSeminarData}
        handleBlur={handleBlur}
        handleRegisterReviewToHome={handleRegisterReviewToHome}
        handleUnregisterReviewFromHome={handleUnregisterReviewFromHome}
        handleDeleteReview={handleDeleteReview}
      />

      <Footer
        saveButtonText="수정하기"
        isDirty={isDirty}
        hasErrors={hasErrors}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default Detail;
