import type { CommonResponse } from './common';

export interface SeminarReview {
  reviewId: number;
  studentNum: string;
  seminarNum: number;
}
export type SeminarReviewResponse = CommonResponse<SeminarReview>;

export type SeminarReviewRequest = {
  strength: string;
  improvement: string;
  nextTopic: string;
  score: number;
  isPublic: boolean;
};
