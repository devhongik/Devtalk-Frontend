import type { CommonResponse } from '../common';

export interface ReviewData {
  reviewId: number;
  score: number;
  department: string;
  grade: string;
  name: string;
  content: string;
  nextTopic: string;
  isPublic: boolean;
  isFeatured: boolean;
  createdAt: string;
}

export type ReviewListResponse = CommonResponse<ReviewData[]>;
