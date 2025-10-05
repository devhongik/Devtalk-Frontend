import mainPoster from '../../assets/videos/mainPoster.mp4';

const SeminarPoster = () => {
  return (
    <div className="relative w-[376px] h-[585px]">
      {/* 배경 영상 */}
      <video src={mainPoster} autoPlay loop muted playsInline className="object-over" />

      {/* 텍스트 */}
      <div className="absolute top-0 pt-32 pl-20 flex flex-col justify-center w-[335px] h-[196px]">
        <div className="flex flex-col gap-4">
          <p className="text-grey-50 subhead-2-medium">10회차</p>
          <p className="heading-1-bold text-gradient">LLM을 파헤치다</p>
        </div>

        <div className="flex flex-col gap-8 body-1-medium pt-36">
          <div className="flex gap-28">
            <p className="text-grey-300">대상</p>
            <p className="text-grey-200">홍익대학교 재학생 (학과/학년 무관)</p>
          </div>
          <div className="flex gap-28">
            <p className="text-grey-300">일시</p>
            <p className="text-grey-200">2025. 10. 4.(토) 오후 6:30~8:30</p>
          </div>
          <div className="flex gap-28">
            <p className="text-grey-300">장소</p>
            <p className="text-grey-200">홍익대학교 L0201</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeminarPoster;
