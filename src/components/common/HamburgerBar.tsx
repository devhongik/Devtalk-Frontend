import { useNavigate } from 'react-router-dom';
import deleteIcon from '../../assets/icons/common/delete.svg';

type HamburgerBarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const HamburgerBar = ({ isOpen, onClose }: HamburgerBarProps) => {
  const navigate = useNavigate();

  return (
    <>
      {/* 탭 뒤 화면 오버레이 */}
      {/* <div
        className={`fixed bg-black/30 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      /> */}

      {/* 햄버거 바 */}
      <div
        className={`absolute top-[56px] w-[375px] h-[calc(100vh-56px)] bg-black z-50 transform transition-transform duration-400 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex flex-col gap-16 pt-60 px-20">
          <div className="flex items-center justify-end">
            <button onClick={onClose} className="">
              <img src={deleteIcon} alt="닫기 버튼" className="w-[24px] h-[24px] cursor-pointer" />
            </button>
          </div>

          <nav className="flex flex-col text-grey-300 subhead-1-semibold">
            <div className="flex gap-[5px]">
              <button className="w-[175px] py-[12px] pl-[16px] pr-[8px] rounded-8 text-left hover:bg-grey-800 hover:text-white cursor-pointer transition-all duration-200">
                데브톡 소개
              </button>
              <button
                className="w-[175px] py-[12px] pl-[16px] pr-[8px] rounded-8 text-left hover:bg-grey-800 hover:text-white cursor-pointer transition-all duration-200"
                onClick={() => navigate('/seminar')}
              >
                세미나
              </button>
            </div>
            <button
              className="w-[335px] py-[12px] pl-[16px] pr-[8px] rounded-8 text-left hover:bg-grey-800 cursor-pointer transition-all duration-200"
              onClick={() => navigate('/seminar/apply-info')}
            >
              <p className="text-gradient">n회차 데브톡 신청하기</p>
            </button>
            <hr className="border-gray-700 mt-[28px] mb-[8px]" />
            <div className="flex gap-[5px]">
              <button className="w-[175px] py-[12px] pl-[16px] pr-[8px] rounded-8 text-left hover:bg-grey-800 hover:text-white cursor-pointer transition-all duration-200">
                FAQ
              </button>
              <button className="w-[175px] py-[12px] pl-[16px] pr-[8px] rounded-8 text-left hover:bg-grey-800 hover:text-white cursor-pointer transition-all duration-200">
                문의하기
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HamburgerBar;
