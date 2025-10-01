import Fillstar from '../../../assets/icons/components/ReviewCard/fillstar.svg?react';
import BackButton from '../../../components/Button/BackButton';
import { Button } from '../../../components/Button/Button';
import SeminarReviewInput from '../../../components/Seminar/SeminarReviewInput';

const Review = () => {
  return (
    <div className="w-[375px] flex flex-col gap-28">
      <div className="w-full h-[56px] py-[14px] relative flex justify-center">
        <BackButton className="absolute left-[20px]" />
        <div className="subhead-2-mdeium text-white">세미나 후기 남기기</div>
      </div>
      <div className="w-[375px] flex flex-col gap-48">
        <div className="w-[375px] h-[112px] flex flex-col gap-28 items-center justify-center">
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
        <div className="w-[375px] h-[863px] flex flex-col items-center gap-40">
          <div className="h-[663px] flex flex-col px-20 gap-48 items-start">
            <div className="w-[335px] h-[189px] flex flex-col itmes-start gap-12">
              <div className="flex flex-row gap-4">
                <div className="heading-3-semibold text-white ">
                  세미나의 좋았던 점을 남겨주세요
                </div>
                <img src="src/assets/icons/components/Review/star.svg" alt="*" />
              </div>
              <SeminarReviewInput placeholder="ex. 000 부분이 유익햇어요, 진로 설계에 도움이 되었어요, ..." />
            </div>

            <div className="w-[335px] h-[189px] flex flex-col gap-12">
              <div className="heading-3-semibold text-white ">
                세미나의 아쉬웠던 점을 남겨주세요
              </div>

              <SeminarReviewInput placeholder="ex. 강의실이 추웠어요, 주제가 어려웠어요, ..." />
            </div>

            <div className="w-[335px] h-[189px] flex flex-col gap-12">
              <div className="heading-3-semibold text-white ">
                다음 회차에서 듣고 싶은 주제가 있나요?
              </div>

              <SeminarReviewInput placeholder="ex. 인공지능, 보안, 게임, 커리어, 이력서, ..." />
            </div>
          </div>
          <div className="w-[335px] h-[169px] flex flex-col gap-32">
            <div className="w-full h-[80px] flex flex-col gap-16">
              <div className="text-grey-100 body-2-regular">
                작성하신 후기는 홍보에 사용될 수 있어요 (익명o) <br />
                민감한 내용이 포함되었다면 비공개 요청에 채크해주세요 😊
              </div>
              <div className="w-full h-[24px] flex flex-row gap-8 px-8">
                <div className="text-white body-1-medium">비공개 요청</div>
                <div className="w-[24px] h-[24px] rounded-4 border border-gery-600 bg-900" />
              </div>
            </div>
            <Button variant="disabled" text="후기 제출하기" />
          </div>
        </div>
        <div className="h-[100px]"></div>
      </div>
    </div>
  );
};

export default Review;
