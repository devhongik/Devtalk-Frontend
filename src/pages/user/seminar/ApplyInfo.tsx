import ApplyHeader from '../../../components/SeminarApply/ApplyHeader';
import { Chip } from '../../../components/Chip/Chip';
import SpeakerInfo from '../../../components/SeminarApply/SpeakerInfo';

const ApplyInfo = () => {
  return (
    <>
      <ApplyHeader backTo="/seminar/:id" />
      <div className="flex flex-col gap-48">
        {/* Outline 영역 */}
        <div className="flex flex-col gap-20">
          <Chip text="Outline" />
          <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-16">
              <div className="body-1-medium text-grey-300">일시</div>
              <div className="body-1-medium text-white">2025. 10. 4.(토) 오후 6:30~8:30</div>
            </div>
            <div className="flex flex-row gap-16">
              <div className="body-1-medium text-grey-300">장소</div>
              <div className="body-1-medium text-white">홍익대학교 L0201</div>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <SpeakerInfo />
            <SpeakerInfo />
          </div>
        </div>

        {/* 온라인 LIVE 안내 영역 */}
        <Chip text="온라인 LIVE 안내" />
      </div>
    </>
  );
};

export default ApplyInfo;
