import { Link } from 'react-router-dom';
import SeminarCard from '../../../components/admin/SeminarManage/SeminarCard';

// mock data
const mockSeminars = [
  {
    id: 10,
    title: '제 10회 Devtalk Seminar',
    date: '2025-10-04T19:00:00',
    location: '가나다라마바사',
    topic: '아자차카타파하에이비씨디이에프지에이치아이엘엠엔오피',
  },
  {
    id: 9,
    title: '제 9회 Devtalk Seminar',
    date: '2025-10-04T19:00:00',
    location: '가나다라마바사',
    topic: '아자차카타파하에이비씨디이에프지에이치아이엘엠엔오피',
  },
  {
    id: 8,
    title: '제 8회 Devtalk Seminar',
    date: '2025-10-04T19:00:00',
    location: '가나다라마바사',
    topic: '아자차카타파하에이비씨디이에프지에이치아이엘엠엔오피',
  },
  {
    id: 7,
    title: '제 7회 Devtalk Seminar',
    date: '2025-10-04T19:00:00',
    location: '가나다라마바사',
    topic: '아자차카타파하에이비씨디이에프지에이치아이엘엠엔오피',
  },
  {
    id: 6,
    title: '제 6회 Devtalk Seminar',
    date: '2025-10-04T19:00:00',
    location: '가나다라마바사',
    topic: '아자차카타파하에이비씨디이에프지에이치아이엘엠엔오피',
  },
  {
    id: 5,
    title: '제 5회 Devtalk Seminar',
    date: '2025-10-04T19:00:00',
    location: '가나다라마바사',
    topic: '아자차카타파하에이비씨디이에프지에이치아이엘엠엔오피',
  },
  {
    id: 4,
    title: '제 4회 Devtalk Seminar',
    date: '2025-10-04T19:00:00',
    location: '가나다라마바사',
    topic: '아자차카타파하에이비씨디이에프지에이치아이엘엠엔오피',
  },
];

const Cards = () => {
  return (
    <div className="min-w-[900px] max-w-[950px] py-[60px] px-[30px]">
      {/* 헤더 */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="heading-1-bold text-white">세미나 카드 조회</h1>
        <Link className="heading-3-semibold text-green-300 cursor-pointer" to="/admin/seminars/add">
          추가하기
        </Link>
      </div>

      {/* 세미나 카드 */}
      <div className="grid grid-cols-2 gap-[25px]">
        {mockSeminars.map((seminar) => (
          <SeminarCard key={seminar.id} seminar={seminar} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
