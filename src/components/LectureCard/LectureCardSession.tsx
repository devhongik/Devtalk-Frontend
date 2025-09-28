export const LectureCardSession = () => {
  return (
    <div
      className="w-[311px] h-[500px] rounded-12 flex flex-col items-center justify-start px-[28px] pt-[50px] pb-[32px] gap-[48px] flex-shrink-0 snap-center"
      style={{
        background:
          'linear-gradient(180deg, #090A0C 0%, rgba(9, 10, 12, 0.70) 100%), linear-gradient(90deg, #F2FFD5 0%, #B2CCFF 128.68%)',
      }}
    >
      {/* 타이틀 */}
      <div className="flex flex-col items-center text-center w-[237px] h-[92px] gap-[8px]">
        <p className="heading-3-semibold text-gradient">Session #1</p>
        <p className="heading-3-semibold text-white">
          Data Scientist가 바라보는 AI의 지난 10년과 현재
        </p>
      </div>

      {/* 세션 내용 */}
      <div className="body-2-medium text-grey-200 text-left">
        <p>
          <span className="text-gradient">ChatGPT 3년차,</span> LLM은 더욱 어려운 문제를 해결하고
          실제 작업을 수행하는 수준으로 발전했습니다.
        </p>
        <br />
        <p>
          코딩을 비롯한 다양한 분야에서 인간의 능력을 넘어서고, 연구 보고서도 쓰고, 혼자 티켓 예약도
          할 수 있다는데요. <br />
          <span className="text-gradient">LLM은 어쩌다 이렇게 똑똑해졌을까요?</span>
        </p>

        <br />
        <p>
          LLM의 놀라운 능력의 비밀,{' '}
          <span className="text-gradient">추론(Reasoning)과 에이전트(Agent)</span>라는 핵심 키워드를
          쉽고 명확하게 알아봅시다!
        </p>
      </div>
    </div>
  );
};
