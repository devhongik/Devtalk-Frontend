import { useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header';
import SeminarListCard from '../../../components/Seminar/SeminarListCard';
import { useQuery } from '@tanstack/react-query';
import { getSeminarList } from '../../../apis/Seminar/seminarList';
import type { SeminarListResponse } from '../../../types/SeminarManage/seminarCard.api';
import LoadingSpinner from '../../../components/common/LoadingSpinner';

function SeminarHome() {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/seminar/${id}`);
  };

  const { data, isLoading } = useQuery<SeminarListResponse>({
    queryKey: ['seminarList'],
    queryFn: getSeminarList,
  });

  const seminarList = data?.result?.seminarList || [];

  if (isLoading) {
    <LoadingSpinner />;
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center gap-16 px-20 pt-16">
        <div className="heading-1-bold text-white">세미나</div>
        <div className="flex flex-col gap-28 items-center ">
          {seminarList.map((seminar) => (
            <div
              className="border-t border-grey-700"
              onClick={() => handleCardClick(seminar.seminarNum)}
            >
              <SeminarListCard key={seminar.seminarNum} seminar={seminar} />
            </div>
          ))}
        </div>
      </div>
      <div className="h-[85px]" />
    </div>
  );
}

export default SeminarHome;
