import sampleSpeaker from '../../assets/images/sampleSpeaker.svg';

const SpeakerInfo = () => {
  return (
    <div className="w-[335px] h-[100px] rounded-8 bg-grey-900 flex px-12">
      <div className="flex flex-row gap-6 items-center">
        {/* 프로필 이미지 */}
        <img
          src={sampleSpeaker}
          alt="연사 사진"
          className="w-[65px] h-[65px] rounded-full object-cover"
        />

        {/* 텍스트 영역 */}
        <div className="flex flex-col gap-[5px]">
          <div className="flex flex-row gap-[9px] items-center">
            <p className="subhead-1-semibold text-white">김데브</p>
            <p className="body-2-medium text-grey-300">연사님</p>
          </div>
          <p className="body-2-medium text-grey-200">前 Kakao · Toss Data Scientist</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerInfo;
