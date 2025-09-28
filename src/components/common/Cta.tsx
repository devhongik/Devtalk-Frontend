import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';

const Cta = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[375px] h-[152px] flex flex-col justify-center items-center gap-16 px-20 pt-20 pb-24 button-bg">
      <div className="flex flex-col items-center gap-4 w-[256px] h-[44px] body-2-semibold text-grey-100">
        <div> 데브톡에 빠져보세요! </div>
        <div className="whitespace-nowrap">
          신청 기간은 <span className="text-gradient">2025. 9. 1 ~ 2025. 9. 30</span> 입니다
        </div>
      </div>
      <Button variant="home" text="10회차 세미나 신청하기" onClick = {() => navigate('/seminar/apply-info')}/>
    </div>
  );
};

export default Cta;
