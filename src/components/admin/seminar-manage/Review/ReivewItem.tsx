import { useState, useRef, useEffect } from 'react';
import StarRating from './StarRating';
import moremenu from '../../../../assets/icons/components/ReviewCard/moremenu.svg';
import type { ReviewData } from '../../../../types/SeminarManage/seminarReview.api';
import { formatAdminDate } from '../../../../utils/formatDate';

interface ReviewListItemCardProps {
  review: ReviewData;
  onRegisterToHome?: (reviewId: number) => void;
  onUnregisterFromHome?: (reviewId: number) => void;
  onDelete?: (reviewId: number) => void;
}

const ReviewListItemCard = ({
  review,
  onRegisterToHome,
  onUnregisterFromHome,
  onDelete,
}: ReviewListItemCardProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleRegister = () => {
    setIsMenuOpen(false);
    onRegisterToHome?.(review.reviewId);
  };

  const handleUnregister = () => {
    setIsMenuOpen(false);
    onUnregisterFromHome?.(review.reviewId);
  };

  const handleDelete = () => {
    setIsMenuOpen(false);
    onDelete?.(review.reviewId);
  };

  return (
    <div className="bg-grey-700 rounded-lg px-6 py-[15px] flex flex-col justify-between min-h-[220px] border-none">
      <div>
        <div className="flex justify-between items-start mb-3">
          <StarRating rating={review.score} />
          <span
            className={`caption-semibold px-3 py-1 rounded-full ${
              review.isPublic ? 'bg-green-500/20 text-green-300' : 'bg-green-900/20 text-green-800'
            }`}
          >
            {review.isPublic ? '공개' : '비공개'}
          </span>
        </div>

        <div className="flex justify-between body-2-medium text-grey-300 mb-[6px]">
          <p>
            {review.department} {review.grade}
          </p>
          <p>{formatAdminDate(review.createdAt)}</p>
        </div>

        <p className="body-1-medium text-white whitespace-pre-line">{review.content}</p>
      </div>

      <div className="flex justify-between items-center mt-[20px]">
        <p className="text-sm text-white">
          <span className="text-grey-400">다음에 듣고 싶은 주제:</span> {review.nextTopic}
        </p>

        <div className="relative flex-shrink-0" ref={menuRef}>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={moremenu} className="cursor-pointer" />
          </button>

          {isMenuOpen && (
            <div className="absolute bottom-0 right-0 translate-y-full w-[140px] bg-grey-800 rounded-md z-10">
              <ul className="caption-semibold flex flex-col">
                {review.isPublic && (
                  <li className="border-b-2 border-black">
                    <button
                      className="w-full text-center py-[6px] hover:bg-grey-600 rounded-t-md cursor-pointer"
                      onClick={review.isFeatured ? handleUnregister : handleRegister}
                    >
                      {review.isFeatured ? '홈 화면 후기 해제' : '홈 화면 후기 등록'}
                    </button>
                  </li>
                )}

                <li className="flex-1">
                  <button
                    className={`w-full text-center py-[6px] text-status-error hover:bg-grey-600 cursor-pointer
                    ${review.isPublic ? 'rounded-b-md' : 'rounded-md'}
                    `}
                    onClick={handleDelete}
                  >
                    삭제하기
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewListItemCard;
