import { useState } from 'react';
import BackButton from '../../../components/Button/BackButton';
import { Button } from '../../../components/Button/Button';
import ReviewRating from '../../../components/Seminar/ReviewRating';
import SeminarReviewFrom from '../../../components/Seminar/SeminarReviewForm';
import emptybox from '../../../assets/icons/components/SeminarApply/emptybox.svg';
import checkbox from '../../../assets/icons/components/SeminarApply/checkbox.svg';

type ReviewValues = {
  strength: string;
  improvement: string;
  nextTopic: string;
};

const Review = () => {
  //별점
  const [rating, setRating] = useState(0);

  //리뷰
  const [values, setValues] = useState<ReviewValues>({
    strength: '',
    improvement: '',
    nextTopic: '',
  });
  const { strength, improvement, nextTopic } = values;

  //비공개 여부
  const [isPublic, setIsPublic] = useState(false);

  //모든 칸 입력 확인
  const isAllFilled =
    strength.trim() !== '' && improvement.trim() !== '' && nextTopic.trim() !== '' && rating !== 0;

  //리뷰 제출 함수
  function handleSubmit() {
    if (!isAllFilled) return;

    console.log('제출 리뷰', values);
    console.log('제출 별점', rating);
    console.log('비공개 여부', isPublic);
  }

  //작성한 리뷰 받아오는 함수
  const handleChange = (field: keyof ReviewValues, value: string): void => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="w-[375px] flex flex-col gap-28">
      {/*헤더 */}
      <header className="w-full h-[56px] py-[14px] relative flex justify-center">
        <BackButton className="absolute left-[20px]" />
        <div className="subhead-2-medium text-white">세미나 후기 남기기</div>
      </header>

      <div className="w-[375px] flex flex-col gap-48">
        {/**별점 매기기 */}
        <div className="w-[375px] h-[112px] flex flex-col gap-28 items-center justify-center">
          <div className="w-full px-20 gap-4 text-white heading-2-bold">
            세미나에 대한 후기를 남겨주세요!
          </div>
          <div className="w-full h-[50px] flex flex-row justify-center">
            <ReviewRating rating={rating} onChange={setRating} />
          </div>
        </div>

        {/**리뷰 작성 폼 */}
        <div className="w-[375px] h-[863px] flex flex-col items-center gap-40">
          <SeminarReviewFrom values={values} onChange={handleChange} />

          <div className="w-[335px] h-[169px] flex flex-col gap-32">
            {/**비공개 여부 선택 */}
            <div className="w-full h-[80px] flex flex-col gap-16">
              <div className="text-grey-100 body-2-regular">
                작성하신 후기는 홍보에 사용될 수 있어요 (익명o) <br />
                민감한 내용이 포함되었다면 비공개 요청에 체크해주세요 😊
              </div>
              <div className="w-full h-[24px] flex flex-row gap-8 px-8">
                <div className="text-white body-1-medium">비공개 요청</div>
                {!isPublic ? (
                  <img
                    src={emptybox}
                    alt=""
                    className="w-[24px] h-[24px] cursor-pointer"
                    onClick={() => setIsPublic(true)}
                  />
                ) : (
                  <img
                    src={checkbox}
                    alt=""
                    className="w-[24px] h-[24px] cursor-pointer"
                    onClick={() => setIsPublic(false)}
                  />
                )}
              </div>
            </div>

            {/**제출 버튼 */}
            <Button
              variant={!isAllFilled ? 'disabled' : 'default'}
              text="후기 제출하기"
              onClick={handleSubmit}
            />
          </div>
        </div>
        <div className="h-[100px]"></div>
      </div>
    </div>
  );
};

export default Review;
