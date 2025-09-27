import ReviewListItemCard, { type Review } from './ReivewItem';

// mock data
const mockReviews: Review[] = [
  {
    reviewId: 1,
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
    score: 4,
    department: '컴퓨터공학과',
    grade: 2,
    content: '요즘 핫한 주제로 강연을 들어서 너무 좋았습니다 !',
    nextTopic: 'AI 모델 최적화 기법',
    isPublic: false,
    createdAt: '2025. 10. 4.(토) 오후 7:00',
  },
  {
    reviewId: 3,
    score: 4,
    department: '소프트웨어학과',
    grade: 4,
    content: '궁금했던 부분들을 잘 설명해주셔서 좋았습니다. 질문 또한 잘 받아주셔서 감사했습니다',
    nextTopic: '대규모 언어 모델(LLM) 활용',
    isPublic: true,
    createdAt: '2025. 10. 4.(토) 오후 7:00',
  },
];

const ReviewList = () => {
  const reviews = mockReviews;

  return (
    <div className="bg-grey-900 p-6 rounded-10">
      <h2 className="heading-2-bold text-white mb-6">후기 목록</h2>
      {reviews.length > 0 ? (
        <div className="grid grid-cols-2 gap-10">
          {reviews.map((review) => (
            <ReviewListItemCard key={review.reviewId} review={review} />
          ))}
        </div>
      ) : (
        <div className="text-center text-grey-300 py-10 ">등록된 후기가 없습니다.</div>
      )}
    </div>
  );
};

export default ReviewList;
