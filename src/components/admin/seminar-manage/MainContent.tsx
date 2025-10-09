import type {
  SeminarState,
  SeminarDetailState,
  FormErrors,
} from '../../../types/SeminarManage/seminar.state';
import type { ReviewData } from '../../../types/SeminarManage/seminarReview.api';

import AdminImageUpload from '../../../components/admin/upload/AdminImageUpload';
import SeminarForm from '../../../components/admin/seminar-manage/SeminarDetail/SeminarForm';
import SpeakersForm from '../../../components/admin/seminar-manage/Speaker/SpeakerForm';
import ReviewList from '../../../components/admin/seminar-manage/Review/ReviewList';
import LiveLinkInput from '../../../components/admin/seminar-manage/LiveLink/LiveLinkInput';
import ActiveDateForm from '../../../components/admin/seminar-manage/ActivationDate/ActiveDateForm';

interface MainContentProps {
  showReviewList: boolean;
  currentState: SeminarDetailState;
  reviews?: ReviewData[];
  pendingFiles: SeminarState['pendingFiles'];
  validationErrors: FormErrors;
  activationError: { seminar: string; application: string };
  updateSeminarData: (data: Partial<SeminarDetailState>) => void;
  updatePendingFiles: (files: Partial<SeminarState['pendingFiles']>) => void;
  updateSpeakerProfile: (key: number, value: File | null) => void;
  handleRegisterReviewToHome?: (reviewId: number) => void;
  handleUnregisterReviewFromHome?: (reviewId: number) => void;
  handleDeleteReview?: (reviewId: number) => void;
}

const MainContent = ({
  showReviewList,
  currentState,
  reviews,
  pendingFiles,
  validationErrors,
  activationError,
  updateSeminarData,
  updatePendingFiles,
  updateSpeakerProfile,
  handleRegisterReviewToHome,
  handleUnregisterReviewFromHome,
  handleDeleteReview,
}: MainContentProps) => (
  <main className="max-w-[1060px] min-w-[850px] space-y-10 mb-[65px]">
    <AdminImageUpload
      title="세미나 썸네일 이미지"
      serverFileName={currentState.thumbnailFileName ?? undefined}
      serverFileUrl={currentState.thumbnailUrl ?? undefined}
      serverFileCount={currentState.thumbnailUrl ? 1 : 0}
      pendingFile={pendingFiles.thumbnail ?? undefined}
      onUpload={(files) => updatePendingFiles({ thumbnail: files[0] })}
      onRemove={() => {
        updatePendingFiles({ thumbnail: null });
        updateSeminarData({ thumbnailUrl: null, thumbnailFileName: null });
      }}
    />

    <SeminarForm
      data={currentState}
      pendingFiles={pendingFiles}
      updateSeminarData={updateSeminarData}
      updatePendingFiles={updatePendingFiles}
      errors={validationErrors}
    />

    <SpeakersForm
      speakers={currentState.speakers}
      onChange={(speakers) => updateSeminarData({ speakers })}
      updateSpeakerProfile={updateSpeakerProfile}
    />

    {showReviewList && (
      <ReviewList
        reviews={reviews ?? []}
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
      seminarStartDate={currentState.seminarStartDate}
      seminarEndDate={currentState.seminarEndDate}
      applicationStartDate={currentState.applicationStartDate}
      applicationEndDate={currentState.applicationEndDate}
      onChange={(dateType, newDate) => updateSeminarData({ [dateType]: newDate })}
      seminarDateError={activationError.seminar}
      applicationDateError={activationError.application}
    />
  </main>
);

export default MainContent;
