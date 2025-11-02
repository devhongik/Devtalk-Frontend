import { useState } from 'react';
import AdminList from '../../../components/admin/auth-manage/AdminList';
import AddAdminForm from '../../../components/admin/auth-manage/AddAdminForm';
import ArrowIcon from '../../../assets/icons/components/SeminarApply/arrow.svg';

const Accounts = () => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddAdmin = (data: { name: string; userId: string; password: string }) => {
    console.log('새 관리자 추가:', data);
    // API 연동 후 수정
    setIsAdding(false);
  };

  return (
    <div className="space-y-40 mx-60 mb-[100px]">
      {/* 헤더 영역 */}
      <div className="flex items-center justify-between mt-60">
        {isAdding ? (
          <div className="flex items-center gap-20">
            <button
              onClick={() => setIsAdding(false)}
              className="text-grey-300 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
            >
              <img src={ArrowIcon} alt="뒤로가기" className="w-24 h-24" />
            </button>
            <h1 className="heading-1-bold text-white">관리자 아이디 추가하기</h1>
          </div>
        ) : (
          <>
            <h1 className="heading-1-bold text-white">관리자 아이디 관리</h1>
            <button
              onClick={() => setIsAdding(true)}
              className="w-[175px] h-[52px] rounded-8 heading-3-semibold flex items-center justify-center bg-green-300 text-black hover:opacity-80 hover:cursor-pointer"
            >
              아이디 추가하기
            </button>
          </>
        )}
      </div>

      {/* 본문 */}
      {isAdding ? <AddAdminForm onSubmit={handleAddAdmin} /> : <AdminList />}
    </div>
  );
};

export default Accounts;
