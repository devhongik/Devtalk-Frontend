import checkbox from '../../assets/icons/components/SeminarApply/checkbox.svg';
import emptybox from '../../assets/icons/components/SeminarApply/emptybox.svg';

const DEPARTMENTS = [
  '컴퓨터공학과',
  '산업데이터공학과',
  '전자전기공학과',
  '경영학과',
  '산업디자인과',
  '자율전공',
];

const ApplyForm = () => {
  return (
    <>
      <div className="flex flex-col gap-11">
        {/* 이름 */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-row gap-4">
            <p className="heading-3-semibold text-white">이름을 적어주세요</p>
            <p className="heading-3-semibold text-gradient">*</p>
          </div>
          <input
            className="bg-grey-800 w-full h-14 rounded-8 placeholder:text-grey-300 px-16
             outline-none border border-transparent focus:border-grey-500"
            placeholder="ex. 김홍익"
          />
        </div>

        {/* 연락처 */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-row gap-4">
            <p className="heading-3-semibold text-white">연락처를 적어주세요</p>
            <p className="heading-3-semibold text-gradient">*</p>
          </div>
          <input
            className="bg-grey-800 w-full h-14 rounded-8 placeholder:text-grey-300 px-16
             outline-none border border-transparent focus:border-grey-500"
            placeholder="ex. 010-0000-0000"
          />
        </div>

        {/* 학번 */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-row gap-4">
            <p className="heading-3-semibold text-white">학번을 적어주세요</p>
            <p className="heading-3-semibold text-gradient">*</p>
          </div>
          <input
            className="bg-grey-800 w-full h-14 rounded-8 placeholder:text-grey-300 px-16
             outline-none border border-transparent focus:border-grey-500"
            placeholder="ex. C012345"
          />
        </div>
      </div>
      {/* 학과 선택란 */}
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <p className="heading-3-semibold text-white">학과를 선택해주세요</p>
            <p className="heading-3-semibold text-gradient">*</p>
          </div>
          <p className="body-2-medium text-grey-300">복수전공의 경우 모두 선택</p>
        </div>

        {/* 일반 학과들 */}
        <div className="flex flex-col gap-20">
          {DEPARTMENTS.map((dept, idx) => {
            const id = `dept-${idx}`;
            return (
              <label key={id} htmlFor={id} className="flex flex-row gap-12 cursor-pointer">
                <input id={id} type="checkbox" value={dept} className="sr-only peer" />
                <img src={emptybox} alt="empty" className="w-6 h-6 peer-checked:hidden" />
                <img src={checkbox} alt="checked" className="w-6 h-6 hidden peer-checked:block" />
                <span className="body-1-medium text-white">{dept}</span>
              </label>
            );
          })}

          {/* 기타 */}
          <label htmlFor="dept-other" className="flex items-center gap-12 cursor-pointer">
            <input id="dept-other" type="checkbox" className="sr-only peer" />

            <img src={emptybox} alt="empty" className="w-6 h-6 peer-checked:hidden" />
            <img src={checkbox} alt="checked" className="w-6 h-6 hidden peer-checked:block" />

            <span className="body-1-medium text-white shrink-0">기타:</span>
            <input
              type="text"
              className="flex-1 bg-transparent outline-none
             body-1-medium text-white
             border-b border-grey-900
             opacity-0 peer-checked:opacity-100 peer-checked:pointer-events-auto
             pointer-events-none transition-opacity
             focus:border-grey-600"
            />
          </label>
        </div>
      </div>
      {/* 학년 선택란 */}
    </>
  );
};

export default ApplyForm;
