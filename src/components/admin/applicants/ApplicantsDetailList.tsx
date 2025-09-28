// 지원자 데이터 타입
interface Applicant {
  id: number;           // 각 지원자의 고유 ID (React의 key로 사용)
  seminarName: string;  // 세미나명
  studentId: string;    // 학번
  department: string;   // 학과명
  grade: string;        // 학년
  name: string;         // 지원자 이름
  contact: string;      // 연락처
  attendanceType: string; // 온/오프라인 참여 여부
  referralSource: string; // 이번 세미나를 알게 된 경로
  eventParticipation: string; // 이벤트 참여 여부
  sharedAccount: string; // 공유한 계정
  invitedFriend: string; // 초대한 친구 이름
}

// 컴포넌트 props 타입 정의
interface ApplicantsDetailListProps {
  applicants: Applicant[];  
}

const ApplicantsDetailList: React.FC<ApplicantsDetailListProps> = ({ applicants }) => {
  // 공통 헤더 스타일
  const headerStyle = "border border-grey-400 px-5 py-3 text-center subhead-1-semibold text-white";

  // 공통 데이터 셀 스타일
  const cellStyle = "border border-grey-400 px-5 py-3 text-center body-1-semibold text-white ";

  // 헤더 목록
  const headers = ['세미나명', '학번', '학과', '학년', '이름', '연락처', '온/오프라인 참여 여부', '이번 세미나를 알게 된 경로', '이벤트 참여 여부', '공유한 계정', '초대한 친구 이름'];

  // 데이터 키 목록 (applicant 객체의 속성명과 매칭)
  const dataKeys = ['seminarName', 'studentId', 'department', 'grade', 'name', 'contact', 'attendanceType', 'referralSource', 'eventParticipation', 'sharedAccount', 'invitedFriend'] as const;
  return (
    <div className="w-full">
      {/* 테이블이 화면보다 클 때 가로/세로 스크롤바 표시 */}
      <div className="overflow-x-auto overflow-y-auto max-h-[calc(100vh-150px)]">
        <table className="min-w-max border-collapse">

          {/* 테이블 헤더 */}
          <thead>
            <tr className="bg-grey-900">
              {headers.map((header) => (
                <th key={header} className={headerStyle}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          {/* 테이블 본문 */}
          <tbody>
            {applicants.map((applicant) => (
              <tr key={applicant.id} className="bg-grey-700 hover:ring-2 hover:ring-green-300 hover:ring-inset cursor-pointer">
                {dataKeys.map((key) => (
                  <td key={key} className={cellStyle}>
                    {applicant[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 지원자가 없을 때 */}
      {applicants.length === 0 && (
        <div className="text-center py-8 text-white subhead-1-medium">
          신청자가 없습니다.
        </div>
      )}
    </div>
  );
};


export default ApplicantsDetailList;