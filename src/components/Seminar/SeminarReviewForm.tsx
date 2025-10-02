import SeminarReviewInput from './SeminarReviewInput';

type ReviewValues = {
  strength: string;
  improvement: string;
  nextTopic: string;
};

interface ReviewFormProps {
  values: ReviewValues;
  onChange: (field: keyof ReviewValues, value: string) => void;
}
const SeminarReviewForm = ({ values, onChange }: ReviewFormProps) => {
  const { strength, improvement, nextTopic } = values;

  return (
    <div className="h-[663px] flex flex-col px-20 gap-48 items-start">
      <div className="w-[335px] h-[189px] flex flex-col itmes-start gap-12">
        <div className="flex flex-row gap-4">
          <div className="heading-3-semibold text-white ">세미나의 좋았던 점을 남겨주세요</div>
          <div className="text-[20px] font-extrabold text-gradient">*</div>
        </div>
        <SeminarReviewInput
          placeholder="ex. 000 부분이 유익햇어요, 진로 설계에 도움이 되었어요, ..."
          input={strength}
          onChange={(value) => onChange('strength', value)}
        />
      </div>

      <div className="w-[335px] h-[189px] flex flex-col gap-12">
        <div className="heading-3-semibold text-white ">세미나의 아쉬웠던 점을 남겨주세요</div>

        <SeminarReviewInput
          placeholder="ex. 강의실이 추웠어요, 주제가 어려웠어요, ..."
          input={improvement}
          onChange={(value) => onChange('improvement', value)}
        />
      </div>

      <div className="w-[335px] h-[189px] flex flex-col gap-12">
        <div className="heading-3-semibold text-white ">다음 회차에서 듣고 싶은 주제가 있나요?</div>

        <SeminarReviewInput
          placeholder="ex. 인공지능, 보안, 게임, 커리어, 이력서, ..."
          input={nextTopic}
          onChange={(value) => onChange('nextTopic', value)}
        />
      </div>
    </div>
  );
};

export default SeminarReviewForm;
