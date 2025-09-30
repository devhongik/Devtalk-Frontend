import ReviewListItemCard from './ReivewItem';
import type { Review } from '../../../../types/SeminarManage/seminar';

interface ReviewListProps {
  reviews: Review[];
  onRegisterToHome?: (reviewId: number) => void;
  onUnregisterFromHome?: (reviewId: number) => void;
  onDelete?: (reviewId: number) => void;
}

const ReviewList = ({
  reviews,
  onRegisterToHome,
  onUnregisterFromHome,
  onDelete,
}: ReviewListProps) => {
  return (
    <div className="bg-grey-900 p-6 rounded-10">
      <h2 className="heading-2-bold text-white mb-6">후기 목록</h2>
      {reviews.length > 0 ? (
        <div className="grid grid-cols-2 gap-10">
          {reviews.map((review) => (
            <ReviewListItemCard
              key={review.reviewId}
              review={review}
              onRegisterToHome={onRegisterToHome}
              onUnregisterFromHome={onUnregisterFromHome}
              onDelete={onDelete}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-grey-300 py-10 ">등록된 후기가 없습니다.</div>
      )}
    </div>
  );
};

export default ReviewList;
