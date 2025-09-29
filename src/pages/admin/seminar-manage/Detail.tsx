import { useNavigate, useParams } from 'react-router-dom';
import { useSeminarState } from '../../../hooks/SeminarManage/useSeminarState';
import { useReviewActions } from '../../../hooks/SeminarManage/useReviewActions';
import type { SeminarDetails, FormErrors } from '../../../types/SeminarManage/seminar';

import AdminImageUpload from '../../../components/admin/upload/AdminImageUpload';
import SeminarForm from '../../../components/admin/seminar-manage/SeminarDetail/SeminarForm';
import SpeakersForm from '../../../components/admin/seminar-manage/Speaker/SpeakerForm';
import ReviewList from '../../../components/admin/seminar-manage/Review/ReviewList';
import LiveLinkInput from '../../../components/admin/seminar-manage/LiveLink/LiveLinkInput';
import ActiveDateForm from '../../../components/admin/seminar-manage/ActivationDate/ActiveDateForm';

interface HeaderProps {
  onDelete: () => void;
}

// 헤더 컴포넌트
const Header: React.FC<HeaderProps> = ({ onDelete }) => (
  <header className="sticky top-0 z-20 h-[70px] mb-10 bg-background/90">
    <div className="max-w-[1030px] min-w-[850px] h-full mx-auto flex justify-between items-center">
      <h1 className="heading-1-bold text-white">세미나 상세정보 관리</h1>
      <button
        className="heading-3-semibold text-status-error hover:text-status-error/80 cursor-pointer"
        onClick={onDelete}
      >
        세미나 삭제하기
      </button>
    </div>
  </header>
);

// 메인 컴포넌트
interface MainContentProps {
  currentState: SeminarDetails;
  validationErrors: FormErrors;
  activationError: string;
  updateSeminarData: (data: Partial<SeminarDetails>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleRegisterReviewToHome: (reviewId: number) => void;
  handleUnregisterReviewFromHome: (reviewId: number) => void;
  handleDeleteReview: (reviewId: number) => void;
}

const MainContent: React.FC<MainContentProps> = ({
  currentState,
  validationErrors,
  activationError,
  updateSeminarData,
  handleBlur,
  handleRegisterReviewToHome,
  handleUnregisterReviewFromHome,
  handleDeleteReview,
}) => (
  <main className="max-w-[1030px] min-w-[850px] mx-auto space-y-10 mb-[65px]">
    <AdminImageUpload
      title="세미나 썸네일 이미지"
      onUpload={(files) => updateSeminarData({ mainImageUrl: files[0] })}
      onRemove={() => updateSeminarData({ mainImageUrl: null })}
    />

    <SeminarForm
      data={currentState}
      onChange={updateSeminarData}
      errors={validationErrors}
      onBlur={handleBlur}
    />

    <SpeakersForm
      speakers={currentState.speakers}
      onChange={(speakers) => updateSeminarData({ speakers })}
    />

    <ReviewList
      reviews={currentState.reviews}
      onRegisterToHome={handleRegisterReviewToHome}
      onUnregisterFromHome={handleUnregisterReviewFromHome}
      onDelete={handleDeleteReview}
    />

    <LiveLinkInput
      link={currentState.liveLink}
      onLinkChange={(newLink) => updateSeminarData({ liveLink: newLink })}
    />

    <ActiveDateForm
      seminarDate={currentState.seminarDate}
      applicationDate={currentState.applicationDate}
      onChange={(dateType, newDate) => updateSeminarData({ [dateType]: newDate })}
      error={activationError}
    />
  </main>
);

// 푸터 컴포넌트
interface FooterProps {
  isDirty: boolean;
  hasErrors: boolean;
  onSave: () => void;
  onCancel: () => void;
}

const Footer: React.FC<FooterProps> = ({ isDirty, hasErrors, onSave, onCancel }) => (
  <footer className="max-w-[1030px] min-w-[850px] mx-auto">
    <div className="flex justify-end gap-3 px-8">
      <button
        className="w-56 h-[68px] px-6 py-3 heading-3-semibold bg-grey-700 text-black rounded-10 hover:bg-grey-600 cursor-pointer"
        onClick={onCancel}
      >
        취소하기
      </button>
      <button
        disabled={!isDirty || hasErrors}
        className="w-56 h-[68px] px-6 py-3 heading-3-semibold bg-green-300 text-black rounded-10 
                  hover:bg-green-400 disabled:bg-grey-500 disabled:cursor-not-allowed cursor-pointer"
        onClick={onSave}
      >
        수정하기
      </button>
    </div>
  </footer>
);

// 페이지
const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const {
    initialState,
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

    if (isDirty) {
      if (window.confirm('변경사항이 있습니다. 정말 취소하시겠습니까?')) {
        navigate(-1);
      }
    } else {
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
      {/* 헤더 */}
      <Header onDelete={handleDelete} />

      {/* 메인 영역 */}
      <MainContent
        currentState={currentState}
        validationErrors={validationErrors}
        activationError={activationError}
        updateSeminarData={updateSeminarData}
        handleBlur={handleBlur}
        handleRegisterReviewToHome={handleRegisterReviewToHome}
        handleUnregisterReviewFromHome={handleUnregisterReviewFromHome}
        handleDeleteReview={handleDeleteReview}
      />

      {/* 하단 수정/취소 버튼 */}
      <Footer isDirty={isDirty} hasErrors={hasErrors} onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
};

export default Detail;
