import AdminImageUpload from '../../../components/admin/upload/AdminImageUpload';
import LoadingSpinner from '../../../components/common/LoadingSpinner';
import {
  useHomeImages,
  useUploadHomeImage,
  useDeleteHomeImage,
} from '../../../hooks/HomeManage/useHomeImage';
import { useEffect } from 'react';

const PromoImage = () => {
  const { data, isLoading, isError } = useHomeImages();
  const uploadMutation = useUploadHomeImage();
  const deleteMutation = useDeleteHomeImage();

  useEffect(() => {
    if (data) {
      console.log('📦 GET /admin/home/images 응답:', data);
    }
  }, [data]);

  if (isLoading) return <LoadingSpinner />;
  if (isError)
    return <div className="text-status-error text-center p-20">데이터를 불러올 수 없습니다.</div>;

  const introImage = data?.result?.intro;
  const previousImage = data?.result?.previousSeminar;

  return (
    <div className="space-y-40 ml-60 mr-60 mb-[175px]">
      <h1 className="mt-60 heading-1-bold text-white">홍보 사진 관리</h1>
      <AdminImageUpload
        title="Devtalk 소개 사진"
        onUpload={(files) => {
          console.log('📤 [업로드 요청 - INTRO]:', files[0]);
          uploadMutation.mutate(
            { type: 'INTRO', file: files[0] },
            {
              onSuccess: (data) => {
                console.log('✅ [업로드 성공 - INTRO]:', data);
              },
              onError: (error) => {
                console.error('❌ [업로드 실패 - INTRO]:', error);
              },
            }
          );
        }}
        onRemove={() => {
          console.log('🗑 [삭제 요청 - INTRO]');
          deleteMutation.mutate({ type: 'INTRO' });
        }}
      />

      <AdminImageUpload
        title="이전 세미나 보러가기 사진"
        onUpload={(files) => {
          console.log('📤 [업로드 요청 - PREVIOUS_SEMINAR]:', files[0]);
          uploadMutation.mutate(
            { type: 'PREVIOUS_SEMINAR', file: files[0] },
            {
              onSuccess: (data) => {
                console.log('✅ [업로드 성공 - PREVIOUS_SEMINAR]:', data);
              },
              onError: (error) => {
                console.error('❌ [업로드 실패 - PREVIOUS_SEMINAR]:', error);
              },
            }
          );
        }}
        onRemove={() => {
          console.log('🗑 [삭제 요청 - PREVIOUS_SEMINAR]');
          deleteMutation.mutate({ type: 'PREVIOUS_SEMINAR' });
        }}
      />

      {introImage?.url && (
        <div className="mt-20">
          <p className="text-white mb-4">현재 등록된 INTRO 이미지</p>
          <img
            src={introImage.url}
            alt="Devtalk 소개"
            className="w-[300px] h-[200px] object-cover rounded-10 border border-grey-700"
          />
        </div>
      )}

      {previousImage?.url && (
        <div className="mt-20">
          <p className="text-white mb-4">현재 등록된 이전 세미나 이미지</p>
          <img
            src={previousImage.url}
            alt="이전 세미나"
            className="w-[300px] h-[200px] object-cover rounded-10 border border-grey-700"
          />
        </div>
      )}
    </div>
  );
};

export default PromoImage;
