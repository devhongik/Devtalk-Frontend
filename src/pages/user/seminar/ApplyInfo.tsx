import ApplyHeader from '../../../components/SeminarApply/ApplyHeader';
import { Chip } from '../../../components/Chip/Chip';
import SpeakerInfo from '../../../components/SeminarApply/SpeakerInfo';
import LiveInfo from '../../../components/SeminarApply/LiveInfo';
import ApplyForm from '../../../components/SeminarApply/ApplyForm';
import { useState, useEffect } from 'react';
import { useBlocker } from 'react-router-dom';
import ApplyExitModal from '../../../components/Modal/ApplyExitModal';
import { useApplyDraft } from '../../../stores/useApplyDraft';
import { getSeminarList } from '../../../apis/seminarList';
import { getUserSeminar } from '../../../apis/userSeminar/userSeminarApi';
import LoadingSpinner from '../../../components/common/LoadingSpinner';

const ApplyInfo = () => {
  const [exitOpen, setExitOpen] = useState(false);
  const [proceed, setProceed] = useState<null | (() => void)>(null);
  const [backTo, setBackTo] = useState('/seminar');
  const [seminarData, setSeminarData] = useState<{
    seminarId: number;
    seminarNum: number;
    topic: string;
    seminarDate: string;
    place: string;
    startDate: string;
    endDate: string;
  } | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        // 활성 세미나 찾기
        const res = await getSeminarList();
        const list = res?.result?.seminarList ?? [];
        const activeSeminar = list.find((s: any) => s.isActive);

        if (mounted && activeSeminar) {
          const seminarId = activeSeminar.seminarId;
          setBackTo(`/seminar/${seminarId}`);

          // 세미나 상세 조회 요청
          const detailRes = await getUserSeminar(seminarId);

          // 응답 데이터 result만 저장
          if (mounted && detailRes?.result) {
            setSeminarData(detailRes.result);
          }
        }
      } catch (e) {
        console.error('세미나 데이터 조회 실패:', e);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  // 페이지 이동 시 모달 창 띄우기
  const blocker = useBlocker(({ currentLocation, nextLocation }) => {
    if (
      currentLocation.pathname === '/seminar/apply-info' &&
      nextLocation.pathname !== '/seminar/apply-question'
    ) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (blocker.state === 'blocked') {
      setExitOpen(true);
      setProceed(() => blocker.proceed);
    }
  }, [blocker]);

  if (!seminarData) return <LoadingSpinner />;

  const { seminarNum, seminarDate, place } = seminarData;

  return (
    <div className="flex flex-col gap-16 justify-center items-center mb-64">
      <ApplyHeader backTo={backTo} />
      <div className="flex flex-col w-[335px] gap-80">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-32">
            <h1 className="heading-2-bold text-white">제 {seminarNum}회 Devtalk Seminar</h1>
            <div className="flex flex-col gap-48">
              {/* Outline 영역 */}
              <div className="flex flex-col gap-20">
                <Chip className="body-2-semibold" text="Outline" />
                <div className="flex flex-col gap-8">
                  <div className="flex flex-row gap-16">
                    <p className="body-1-medium text-grey-300">일시</p>
                    <p className="body-1-medium text-white">{seminarDate}</p>
                  </div>
                  <div className="flex flex-row gap-16">
                    <p className="body-1-medium text-grey-300">장소</p>
                    <p className="body-1-medium text-white">{place}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-12">
                  <SpeakerInfo />
                  <SpeakerInfo />
                </div>
              </div>

              {/* 온라인 LIVE 안내 영역 */}
              <div className="flex flex-col gap-20">
                <Chip className="body-2-semibold" text="온라인 LIVE 안내" />
                <div className="flex flex-col gap-8">
                  <div className="subhead-1-semibold text-white">
                    현장 참석이 어려운 분들을 위해
                    <br />
                    <span className="text-gradient">온라인 라이브</span>를 병행합니다!
                  </div>
                  <p className="caption-medium text-grey-300">
                    * 첫 라이브 진행으로, 진행이 원활하지 않을 수 있습니다.
                  </p>
                  <LiveInfo />
                </div>
              </div>
            </div>
          </div>
          <hr className="text-grey-700 w-full h-[1px]" />
          {/* 신청폼 부분 */}
          <ApplyForm />
        </div>
      </div>
      <ApplyExitModal
        open={exitOpen}
        onConfirm={() => {
          useApplyDraft.getState().reset();
          sessionStorage.removeItem('apply-draft');
          setExitOpen(false);
          proceed?.();
        }}
        onCancel={() => {
          setExitOpen(false);
          blocker.reset?.();
        }}
      />
    </div>
  );
};

export default ApplyInfo;
