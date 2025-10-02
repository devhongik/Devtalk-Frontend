import AdminImageUpload from '../../../components/admin/upload/AdminImageUpload';

const PromoImage = () => {
  return (
    <div className="space-y-40 ml-60 mr-60 mb-[175px]">
      <h1 className="mt-60 heading-1-bold text-white">홍보 사진 관리</h1>
      <AdminImageUpload
        title="Devtalk 소개 사진"
        onUpload={(files) => console.log('이미지 업로드:', files)}
        onRemove={(index) => console.log('이미지 삭제:', index)}
      />
      <AdminImageUpload
        title="이전 세미나 보러가기 사진"
        onUpload={(files) => console.log('이미지 업로드:', files)}
        onRemove={(index) => console.log('이미지 삭제:', index)}
      />
    </div>
  );
};

export default PromoImage;
