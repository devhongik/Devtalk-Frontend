import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 세미나 데이터 타입 정의
interface SeminarData {
  id: number;
}

const ApplicantsList = () => {
  const navigate = useNavigate();

  // 세미나 목록 목데이터 (API 연동 시 이 부분을 fetch로 교체)
  const seminars: SeminarData[] = [
    { id: 10 },
    { id: 9 },
    { id: 8 },
    { id: 7 },
    { id: 6 },
    { id: 5 },
    { id: 4 },
  ];

  // 세미나 제목 생성 함수
  const getSeminarTitle = (id: number) => `제 ${id}회 Devtalk Seminar`;

  // 현재 펼쳐진 세미나 ID를 관리
  const [expandedSeminarId, setExpandedSeminarId] = useState<number | null>(null);

  // 세미나 항목 클릭 시 펼침/접힘 처리
  const toggleExpanded = (id: number) => {
    setExpandedSeminarId(expandedSeminarId === id ? null : id);
  };

  // 신청자 개인정보 페이지로 이동
  const handlePersonalInfo = (seminarId: number) => {
    navigate(`/admin/seminars/applicants/${seminarId}`);
  };

  // 연사별 질문 페이지로 이동
  const handleQuestions = (seminarId: number) => {
    navigate(`/admin/seminars/applicants/${seminarId}/questions`);
  };

  return (
    <div className="space-y-0">
      {seminars.map((seminar, index) => (
        <div key={seminar.id}>
          {/* 세미나 제목 */}
          <div
            className="cursor-pointer py-5 ml-[39px]"
            onClick={() => toggleExpanded(seminar.id)}
          >
            <h3 className="text-white heading-2-semibold">
              {getSeminarTitle(seminar.id)}
            </h3>
          </div>

          {/* 펼쳐진 상태일 때 하위 메뉴 표시 */}
          {expandedSeminarId === seminar.id && (
              <div className="ml-[39px]">
                {/* 신청자 개인정보 */}
                <div
                  className="flex items-center cursor-pointer text-gray-500 subhead-1-medium hover:opacity-70"
                  onClick={() => handlePersonalInfo(seminar.id)}
                >
                  <span className="mr-4">•</span>
                  <span>신청자 개인정보</span>
                </div>

              <div className="mt-[20px]">
                {/* 연사별 질문 */}
                <div
                  className="flex items-center cursor-pointer text-gray-500 subhead-1-medium hover:opacity-70"
                  onClick={() => handleQuestions(seminar.id)}
                >
                  <span className="mr-4">•</span>
                  <span>연사별 질문</span>
                </div>
              </div>
              <div className="mb-[18px]"></div>
            </div>
          )}

          {/* 세미나 사이 구분선 */}
          {index < seminars.length && (
            <div className="w-[1119px] h-0 flex-shrink-0 border-b-[1.5px] border-white ml-[27px] mr-[41px]"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ApplicantsList;