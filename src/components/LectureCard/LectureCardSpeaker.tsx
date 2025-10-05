import speakerEx from '../../assets/images/speakerEx.jpg';

export const LectureCardSpeaker = () => {
  return (
    <div
      className="w-[311px] h-[500px] rounded-[12px] flex flex-col items-center justify-start p-6 flex-shrink-0 snap-center"
      style={{
        background:
          'linear-gradient(180deg, #090A0C 0%, rgba(9, 10, 12, 0.70) 100%), linear-gradient(90deg, #F2FFD5 0%, #B2CCFF 128.68%)',
      }}
    >
      {/* 프로필 이미지 */}
      <img
        src={speakerEx}
        alt="연사 이미지"
        className="rounded-full w-[150px] h-[150px] object-cover mt-[26px] mb-[18px]"
      />

      {/* 연사 정보 */}
      <div className="flex flex-col items-center gap-[4px] text-center">
        <div className="flex items-center gap-2">
          <p className="subhead-1-semibold text-white">연사</p>
          <p className="heading-2-semibold text-gradient">CoAI</p>
          <p className="subhead-1-semibold text-white">님</p>
        </div>
        <p className="body-1-medium text-white">前 Kakao · Toss Data Scientist</p>
      </div>

      {/* 경력 리스트 */}
      <ul className="pl-[16px] pt-[30px] w-[273px] h-[140px] body-2-medium text-grey-200 text-left list-disc pb-[8px]">
        <li>前 Toss Securities Data Scientist (2021)</li>
        <li>前 Kakao Corp Data Scientist (2020)</li>
        <li>성균관대학교 통계학 학사 졸업</li>
        <li>F사 프로젝트 멘토/ 강사 (2020~2023)</li>
        <li>N사 부스트 캠프 멘토/강사 (2022~2023)</li>
        <li>S사 부트캠프 데이터 분석 멘토/강사 (2023~2024)</li>
      </ul>
    </div>
  );
};
