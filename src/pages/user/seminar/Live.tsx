import { Button } from '../../../components/Button/Button';
import seminarLive from '../../../assets/images/seminarLive.svg';
import Header from '../../../components/common/Header';
import { useSeminarAttend } from '../../../hooks/SeminarLive/useSeminarAttend';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../../components/common/LoadingSpinner';
import { useState } from 'react';

const Live = () => {
  const { mutate, isPending } = useSeminarAttend();
  const navigate = useNavigate();

  const handleAttend = () => {
    mutate(undefined, {
      onSuccess: () => {
        // navigate('/')
        // 추후 세미나 링크 추가
      },
      onError: () => {
        alert('세미나 입장에 실패했습니다. 다시 시도해주세요.');
      },
    });
  };

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <>
      <Header hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen} />
      {isPending && <LoadingSpinner />}
      <div className="flex flex-col pt-28 px-20 gap-24 pb-[10px]">
        <p className="text-white heading-2-bold">제 10회 Devtalk Seminar</p>
        <img src={seminarLive} alt="graphic" className="w-[335px] h-[435px]" />
      </div>
      <div className="flex px-20 pt-20 pb-[89px]">
        <div className="flex flex-col gap-16">
          <Button text="세미나 Live 보러가기" variant="default" onClick={handleAttend} />
          <Button
            text="세미나 후기 남기기"
            variant="sub"
            onClick={() => navigate('/seminar/review')}
          />
        </div>
      </div>
    </>
  );
};

export default Live;
