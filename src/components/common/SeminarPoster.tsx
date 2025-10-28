import { useEffect, useState } from 'react';
import { useGetUserSeminar } from '../../hooks/userMainPage/useSeminar';
import LoadingSpinner from './LoadingSpinner';

const SeminarPoster = () => {
  const seminarId = 1;
  const { data: seminar, isLoading } = useGetUserSeminar(seminarId);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative w-[376px] h-[585px]">
      {/* 배경 영상 */}
      <video
        // @ts-expect-error fetchpriority is a newer attribute not yet in TypeScript DOM types
        fetchPriority="high"
        src="/videos/mainPoster.mp4"
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        className="object-cover"
      />

      {/* 텍스트 */}
      {showText && (
        <div className="absolute top-0 pt-32 pl-20 flex flex-col justify-center w-[335px] h-[196px]">
          <div className="flex flex-col gap-4">
            <p className="text-grey-50 subhead-2-medium">{seminar?.result?.seminarNum}회차</p>
            <p className="heading-1-bold text-gradient">{seminar?.result?.topic}</p>
          </div>

          <div className="flex flex-col gap-8 body-1-medium pt-36">
            <div className="flex gap-28">
              <p className="text-grey-300">대상</p>
              <p className="text-grey-200">홍익대학교 재학생 (학과/학년 무관)</p>
            </div>
            <div className="flex gap-28">
              <p className="text-grey-300">일시</p>
              <p className="text-grey-200">{seminar?.result?.seminarDate}</p>
            </div>
            <div className="flex gap-28">
              <p className="text-grey-300">장소</p>
              <p className="text-grey-200">{seminar?.result?.place}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeminarPoster;
