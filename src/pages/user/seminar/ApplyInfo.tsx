import ApplyHeader from '../../../components/SeminarApply/ApplyHeader';
import { Chip } from '../../../components/Chip/Chip';

const ApplyInfo = () => {
  return (
    <>
      <ApplyHeader backTo="/seminar/:id" />
      <div className="flex flex-col gap-48">
        {/* Outline 영역 */}
        <Chip text="Outline" />
        {/* 온라인 LIVE 안내 영역 */}
        <Chip text="온라인 LIVE 안내" />
      </div>
    </>
  );
};

export default ApplyInfo;
