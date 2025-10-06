import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/Button/Button';
import Header from '../../../components/common/Header';

const LiveVerification = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="flex flex-col px-20 pt-28">
        <p className="flex text-white heading-2-bold pb-32">세미나 신청자 인증</p>
        <div className="flex flex-col gap-12">
          <input
            type="text"
            placeholder="학번"
            className="w-[335px] h-[54px] px-16 py-8 text-grey-50 bg-grey-800 rounded-8 placeholder:text-grey-300 border border-transparent focus:border-grey-300 focus:outline-none"
          />
          <input
            type="text"
            placeholder="이름"
            className="w-[335px] h-[54px] px-16 py-8 text-grey-50 bg-grey-800 rounded-8 placeholder:text-grey-300 border border-transparent focus:border-grey-300 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex px-20 pt-[381px]">
        <Button text="인증하기" variant="default" onClick={() => navigate('/seminar/live')} />
      </div>
    </>
  );
};

export default LiveVerification;
