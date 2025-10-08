import { useQuery } from '@tanstack/react-query';
import type { SeminarApplicantsDetailResponse } from '../../types/Applicants/seminarApplicantsDetail.api';
import { getSeminarApplicantsDetail } from '../../apis/Applicants/seminarApplicantsDetailApi';
import { QUERY_KEYS } from '../../constants/queryKey';

// 세미나별 신청자 상세 정보 조회
export const useSeminarApplicantsDetail = (seminarId: string) => {
  return useQuery<SeminarApplicantsDetailResponse>({
    queryKey: [QUERY_KEYS.ADMIN_SEMINAR_APPLICANTS_DETAIL, seminarId],
    queryFn: () => getSeminarApplicantsDetail(seminarId),
    enabled: !!seminarId,
  });
};
