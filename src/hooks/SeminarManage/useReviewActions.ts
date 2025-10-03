import type { SeminarDetails } from '../../types/SeminarManage/seminar';

interface UseReviewActionsProps {
  currentState: SeminarDetails | null;
  updateSeminarData: (data: Partial<SeminarDetails>) => void;
  setInitialState: (state: SeminarDetails) => void;
}

export const useReviewActions = ({
  currentState,
  updateSeminarData,
  setInitialState,
}: UseReviewActionsProps) => {
  // 후기의 홈 화면 등록 핸들러
  const handleRegisterReviewToHome = (reviewId: number) => {
    if (!currentState) return;

    const updatedReviews = currentState.reviews.map((review) =>
      review.reviewId === reviewId ? { ...review, isFeatured: true } : review
    );

    updateSeminarData({ reviews: updatedReviews });
  };

  // 후기의 홈 화면 등록 해제 핸들러
  const handleUnregisterReviewFromHome = (reviewId: number) => {
    if (!currentState) return;

    const updatedReviews = currentState.reviews.map((review) =>
      review.reviewId === reviewId ? { ...review, isFeatured: false } : review
    );

    updateSeminarData({ reviews: updatedReviews });
  };

  // 후기 삭제 핸들러
  const handleDeleteReview = (reviewId: number) => {
    if (!currentState) return;

    const updatedReviews = currentState.reviews.filter((review) => review.reviewId !== reviewId);

    // 원본 데이터도 함께 업데이트해서 수정하기 버튼이 활성화되지 않도록
    const newState = { ...currentState, reviews: updatedReviews };
    updateSeminarData({ reviews: updatedReviews });
    setInitialState(newState);

    console.log(`${reviewId}번 후기가 삭제되었습니다.`);
  };

  return {
    handleRegisterReviewToHome,
    handleUnregisterReviewFromHome,
    handleDeleteReview,
  };
};
