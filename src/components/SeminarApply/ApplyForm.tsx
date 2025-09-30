const ApplyForm = () => {
  return (
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
  );
};

export default ApplyForm;
