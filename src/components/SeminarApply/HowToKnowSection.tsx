import { SectionHeader } from '../../components/SeminarApply/SectionHeader';
import emptycircle from '../../assets/icons/components/SeminarApply/emptycircle.svg';
import chosencircle from '../../assets/icons/components/SeminarApply/chosencircle.svg';

type HowToKnowSectionProps = { options: string[] };

export const HowToKnowSection = ({ options }: HowToKnowSectionProps) => (
  <div className="flex flex-col gap-20">
    <SectionHeader title="이번 세미나를 어떻게 알게 되었나요?" required />
    <div className="flex flex-col gap-6">
      {options.map((opt, i) => {
        const id = `howtoknow-${i}`;
        return (
          <label key={id} htmlFor={id} className="group flex items-center gap-12 cursor-pointer">
            <input id={id} name="howtoknow" type="radio" value={opt} className="sr-only" />

            {/* 아이콘 컨테이너 */}
            <span className="relative w-6 h-6 shrink-0">
              {/* 빈 원: 항상 보임 */}
              <img src={emptycircle} alt="" className="w-6 h-6" />
              {/* 찬 원: 기본 숨김, 선택 시 중앙에 표시 */}
              <img
                src={chosencircle}
                alt=""
                className="w-3 h-3 absolute top-1/2 left-1/2
                           -translate-x-1/2 -translate-y-1/2
                           hidden group-has-[:checked]:block"
              />
            </span>

            <span className="body-1-medium text-white">{opt}</span>
          </label>
        );
      })}

      {/* 기타 */}
      <label htmlFor="howtoknow-other" className="group flex items-center gap-12 cursor-pointer">
        <input
          id="howtoknow-other"
          name="howtoknow"
          type="radio"
          value="기타"
          className="sr-only"
        />

        <span className="relative w-6 h-6 shrink-0">
          <img src={emptycircle} alt="" className="w-6 h-6" />
          <img
            src={chosencircle}
            alt=""
            className="w-3 h-3 absolute top-1/2 left-1/2
                       -translate-x-1/2 -translate-y-1/2
                       hidden group-has-[:checked]:block"
          />
        </span>

        <span className="body-1-medium text-white shrink-0">기타:</span>
        <input
          type="text"
          className="flex-1 bg-transparent outline-none
                     body-1-medium text-white
                     border-b border-grey-900
                     opacity-0 pointer-events-none transition-opacity
                     group-has-[:checked]:opacity-100 group-has-[:checked]:pointer-events-auto
                     focus:border-grey-600"
        />
      </label>
    </div>
  </div>
);
