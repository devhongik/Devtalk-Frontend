import { useNavigate } from 'react-router-dom';
import { useSeminarState } from '../../../hooks/SeminarManage/useSeminarState';

import Header from '../../../components/admin/seminar-manage/Header';
import MainContent from '../../../components/admin/seminar-manage/MainContent';
import Footer from '../../../components/admin/seminar-manage/Footer';

const Add = () => {
  const navigate = useNavigate();

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

    if (window.confirm('세미나를 추가하시겠습니까?')) {
      console.log('저장할 데이터: ', currentState);
      alert('추가되었습니다.');
      navigate('/admin/seminars');
    }
  };

  // 취소 (변경 사항이 있을 때는 사용자에게 확인을 받음)
  const handleCancel = () => {
    if (!currentState) return;

    if (isDirty && window.confirm('변경사항이 있습니다. 정말 취소하시겠습니까?')) {
      navigate(-1);
    }
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
        onCancel={handleCancel}
      />
    </div>
  );
};

export default Add;
