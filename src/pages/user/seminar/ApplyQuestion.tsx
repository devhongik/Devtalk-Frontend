import ApplyHeader from '../../../components/SeminarApply/ApplyHeader';
import SpeakerCard from '../../../components/SeminarApply/SpeakerCard';
import AutoResizeTextarea from '../../../components/SeminarApply/AutoResizeTextarea';
import { Button } from '../../../components/Button/Button';
import { useState } from 'react';
import ApplySuccessModal from '../../../components/Modal/ApplySuccessModal';
import ApplyAlertModal from '../../../components/Modal/ApplyAlertModal';
import { useApplyDraft } from '../../../stores/useApplyDraft';
import { postApplySeminar } from '../../../apis/seminarApply';
import type {
  SeminarApplyRequest,
  SeminarApplyResponse,
} from '../../../types/Applicants/seminarApply';
import { mapParticipation, mapInflowPath } from '../../../utils/mapEnums';

const SESSION_IDS = [3, 4]; // 실제 세션 ID로 교체

const ApplyQuestion = () => {
  const draft = useApplyDraft();

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // 질문 입력 시 draft에 바로 반영
  const handleChangeQuestion = (sessionId: number, value: string) => {
    draft.setQuestion(sessionId, value);
  };

  // 신청하기 버튼 클릭
  const handleClickApply = async () => {
    if (submitting) return;
    setSubmitting(true);

    const questions = SESSION_IDS.map((id) => ({
      sessionId: id,
      content: (draft.questions[id] ?? '').trim(),
    })).filter((q) => q.content.length > 0);

    // 한국어 라벨 → 백엔드 enum 매핑 (요청 직전에만)
    const participationEnum = mapParticipation(draft.participationType);
    const inflowEnum = mapInflowPath(draft.inflowPath || '');

    const body: SeminarApplyRequest = {
      studentNum: draft.studentNum,
      name: draft.name,
      grade: draft.grade, // 1~4, 기타면 0
      gradeEtc: draft.gradeEtc, // 기타면 문자열, 아니면 null
      email: draft.email,
      phone: draft.phone,
      departments: draft.departments,
      departmentEtc: draft.departmentEtc,
      participationType: participationEnum, //enum으로 전송
      inflowPath: inflowEnum, // enum으로 전송
      inflowPathEtc: draft.inflowPathEtc, // 기타 설명 (있으면)
      questions,
    };

    try {
      const res: SeminarApplyResponse = await postApplySeminar(body);
      console.log(res);
      if (res.isSuccess) {
        setOpenSuccess(true);
      } else {
        setOpenAlert(true);
      }
    } catch {
      setOpenAlert(true);
    } finally {
      setSubmitting(false);
    }
  };

  const successType = draft.participationType?.startsWith('온라인') ? 'online' : 'offline';

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
              연사님께서 질문 선별 후, Q&amp;A 시간에 답변 드립니다.
            </div>
          </div>

          {/* 연사별 질문 */}
          <div className="flex flex-col gap-32">
            {SESSION_IDS.map((id, idx) => (
              <div key={id} className="flex flex-col gap-16">
                <SpeakerCard />
                <AutoResizeTextarea
                  value={draft.questions[id] ?? ''}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    handleChangeQuestion(id, e.target.value)
                  }
                />
                {idx < SESSION_IDS.length - 1 && (
                  <div className="flex justify-center">
                    <hr className="text-grey-700 w-[335px]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Button
        variant={submitting ? 'disabled' : 'default'}
        text={submitting ? '신청 중...' : '신청하기'}
        onClick={handleClickApply}
        className="fixed bottom-[64px] left-1/2 -translate-x-1/2 z-50"
      />

      <ApplySuccessModal
        open={openSuccess}
        onClose={() => setOpenSuccess(false)}
        type={successType} // 'online' | 'offline'
      />
      <ApplyAlertModal open={openAlert} onClose={() => setOpenAlert(false)} />
    </>
  );
};

export default ApplyQuestion;
