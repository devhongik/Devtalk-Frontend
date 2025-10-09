import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../../components/common/Header';
import SeminarDetailCard from '../../../components/Seminar/SeminarDetailCard';
import ReviewCard from '../../../components/common/ReviewCard';
import Cta from '../../../components/common/Cta';
import SeminarDetailLectureCard from '../../../components/Seminar/SeminarDetailLectureCard';
import { useIsVisible } from '../../../hooks/useIsVisible';
import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSeminarReview } from '../../../apis/seminarDetail';
import LoadingSpinner from '../../../components/common/LoadingSpinner';

const SeminarDetail = () => {
  const { id } = useParams();
  const seminarId = Number(id);
  const lectureRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);

  const lectureVisible = useIsVisible(lectureRef as React.RefObject<HTMLDivElement>);
  const secondVisible = useIsVisible(secondRef as React.RefObject<HTMLDivElement>);
  const reviewVisible = useIsVisible(reviewRef as React.RefObject<HTMLDivElement>);

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (secondVisible && secondRef.current) {
      secondRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [secondVisible]);

  const { data, isLoading } = useQuery({
    queryKey: ['seminarReview', seminarId],
    queryFn: () => getSeminarReview(seminarId),
  });

  const seminarReviews = data?.result || [];

  return (
    <div>
      <Header hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen} />
      <div className="flex flex-col gap-32 bg-black">
        <SeminarDetailCard id={seminarId} />
        <div
          ref={lectureRef}
          className={`w-[375px] flex flex-col gap-24 px-20 transition-all duration-500 ease-out transform ${
            lectureVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="heading-3-semibold text-white">연사 소개</div>
          <div className="flex flex-col gap-10 justify-center items-center bg-black ">
            <SeminarDetailLectureCard seminarId={seminarId} index={0} />

            <div ref={secondRef}>
              <SeminarDetailLectureCard seminarId={seminarId} index={1} />
            </div>
          </div>
        </div>
        <div
          ref={reviewRef}
          className={`transition-all duration-500 ease-out transform h-[475px] gap-12 px-20 flex flex-col ${
            reviewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="heading-3-semibold text-white">후기</div>
          <div className="w-[335px] h-[435px] flex flex-col gap-12">
            {isLoading && <LoadingSpinner />}
            {seminarReviews.length === 0 ? (
              //등록된 후기가 없는 경우
              <div className="body-2-medium text-grey-200">후기가 존재하지 않습니다.</div>
            ) : (
              //등록된 후기 중 최대 3개까지 표시
              seminarReviews.slice(0, 3).map((review) => (
                <div key={review.reviewId}>
                  <ReviewCard session={seminarId} rating={review.score} content={review.strength} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0">
        <Cta
          bodyText="데브톡에 빠져보세요!"
          buttonText="10회차 데브톡 신청하기"
          onClick={() => navigate('/seminar/apply-info')}
        />
      </div>
      <div className="h-[250px]" />
    </div>
  );
};

export default SeminarDetail;
