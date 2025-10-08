import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';

const UserErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full text-center">
      <div className="flex flex-col gap-[30px]">
        <h1 className="heading-1-bold text-gradient">404</h1>
        <p className="subhead-1-semibold text-white">
          페이지를 찾을 수 없습니다.
          <br />
          요청하신 페이지가 존재하지 않거나
          <br />
          잘못된 접근입니다.
        </p>
        <Button variant="default" text="이전 페이지로 돌아가기" onClick={() => navigate(-1)} />
      </div>
    </div>
  );
};

export default UserErrorPage;
