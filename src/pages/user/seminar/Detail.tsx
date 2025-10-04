import { useParams } from 'react-router-dom';
import Header from '../../../components/common/Header';
import SeminarDetailCard from '../../../components/Seminar/SeminarDetailCard';
import ReviewCard from '../../../components/common/ReviewCard';
import Cta from '../../../components/common/Cta';
import SeminarDetailLectureCard from '../../../components/Seminar/SeminarDetailLectureCard';
import { useIsVisible } from '../../../hooks/useIsVisible';
import React, { useEffect, useRef } from 'react';

const SeminarDetail = () => {
  const { id } = useParams();
  const lectureRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);

  const lectureVisible = useIsVisible(lectureRef as React.RefObject<HTMLDivElement>);
  const secondVisible = useIsVisible(secondRef as React.RefObject<HTMLDivElement>);
  const reviewVisible = useIsVisible(reviewRef as React.RefObject<HTMLDivElement>);

  useEffect(() => {
    if (secondVisible && secondRef.current) {
      secondRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [secondVisible]);

  return (
    <div>
      <div className="flex flex-col gap-32 bg-black">
        <Header />
        <SeminarDetailCard id={Number(id)} />
        <div
          ref={lectureRef}
          className={`w-[375px] h-[2170px] flex flex-col gap-24 px-20 transition-all duration-500 ease-out transform ${
            lectureVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="heading-3-semibold text-white">연사 소개</div>
          <div className="flex flex-col gap-10 justify-center items-center bg-black ">
            <SeminarDetailLectureCard />
            <div ref={secondRef}>
              <SeminarDetailLectureCard />{' '}
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
            <ReviewCard session={Number(id)} rating={4} content="재밌어요" />
            <ReviewCard session={Number(id)} rating={5} content="유익한 세미나였습니다." />
            <ReviewCard session={Number(id)} rating={3} content="좋은 정보 감사합니다." />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0">
        <Cta />
      </div>
      <div className="h-[250px]" />
    </div>
  );
};

export default SeminarDetail;
