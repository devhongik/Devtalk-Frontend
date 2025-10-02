import { useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header';
import SeminarListCard from '../../../components/Seminar/SeminarListCard';

const seminarListData = [
  {
    id: 10,
    title: '세미나 제목 영역입니다 \n 세미나 제목 영역입니다아아',
    date: '2025. 10. 04.(토)',
    time: '오후 7:00',
    location: '가나다라마바사',
    image: '/images/seminar1.png',
  },
  {
    id: 9,
    title: '두 번째 세미나 제목\n 두 번째 세미나아아아ㅏㅇ',
    date: '2025. 10. 3.(금)',
    time: '오후 5:00',
    location: '서울특별시 강남구',
    image: '/images/seminar2.png',
  },
  {
    id: 8,
    title: '세 번째 세미나 제목 \n 세번째 입니다아우와',
    date: '2025. 10. 2.(목)',
    time: '오후 2:00',
    location: '홍익대학교',
    image: '/images/seminar3.png',
  },
]; // 임시 데이터

function SeminarHome() {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/seminar/${id}`);
  };

  return (
    <div>
      <div className="flex flex-col justify-center gap-16 px-20">
        <Header />
        <div className="heading-1-bold text-white">세미나</div>
        <div className="flex flex-col gap-28 items-center ">
          {seminarListData.map((seminar) => (
            <div className="border-t border-grey-700" onClick={() => handleCardClick(seminar.id)}>
              <SeminarListCard
                key={seminar.id}
                id={seminar.id}
                title={seminar.title}
                date={seminar.date}
                time={seminar.time}
                location={seminar.location}
                image={seminar.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SeminarHome;
