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
  const [successType, setSuccessType] = useState<'online' | 'offline' | null>(null);

  const handleChangeQuestion = (sessionId: number, value: string) => {
    draft.setQuestion(sessionId, value);
  };

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

    const nextSuccessType: 'online' | 'offline' =
      participationEnum === 'ONLINE' ? 'online' : 'offline';
    setSuccessType(nextSuccessType);

    const body: SeminarApplyRequest = {
      studentNum: draft.studentNum,
      name: draft.name,
      grade: draft.grade,
      gradeEtc: draft.gradeEtc,
      email: draft.email,
      phone: draft.phone,
      departments: draft.departments,
      departmentEtc: draft.departmentEtc,
      participationType: participationEnum,
      inflowPath: inflowEnum,
      inflowPathEtc: draft.inflowPathEtc,
      questions,
    };

    try {
      const res: SeminarApplyResponse = await postApplySeminar(body);
      if (res.isSuccess) {
        try {
          useApplyDraft.getState().reset();
          (useApplyDraft as any).persist?.clearStorage?.();
          sessionStorage.removeItem('apply-draft');
          (useApplyDraft as any).persist?.rehydrate?.();
        } catch (err) {
          console.error('Failed to clear apply-draft:', err);
        }
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

          {/* 연사별 질문 */}
          <div className="flex flex-col">
            {SESSION_IDS.map((id, idx) => (
              <div key={id}>
                <div className="flex flex-col gap-16">
                  <SpeakerCard />
                  <AutoResizeTextarea
                    value={draft.questions[id] ?? ''}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      handleChangeQuestion(id, e.target.value)
                    }
                  />
                </div>
                {idx < SESSION_IDS.length - 1 && (
                  <hr className="border-t border-grey-700 w-[335px] mx-auto my-32" />
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
        type={successType ?? 'offline'}
      />
      <ApplyAlertModal open={openAlert} onClose={() => setOpenAlert(false)} />
    </>
  );
};

export default ApplyQuestion;
