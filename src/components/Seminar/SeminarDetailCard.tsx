function SeminarDeailCard({ id }: { id: number }) {
  return (
    <div className="w-[375px] h-[449px] gap-20 p-20 flex flex-col">
      <div className="w-[335px] h-[404px] gap-[31px] flex flex-col">
        <div className="h-[68px] flex flex-col gap-8 justify-between">
          <div className="subhead-2-medium text-grey-100">{id}회차</div>
          <div className="heading-2-bold text-gradient">LLM을 파헤치다</div>
        </div>
        <img src="/" alt="seminar" className="h-[220px] rounded-8 border" />
        <div className="h-[54px] flex flex-col gap-8 body-1-medium">
          <div className="flex flex-row gap-28">
            <div className="text-grey-300">일정</div>
            <div className="text-grey-400">2025. 4. 30.(수) 오후 6:30</div>
          </div>
          <div className="flex flex-row gap-28">
            <div className="text-grey-300">장소</div>
            <div className="text-grey-400">홍익대학교 L0201</div>
          </div>
        </div>
      </div>
      <div className="w-[102px] h-[25px] gap-10 px-8 py-4 rounded-4 bg-grey-900 cursor-pointer text-center flex items-center">
        <span className="text-gradient caption-semibold ">발표자료 다운로드</span>
      </div>
    </div>
  );
}

export default SeminarDeailCard;
