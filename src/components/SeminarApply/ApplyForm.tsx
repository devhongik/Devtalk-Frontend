import checkbox from '../../assets/icons/components/SeminarApply/checkbox.svg';
import emptybox from '../../assets/icons/components/SeminarApply/emptybox.svg';
import chosencircle from '../../assets/icons/components/SeminarApply/chosencircle.svg';
import emptycircle from '../../assets/icons/components/SeminarApply/emptycircle.svg';

const DEPARTMENTS = [
  '컴퓨터공학과',
  '산업데이터공학과',
  '전자전기공학과',
  '경영학과',
  '산업디자인과',
  '자율전공',
];

const GRADES = ['1학년', '2학년', '3학년', '4학년'];

const HOWTOKNOW = [
  '지인',
  '교수님',
  '에브리타임',
  '학과 공지방',
  '학회/동아리 공지방',
  '교내 포스터 / X배너',
  '인스타그램',
];
const PARTICIPATE = ['오프라인', '온라인 Live (Q&A, 이벤트 참여 불가)'];

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
      <div className="flex flex-col gap-20">
        <div className="flex flex-row gap-4">
          <p className="heading-3-semibold text-white">학년을 선택해주세요</p>
          <p className="heading-3-semibold text-gradient">*</p>
        </div>

        <div className="flex flex-col gap-6">
          {GRADES.map((g, i) => {
            const id = `grade-${i}`;
            return (
              <label
                key={id}
                htmlFor={id}
                className="group flex items-center gap-12 cursor-pointer"
              >
                <input id={id} name="grade" type="radio" value={g} className="sr-only" />

                <span className="relative w-6 h-6 shrink-0">
                  <img src={emptycircle} alt="" className="w-6 h-6" />
                  <img
                    src={chosencircle}
                    alt=""
                    className="w-3 h-3
                   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                           hidden group-has-[:checked]:block"
                  />
                </span>

                <span className="body-1-medium text-white">{g}</span>
              </label>
            );
          })}
          <label htmlFor="grade-other" className="group flex items-center gap-12 cursor-pointer">
            <input
              id="grade-other"
              name="grade"
              type="radio"
              value="기타"
              className="peer sr-only"
            />

            <span className="relative w-6 h-6 shrink-0">
              <img src={emptycircle} alt="" className="w-6 h-6" />
              <img
                src={chosencircle}
                alt=""
                className="w-3 h-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       hidden group-has-[:checked]:block"
              />
            </span>

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

      {/* 세미나 알게 된 경로 */}
      <div className="flex flex-col gap-20">
        <div className="flex flex-row gap-4">
          <p className="heading-3-semibold text-white">이번 세미나를 어떻게 알게 되었나요?</p>
          <p className="heading-3-semibold text-gradient">*</p>
        </div>

        <div className="flex flex-col gap-6">
          {HOWTOKNOW.map((g, i) => {
            const id = `howtoknow-${i}`;
            return (
              <label
                key={id}
                htmlFor={id}
                className="group flex items-center gap-12 cursor-pointer"
              >
                <input id={id} name="howtoknow" type="radio" value={g} className="sr-only" />

                <span className="relative w-6 h-6 shrink-0">
                  <img src={emptycircle} alt="" className="w-6 h-6" />
                  <img
                    src={chosencircle}
                    alt=""
                    className="w-3 h-3
                   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                           hidden group-has-[:checked]:block"
                  />
                </span>

                <span className="body-1-medium text-white">{g}</span>
              </label>
            );
          })}
          <label
            htmlFor="howtoknow-other"
            className="group flex items-center gap-12 cursor-pointer"
          >
            <input
              id="howtoknow-other"
              name="grade"
              type="radio"
              value="기타"
              className="peer sr-only"
            />

            <span className="relative w-6 h-6 shrink-0">
              <img src={emptycircle} alt="" className="w-6 h-6" />
              <img
                src={chosencircle}
                alt=""
                className="w-3 h-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       hidden group-has-[:checked]:block"
              />
            </span>

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

      {/* 참여 방식 */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <p className="heading-3-semibold text-white">어떤 방식으로 참여하시겠어요?</p>
            <p className="heading-3-semibold text-gradient">*</p>
          </div>
          <p className="body-2-medium text-grey-300">
            세미나 활성화를 위해 가급적 오프라인으로 함께해 주세요 🙌
          </p>
        </div>
        <div className="flex flex-col gap-16">
          {PARTICIPATE.map((g, i) => {
            const id = `participate-${i}`;
            return (
              <label
                key={id}
                htmlFor={id}
                className="group flex items-center gap-12 cursor-pointer"
              >
                <input id={id} name="participate" type="radio" value={g} className="sr-only" />

                <span className="relative w-6 h-6 shrink-0">
                  <img src={emptycircle} alt="" className="w-6 h-6" />
                  <img
                    src={chosencircle}
                    alt=""
                    className="w-3 h-3
                   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                           hidden group-has-[:checked]:block"
                  />
                </span>

                <span className="body-1-medium text-white">{g}</span>
              </label>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ApplyForm;
