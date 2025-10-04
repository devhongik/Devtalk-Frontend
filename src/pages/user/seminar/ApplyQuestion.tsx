import ApplyHeader from '../../../components/SeminarApply/ApplyHeader';
import SpeakerCard from '../../../components/SeminarApply/SpeakerCard';
import AutoResizeTextarea from '../../../components/SeminarApply/AutoResizeTextarea';
import { Button } from '../../../components/Button/Button';
import { useState } from 'react';
import ApplySuccessModal from '../../../components/Modal/ApplySuccessModal';
import ApplyAlertModal from '../../../components/Modal/ApplyAlertModal';

const ApplyQuestion = () => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const handleClickApply = () => {
    console.log('신청하기 버튼 클릭');
    setOpenSuccess(true);
    // setOpenAlert(true); -> 중복 신청 모달 용 로직 추가 필요
    // 추후 API 연동
  };

  return (
    <>
      <div className="flex flex-col gap-16 mb-[160px]">
        <ApplyHeader backTo="/seminar/apply-info" />
        <div className="flex flex-col gap-32">
          {/* 문구 */}
          <div className="flex flex-col gap-4 px-5">
            <div className="flex flex-row gap-4">
              <div className="heading-2-bold text-gradient">(선택)</div>
              <div className="heading-2-bold text-white">사전 질문란</div>
            </div>
            <div className="body-2-medium text-grey-300">
              연사님께서 질문 선별 후, Q&A 시간에 답변 드립니다.
            </div>
          </div>
          <div className="flex flex-col gap-32">
            {/* 연사 1 */}
            <div className="flex flex-col gap-16">
              <SpeakerCard />
              <AutoResizeTextarea />
            </div>
            <div className="flex justify-center">
              <hr className="text-grey-700 w-[335px]" />
            </div>
            {/* 연사 2 */}
            <div className="flex flex-col gap-16">
              <SpeakerCard />
              <AutoResizeTextarea />
            </div>
          </div>
        </div>
      </div>
      <Button
        variant="default"
        text="신청하기"
        onClick={handleClickApply}
        className="fixed bottom-[64px] left-1/2 -translate-x-1/2 z-50"
      />
      <ApplySuccessModal open={openSuccess} onClose={() => setOpenSuccess(false)} type="online" />
      {/* type = "offline" 으로 하면 오프라인 신청 완료 모달 열림 - api 연동 시 participationType에 맞게 */}
      <ApplyAlertModal open={openAlert} onClose={() => setOpenAlert(false)} />
    </>
  );
};

export default ApplyQuestion;
