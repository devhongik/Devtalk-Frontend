import speakerEx from '../../assets/speakerEx.jpg';

function SeminarDetailLectureCard() {
  return (
    <div className="relative w-[335px] h-[1033px] rounded-[12px] overflow-hidden flex flex-col items-center justify-start">
      <div className="absolute top-0 w-full h-[427px] bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]" />
      <div className="absolute bottom-0 w-full h-[200px] bg-[linear-gradient(to_bottom,_#000000_0%,_#3A4140_100%)]" />
      <img src={speakerEx} alt="연사 이미지" className="w-[335px] h-[427px] object-cover " />
      <div className="flex flex-col w-[295px] gap-[20px] items-center absolute top-[300px] ">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex gap-[8px] items-center body-2-semibold text-white ">
            연사 <span className="subhead-1-semibold text-gradient">김데브</span>님
          </div>
          <p className="body-1-medium text-white">前 Kakao · Toss Data Scientist</p>
        </div>
        <ul className="w-[273px] h-[140px] pl-5 body-2-medium text-grey-200 list-disc list-outside">
          <li>前 Toss Securities Data Scientist (2021)</li>
          <li>前 Kakao Corp Data Scientist (2020)</li>
          <li>성균관대학교 통계학 학사 졸업</li>
          <li>F사 프로젝트 멘토/ 강사 (2020~2023)</li>
          <li>N사 부스트 캠프 멘토/강사 (2022~2023)</li>
          <li>S사 부트캠프 데이터 분석 멘토/강사 (2023~2024)</li>
        </ul>
      </div>
      <div className="absolute bottom-[52px] h-[332px] flex flex-col gap-[39px] items-center justify-center w-full">
        <div className="w-[237px] h-[93px] flex flex-col gap-[9px] justify-center items-center heading-3-semibold">
          <div className="text-gradient">Session #1</div>
          <div className="text-white">Data Scientist가 바라보는 AI의 지난 10년과 현재</div>
        </div>
        <div className="w-[295px] body-2-medium text-grey-200 text-left">
          <p>
            <span className="text-gradient">ChatGPT 3년차,</span> LLM은 더욱 어려운 문제를 해결하고
            실제 작업을 수행하는 수준으로 발전했습니다.
          </p>
          <br />
          <p>
            코딩을 비롯한 다양한 분야에서 인간의 능력을 넘어서고, 연구 보고서도 쓰고, 혼자 티켓
            예약도 할 수 있다는데요. <br />
            <span className="text-gradient">LLM은 어쩌다 이렇게 똑똑해졌을까요?</span>
          </p>

          <br />
          <p>
            LLM의 놀라운 능력의 비밀,{' '}
            <span className="text-gradient">추론(Reasoning)과 에이전트(Agent)</span>라는 핵심
            키워드를 쉽고 명확하게 알아봅시다!
          </p>
        </div>
      </div>
    </div>
  );
}

export default SeminarDetailLectureCard;
