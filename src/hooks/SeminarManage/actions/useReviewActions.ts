import {
  useDeleteSeminarReview,
  useRegisterReviewToHome,
  useUnregisterReviewFromHome,
} from '../data/useSeminarReviews';

interface UseReviewActionsProps {
  seminarId: number | undefined;
}

export const useReviewActions = ({ seminarId }: UseReviewActionsProps) => {
  const { mutate: deleteReview, isPending: isDeleting } = useDeleteSeminarReview(seminarId);
  const { mutate: registerReview, isPending: isRegistering } = useRegisterReviewToHome(seminarId);
  const { mutate: unregisterReview, isPending: isUnregistering } =
    useUnregisterReviewFromHome(seminarId);

  const isLoading = isDeleting || isRegistering || isUnregistering;

  // 후기의 홈 화면 등록 핸들러
  const handleRegisterReviewToHome = (reviewId: number) => {
    if (isRegistering) return;

    registerReview(reviewId, {
      onSuccess: () => {
        alert('후기가 홈 화면에 등록되었습니다.');
      },
      onError: (error) => {
        alert('홈 화면 등록에 실패했습니다. 다시 시도해주세요.');
        console.error(error);
      },
    });
  };

  // 후기의 홈 화면 해제 핸들러
  const handleUnregisterReviewFromHome = (reviewId: number) => {
    if (isUnregistering) return;

    unregisterReview(reviewId, {
      onSuccess: () => {
        alert('후기가 홈 화면에 해제되었습니다.');
      },
      onError: (error) => {
        alert('홈 화면 해제에 실패했습니다. 다시 시도해주세요.');
        console.error(error);
      },
    });
  };

  // 후기 삭제 핸들러
  const handleDeleteReview = (reviewId: number) => {
    if (isDeleting) return;

    deleteReview(reviewId, {
      onSuccess: () => {
        alert('후기가 삭제되었습니다.');
        console.log(`${reviewId}번 후기가 삭제되었습니다.`);
      },
      onError: (error) => {
        alert('후기 삭제에 실패했습니다. 다시 시도해주세요.');
        console.error(error);
      },
    });
  };

  return {
    handleRegisterReviewToHome,
    handleUnregisterReviewFromHome,
    handleDeleteReview,
    isLoading,
  };
};
