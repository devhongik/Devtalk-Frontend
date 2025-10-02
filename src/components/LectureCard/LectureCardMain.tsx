import speakerEx from '../../assets/speakerEx.jpg';

export const LectureCardMain = () => {
  return (
    <div className="relative w-[311px] h-[500px] rounded-[12px] overflow-hidden bg-black flex-shrink-0 snap-center">
      <img src={speakerEx} alt="연사 이미지" className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#3A4140] via-[#090A0C] to-transparent" />

      <div className="absolute bottom-[35px] p-[16px] text-center gap-[20px] flex flex-col w-full">
        <div className="flex flex-col gap-[16px]">
          <p className="flex gap-[8px] items-center justify-center">
            <span className="body-2-semibold text-white">연사</span>
            <span className="subhead-1-semibold text-gradient">김데브</span>
            <span className="body-2-semibold text-white">님</span>
          </p>
          <p className="body-1-medium text-white">前 Kakao · Toss Data Scientist</p>
        </div>
        <p className="px-[20px] heading-3-semibold text-white">
          Data Scientist가 바라보는 AI의 지난 10년과 현재
        </p>
      </div>
    </div>
  );
};
