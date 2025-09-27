import { useParams } from 'react-router-dom';
import Header from '../../../components/common/Header';
import SeminaDeailCard from '../../../components/Semina/SeminaDetailCard';
import { LectureCardSession } from '../../../components/LectureCard/LectureCardSession';
import { LectureCardMain } from '../../../components/LectureCard/LectureCardMain';
import ReviewCard from '../../../components/common/ReviewCard';
import Cta from '../../../components/common/Cta';

function SeminarDetail() {
  const { id } = useParams();
  return (
    <div>
      <div className="flex flex-col gap-32">
        <Header />
        <SeminaDeailCard id={Number(id)} />
        <div className="w-[375px] h-[2170px] flex flex-col gap-24 px-20">
          <div className="heading-3-semibold text-white">연사 소개</div>
          <div className="flex flex-col gap-10 justify-center items-center bg-black">
            <LectureCardMain />
            <LectureCardSession />

            <LectureCardMain />
            <LectureCardSession />
          </div>
        </div>
        <div className="h-[475px] gap-12 px-20 flex flex-col">
          <div className="heading-3-semi-bold tesxt-white">후기</div>
          <div className="w-[335px] h-[435px] flex flex-col gap-12">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
        <div className="h-[152px]"></div>
      </div>
      <div className="fixed bottom-0">
        <Cta />
      </div>
    </div>
  );
}

export default SeminarDetail;
