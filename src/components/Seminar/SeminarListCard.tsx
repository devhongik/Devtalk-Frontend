import { Chip } from '../Chip/Chip';

interface SeminarItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
}
// 임의로 작성 -> 추후 API 연동 시 변경 필요

const SeminarListCard = ({ id, title, date, time, location, image }: SeminarItem) => {
  return (
    <div className="w-[335px] h-[263px] pt-20 pb-24 gap-20 flex flex-col cursor-pointer">
      <div className="h-[93px] flex flex-col gap-12">
        <Chip
          text={`${id}회차 세미나`}
          className="w-[84px] h-[25px] whitespace-nowrap bg-grey-900 caption-semibold"
        />
        <div className="heading-3-semibold text-white whitespace-pre-line">{title}</div>
      </div>
      <div className="h-[106px] flex flex-row gap-16">
        <img src={image} alt="seminar Img" className="w-[150px] h-[106px] rounded-8" />
        <div className="h-[68px] flex flex-col gap-8 justify-between body-2-medium">
          <div className="flex flex-row gap-20 align-start">
            <div className="text-grey-300 whitespace-nowrap">일정</div>
            <div className="text-grey-400">
              {date} <br /> {time}
            </div>
          </div>
          <div className="flex flex-row gap-20 align-start">
            <div className="text-grey-300">장소</div>
            <div className="text-grey-400">{location}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeminarListCard;
