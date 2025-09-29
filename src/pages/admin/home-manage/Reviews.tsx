import { useState } from 'react';
import HomeReviewItem from '../../../components/admin/home/HomeReviewItem';
import type { Review } from '../../../components/admin/home/HomeReviewItem';

const Reviews = () => {
  // rank 추가한 mock 데이터 넣어둠
  const [reviews, setReviews] = useState<Review[]>([
    {
      reviewId: 1,
      rank: 1,
      score: 5,
      department: '컴퓨터공학과',
      grade: 3,
      content:
        '부전공생이라서 정규수업 외에는 실무적인 정보들을 얻기가 어려웠는데 이렇게 좋은 자리 마련해주셔서 정말 재미있고 유익했습니다.\n부전공생이라서 정규수업 외에는 실무적인 정보들을 얻기가 어려웠는데 이렇게 좋은 자리 마련해주셔서 정말 재미있고 유익했습니다.',
      nextTopic: '윤리적 AI를 위한 법안',
      isPublic: true,
      createdAt: '2025. 10. 4.(토) 오후 7:00',
    },
    {
      reviewId: 2,
      rank: 2,
      score: 4,
      department: '컴퓨터공학과',
      grade: 2,
      content: '요즘 핫한 주제로 강연을 들어서 너무 좋았습니다 !',
      nextTopic: 'AI 모델 최적화 기법',
      isPublic: true,
      createdAt: '2025. 10. 4.(토) 오후 7:00',
    },
    {
      reviewId: 3,
      rank: 3,
      score: 4,
      department: '소프트웨어학과',
      grade: 4,
      content: '궁금했던 부분들을 잘 설명해주셔서 좋았습니다. 질문 또한 잘 받아주셔서 감사했습니다',
      nextTopic: '대규모 언어 모델(LLM) 활용',
      isPublic: true,
      createdAt: '2025. 10. 4.(토) 오후 7:00',
    },
  ]);

  const updateRanks = (list: Review[]): Review[] => list.map((r, i) => ({ ...r, rank: i + 1 }));

  const moveUp = (id: number) => {
    setReviews((prev) => {
      const idx = prev.findIndex((r) => r.reviewId === id);
      if (idx > 0) {
        const newArr = [...prev];
        [newArr[idx - 1], newArr[idx]] = [newArr[idx], newArr[idx - 1]];
        return updateRanks(newArr);
      }
      return prev;
    });
  };

  const moveDown = (id: number) => {
    setReviews((prev) => {
      const idx = prev.findIndex((r) => r.reviewId === id);
      if (idx < prev.length - 1) {
        const newArr = [...prev];
        [newArr[idx], newArr[idx + 1]] = [newArr[idx + 1], newArr[idx]];
        return updateRanks(newArr);
      }
      return prev;
    });
  };

  const removeReview = (id: number) => {
    setReviews((prev) => prev.filter((r) => r.reviewId !== id));
  };

  return (
    <div className="space-y-40 ml-60 mr-60 mb-[175px]">
      <h1 className="mt-60 heading-1-bold text-white">후기 관리</h1>
      <div className="w-full max-w-[900px] min-w-[700px] mx-autorounded-10 grid grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review.reviewId} className="relative">
            <span className="absolute -top-3 -left-3 bg-grey-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm heading-1-semibold">
              {review.rank}
            </span>
            <HomeReviewItem
              key={review.reviewId}
              review={review}
              onMoveUp={moveUp}
              onMoveDown={moveDown}
              onDelete={removeReview}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
