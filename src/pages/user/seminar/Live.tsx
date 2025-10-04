import { Button } from '../../../components/Button/Button';
import seminarLive from '../../../assets/images/seminarLive.svg';
import Header from '../../../components/common/Header';

const Live = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col pt-28 px-20 gap-24 pb-[10px]">
        <p className="text-white heading-2-bold">제 10회 Devtalk Seminar</p>
        <img src={seminarLive} alt="graphic" className="w-[335px] h-[435px]" />
      </div>
      <div className="flex px-20 pt-20 pb-89">
        <div className="flex flex-col gap-16">
          <Button text="세미나 Live 보러가기" variant="default" />
          <Button text="세미나 후기 남기기" variant="sub" />
        </div>
      </div>
    </>
  );
};

export default Live;
