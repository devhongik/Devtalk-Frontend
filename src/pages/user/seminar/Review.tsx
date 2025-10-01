import Fillstar from '../../../assets/icons/components/ReviewCard/fillstar.svg?react';
import SeminarReviewInput from '../../../components/Seminar/SeminarReviewInput';

const Review = () => {
  return (
    <div className="w-[375px] h-[1023px] flex flex-col gap-48">
      <div className="w-[375px] h-[112px] flex flex-col gap-28">
        <div className="w-full px-20 gap-4 text-white heading-2-bold">
          세미나에 대한 후기를 남겨주세요!
        </div>
        <div className="w-full h-[50px] flex flex-row justify-center">
          <Fillstar className="w-[50px] h-[50px]" />
          <Fillstar className="w-[50px] h-[50px]" />
          <Fillstar className="w-[50px] h-[50px]" />
          <Fillstar className="w-[50px] h-[50px]" />
          <Fillstar className="w-[50px] h-[50px]" />
        </div>
      </div>
      <div className="w-[375px] h-[663px] flex flex-col px-20 gap-48">
        <div className="w-[335px] h-[189px] flex flex-col gap-12">
          <div className="flex flex-row gap-4">
            <div className="heading-3-semibold text-white ">세미나의 좋았던 점을 남겨주세요</div>
            <img src="src/assets/icons/components/Review/star.svg" alt="*" />
          </div>
          <SeminarReviewInput placeholder="ex. 000 부분이 유익햇어요, 진로 설계에 도움이 되었어요, ..." />
        </div>

        <div className="w-[335px] h-[189px] flex flex-col gap-12">
          <div className="heading-3-semibold text-white ">세미나의 아쉬웠던 점을 남겨주세요</div>

          <SeminarReviewInput placeholder="ex. 강의실이 추웠어요, 주제가 어려웠어요, ..." />
        </div>

        <div className="w-[335px] h-[189px] flex flex-col gap-12">
          <div className="heading-3-semibold text-white ">
            다음 회차에서 듣고 싶은 주제가 있나요?
          </div>

          <SeminarReviewInput placeholder="ex. 인공지능, 보안, 게임, 커리어, 이력서, ..." />
        </div>
      </div>
    </div>
  );
};

export default Review;
