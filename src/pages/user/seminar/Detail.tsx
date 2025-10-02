import { useParams } from 'react-router-dom';
import Header from '../../../components/common/Header';
import SeminarDetailCard from '../../../components/Seminar/SeminarDetailCard';
import ReviewCard from '../../../components/common/ReviewCard';
import Cta from '../../../components/common/Cta';
import SeminarDetailLectureCard from '../../../components/Seminar/SeminarDetailLectureCard';

const SeminarDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <div className="flex flex-col gap-32 bg-balck">
        <Header />
        <SeminarDetailCard id={Number(id)} />
        <div className="w-[375px] h-[2170px] flex flex-col gap-24 px-20">
          <div className="heading-3-semibold text-white">연사 소개</div>
          <div className="flex flex-col gap-10 justify-center items-center bg-black">
            <SeminarDetailLectureCard />
            <SeminarDetailLectureCard />
          </div>
        </div>
        <div className="h-[475px] gap-12 px-20 flex flex-col">
          <div className="heading-3-semibold test-white">후기</div>
          <div className="w-[335px] h-[435px] flex flex-col gap-12">
            <ReviewCard session={Number(id)} rating={4} content="재밌어요" />
            <ReviewCard session={Number(id)} rating={5} content="유익한 세미나였습니다." />
            <ReviewCard session={Number(id)} rating={3} content="좋은 정보 감사합니다." />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0">
        <Cta />
      </div>
      <div className="h-[250px]" />
    </div>
  );
};

export default SeminarDetail;
