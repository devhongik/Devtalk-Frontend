import { useParams } from 'react-router-dom';
import ApplicantsDetailList from './../../../../components/admin/applicants/ApplicantsDetailList';
import BackButton from './../../../../components/Button/BackButton';
import ExcelDownloadButton from './../../../../components/Button/ExcelDownloadButton';
import { useSeminarApplicantsDetail } from '../../../../hooks/Applicants/useSeminarApplicantsDetail';

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: applicantsData } = useSeminarApplicantsDetail(id!);

  // inflowPath 매핑 함수
  const getInflowPathLabel = (inflowPath: string) => {
    const inflowPathMap: { [key: string]: string } = {
      FRIEND: '지인',
      PROFESSOR: '교수님 추천',
      EVERYTIME: '에브리타임',
      DEPARTMENT: '학과 공지방',
      CLUB: '학회/동아리 공지방',
      CAMPUS: '교내 포스터 / X배너',
      INSTAGRAM: '인스타그램',
    };
    return inflowPathMap[inflowPath] || inflowPath;
  };

  // API 응답 데이터를 컴포넌트에서 사용하는 형식으로 변환
  const applicants =
    applicantsData?.result?.students?.map((applicant, index) => ({
      id: index + 1,
      seminarName: applicant.topic,
      studentId: applicant.studentNum,
      department: applicant.department,
      grade: applicant.grade,
      name: applicant.name,
      contact: applicant.phone,
      email: applicant.email,
      attendanceType: applicant.participationType === 'ONLINE' ? '온라인' : '오프라인',
      referralSource: getInflowPathLabel(applicant.inflowPath),
    })) || [];

  const seminarTitle = `제 ${applicantsData?.result?.seminarNum}회 Devtalk Seminar`;

  // 엑셀 다운로드용 헤더 매핑
  const excelHeaders = {
    seminarName: '세미나명',
    studentId: '학번',
    department: '학과',
    grade: '학년',
    name: '이름',
    contact: '연락처',
    email: '이메일',
    attendanceType: '온/오프라인 참여 여부',
    referralSource: '이번 세미나를 알게 된 경로'
  };

  return (
    <div className="py-11">
      <div className="flex items-center justify-between ml-[39px] mr-7 mb-[23px]">
        <div className="flex items-center">
          <BackButton className="w-7 h-7 flex-shrink-0 mr-[39px]" />
          <h1 className="text-white heading-1-bold">{seminarTitle}-신청자 개인정보</h1>
        </div>
        <ExcelDownloadButton
          data={applicants}
          fileName={`${seminarTitle}_신청자_개인정보.xlsx`}
          className="subhead-1-semibold"
          headers={excelHeaders}
        />
      </div>
      <div className="ml-[21.5px]">
        <ApplicantsDetailList applicants={applicants} />
      </div>
    </div>
  );
};

export default Detail;