import type { SeminarDetails, FormErrors } from '../../../types/SeminarManage/seminar';

import AdminImageUpload from '../../../components/admin/upload/AdminImageUpload';
import SeminarForm from '../../../components/admin/seminar-manage/SeminarDetail/SeminarForm';
import SpeakersForm from '../../../components/admin/seminar-manage/Speaker/SpeakerForm';
import ReviewList from '../../../components/admin/seminar-manage/Review/ReviewList';
import LiveLinkInput from '../../../components/admin/seminar-manage/LiveLink/LiveLinkInput';
import ActiveDateForm from '../../../components/admin/seminar-manage/ActivationDate/ActiveDateForm';

interface MainContentProps {
  showReviewList: boolean;
  currentState: SeminarDetails;
  validationErrors: FormErrors;
  activationError: string;
  updateSeminarData: (data: Partial<SeminarDetails>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleRegisterReviewToHome?: (reviewId: number) => void;
  handleUnregisterReviewFromHome?: (reviewId: number) => void;
  handleDeleteReview?: (reviewId: number) => void;
}

const MainContent: React.FC<MainContentProps> = ({
  showReviewList,
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

    {showReviewList && (
      <ReviewList
        reviews={currentState.reviews}
        onRegisterToHome={handleRegisterReviewToHome}
        onUnregisterFromHome={handleUnregisterReviewFromHome}
        onDelete={handleDeleteReview}
      />
    )}

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

export default MainContent;
