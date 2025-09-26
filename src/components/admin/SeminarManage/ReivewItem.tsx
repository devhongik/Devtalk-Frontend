import { useState, useRef, useEffect } from 'react';
import StarRating from './StarRating';
import moremenu from "../../../assets/icons/components/ReviewCard/moremenu.svg"


export interface Review {
  reviewId: number;
  score: number;
  department: string;
  grade: number;
  content: string;
  nextTopic: string;
  isPublic: boolean;
}

interface ReviewListItemCardProps {
  review: Review;
}


const ReviewListItemCard: React.FC<ReviewListItemCardProps> = ({ review }) => {
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

  return (
    <div className="bg-grey-700 rounded-lg px-6 py-[15px] flex flex-col justify-between h-[220px] border-none">
      <div>
        <div className="flex justify-between items-start mb-3">
          <StarRating rating={review.score} />
          <span className={`caption-semibold px-3 py-1 rounded-full ${
            review.isPublic 
              ? 'bg-green-500/20 text-green-300' 
              : 'bg-green-900/20 text-green-800'
          }`}>
            {review.isPublic ? '공개' : '비공개'}
          </span>
        </div>
        <p className="body-2-medium text-grey-300 mb-2">{review.department} {review.grade}학년</p>
        <p className="body-1-medium text-white whitespace-pre-line line-clamp-3">{review.content}</p>
      </div>

      <div className="flex justify-between items-center mt-[20px]">
        <p className="text-sm text-white">
          <span className="text-grey-400">다음에 듣고 싶은 주제:</span> {review.nextTopic}
        </p>
        
        <div className="relative" ref={menuRef}>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
          >
            <img src={moremenu} className='cursor-pointer'/> 
          </button>

          {isMenuOpen && (
            <div className="absolute bottom-0 right-0 translate-y-full w-[140px] bg-grey-800 rounded-md z-10">
              <ul className="caption-semibold flex flex-col">
                {review.isPublic &&
                <li className='border-b-2 border-black'>
                  <button className="w-full text-center py-[6px] hover:bg-grey-600 rounded-t-md cursor-pointer">홈 화면 후기 등록</button>
                </li>
                }   

                <li className='flex-1'>
                  <button className={`w-full text-center py-[6px] text-status-error hover:bg-grey-600 cursor-pointer
                    ${review.isPublic ? "rounded-b-md" : "rounded-md"}
                    `}>삭제하기</button>
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