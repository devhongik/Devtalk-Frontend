import type { SeminarCardData } from '../../types/SeminarManage/seminarCard.api';
import { formatDate } from '../../utils/formatDate';
import { Chip } from '../Chip/Chip';

interface SeminarItem {
  seminar: SeminarCardData;
}
// 임의로 작성 -> 추후 API 연동 시 변경 필요

const SeminarListCard = ({ seminar }: SeminarItem) => {
  const { seminarNum, seminarTopic, seminarDate, place, imageUrl } = seminar;
  const formDate = formatDate(seminarDate);
  return (
    <div className="w-[335px] pt-20 gap-[20px] flex flex-col cursor-pointer">
      <div className="flex flex-col gap-12">
        <Chip
          text={`${seminarNum}회차 세미나`}
          className="w-[84px] h-[25px] whitespace-nowrap bg-grey-900 caption-semibold"
        />
        <div className="heading-3-semibold text-white whitespace-pre-line">{seminarTopic}</div>
      </div>
      <div className="h-[106px] flex flex-row gap-16">
        <img src={imageUrl} alt="seminar Img" className="w-[150px] h-[106px] rounded-8" />
        <div className="h-[68px] flex flex-col gap-8 justify-between body-2-medium">
          <div className="flex flex-row gap-20 align-start">
            <div className="text-grey-300 whitespace-nowrap">일정</div>
            <div className="text-grey-400 whitespace-pre-line">
              {formDate.replace(/(오전|오후)/, '\n$1')}
            </div>
          </div>
          <div className="flex flex-row gap-20 align-start">
            <div className="text-grey-300">장소</div>
            <div className="text-grey-400">{place}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeminarListCard;
