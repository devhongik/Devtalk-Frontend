import { useParams } from 'react-router-dom';
import ApplicantsQuestionList from './../../../../components/admin/applicants/ApplicantsQuestionList';
import BackButton from './../../../../components/Button/BackButton';
import ExcelDownloadButton from './../../../../components/Button/ExcelDownloadButton';

const Questions = () => {
  const { id } = useParams<{ id: string }>();

  // mockdata
  const getMockQuestionsBySeminarId = (seminarId: string) => {
    const mockData: { [key: string]: any } = {
      '10': {
        seminarTitle: '제 10회 Devtalk Seminar',
        speakers: {
          speaker1: '김00',
          speaker2: '박00'
        },
        applicants: [
          {
            id: 1,
            studentId: 'C11111',
            name: '홍길동',
            contact: '010-1234-5678',
            question1: '개발자로서 가장 중요하게 생각하는 덕목은 무엇인가요?',
            question2: '현재 사용하고 계신 기술 스택 중 가장 만족스러운 것은 무엇인가요?현재 사용하고 계신 기술 스택 중 가장 만족스러운 것은 무엇인가요?현재 사용하고 계신 기술 스택 중 가장 만족스러운 것은 무엇인가요?현재 사용하고 계신 기술 스택 중 가장 만족스러운 것은 무엇인가요?현재 사용하고 계신 기술 스택 중 가장 만족스러운 것은 무엇인가요?',
          },
          {
            id: 2,
            studentId: 'C22222',
            name: '김영희',
            contact: '010-2345-6789',
            question1: '프론트엔드 개발에서 가장 어려운 부분은 무엇인가요?',
            question2: '개발자로서의 성장을 위해 어떤 노력을 하고 계신가요?',
          },
        ]
      },
      '9': {
        seminarTitle: '제 9회 Devtalk Seminar',
        speakers: {
          speaker1: '이oo',
          speaker2: '최oo'
        },
        applicants: [
          {
            id: 1,
            studentId: 'C11111',
            name: '홍길동',
            contact: '010-1234-5678',
            question1: '개발자로서 가장 중요하게 생각하는 덕목은 무엇인가요?',
            question2: '현재 사용하고 계신 기술 스택 중 가장 만족스러운 것은 무엇인가요?',
          },
        ]
      },
      '7': {
        seminarTitle: '제 7회 Devtalk Seminar',
        speakers: {
          speaker1: '정oo',
          speaker2: '한oo'
        },
        applicants: [
          {
            id: 1,
            studentId: 'C11111',
            name: '홍길동',
            contact: '010-1234-5678',
            question1: '개발자로서 가장 중요하게 생각하는 덕목은 무엇인가요?',
            question2: '현재 사용하고 계신 기술 스택 중 가장 만족스러운 것은 무엇인가요?',
          },
        ]
      }
    };

    return mockData[seminarId] || { seminarTitle: '', speakers: { speaker1: '', speaker2: '' }, applicants: [] };
  };

  const mockQuestions = getMockQuestionsBySeminarId(id!);

  const getSeminarTitle = (id: string) => `제 ${id}회 Devtalk Seminar`;

  // 엑셀 다운로드용 헤더 매핑
  const excelHeaders = {
    studentId: '학번',
    name: '이름',
    contact: '연락처',
    question1: `[${mockQuestions.speakers?.speaker1 || '첫번째 연사'}]님께 궁금한 점이나 듣고 싶은 이야기가 있나요?`,
    question2: `[${mockQuestions.speakers?.speaker2 || '두번째 연사'}]님께 궁금한 점이나 듣고 싶은 이야기가 있나요?`
  };

  return (
    <div className="py-11">
      <div className="flex items-center justify-between ml-[39px] mr-7 mb-[23px]">
        <div className="flex items-center">
          <BackButton className="w-7 h-7 flex-shrink-0 mr-[39px]" />
          <h1 className="text-white heading-1-bold">{getSeminarTitle(id!)}-연사별 질문</h1>
        </div>
        <ExcelDownloadButton
          data={mockQuestions.applicants}
          fileName={`${getSeminarTitle(id!)}_연사별_질문.xlsx`}
          className="subhead-1-semibold"
          headers={excelHeaders}
        />
      </div>
      <div className="ml-[21.5px]">
        <ApplicantsQuestionList applicants={mockQuestions.applicants} speakers={mockQuestions.speakers} />
      </div>
    </div>
  );
};

export default Questions;