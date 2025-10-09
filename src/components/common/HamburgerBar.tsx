import { useNavigate } from 'react-router-dom';

type HamburgerBarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const HamburgerBar = ({ isOpen, onClose: _onClose }: HamburgerBarProps) => {
  const navigate = useNavigate();

  const handleIntroduceClick = () => {
    navigate('/');
  };

  const handleFAQClick = () => {
    {
      /* 추후 하드코딩 바꾸기 */
    }
    window.open('http://pf.kakao.com/_Gxbrwn/111023217', '_self');
  };

  const handleInquiryClick = () => {
    {
      /* 추후 하드코딩 바꾸기 */
    }
    window.open('http://pf.kakao.com/_Gxbrwn/chat', '_self');
  };

  return (
    <>
      {/* 햄버거 바 */}
      <div
        className={`absolute w-[375px] h-screen bg-black transform transition-transform duration-400 z-40 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex flex-col gap-16 pt-60 px-20">
          <nav className="flex flex-col text-grey-300 subhead-1-semibold">
            <button
              className="w-[335px] py-[12px] pl-[16px] pr-[8px] rounded-8 text-left hover:bg-grey-800 hover:text-white cursor-pointer transition-all duration-200"
              onClick={handleIntroduceClick}
            >
              소개
            </button>
            <button
              className="w-[335px] py-[12px] pl-[16px] pr-[8px] rounded-8 text-left hover:bg-grey-800 hover:text-white cursor-pointer transition-all duration-200"
              onClick={() => navigate('/seminar')}
            >
              세미나
            </button>
            <button
              className="w-[335px] py-[12px] pl-[16px] pr-[8px] rounded-8 text-left hover:bg-grey-800 cursor-pointer transition-all duration-200"
              onClick={() => navigate('/seminar/apply-info')}
            >
              <p className="text-gradient">10회차 데브톡 신청하기</p> {/* 추후 하드코딩 바꾸기 */}
            </button>
            <hr className="border-grey-700 mt-[28px] mb-[8px]" />
            <button
              onClick={handleFAQClick}
              className="w-[335px] py-[12px] pl-[16px] pr-[8px] rounded-8 text-left hover:bg-grey-800 hover:text-white cursor-pointer transition-all duration-200"
            >
              FAQ
            </button>
            <button
              onClick={handleInquiryClick}
              className="w-[335px] py-[12px] pl-[16px] pr-[8px] rounded-8 text-left hover:bg-grey-800 hover:text-white cursor-pointer transition-all duration-200"
            >
              문의하기
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HamburgerBar;
