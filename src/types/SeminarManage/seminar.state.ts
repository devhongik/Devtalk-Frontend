import type { FileData } from './seminarFile.api';
import type { PendingFiles } from './seminarFile.api';
import type { ReviewData } from './seminarReview.api';

export interface SpeakerState {
  speakerId?: number;
  name: string;
  organization: string;
  history: string;
  sessionTitle: string;
  sessionContent: string;
  profileUrl: string | null;
  profileFileName?: string | null;
}

export interface SeminarDetailState {
  seminarId?: number;
  seminarNum: number | null;
  topic: string;
  seminarDate: string;
  place: string;
  liveLink: string;
  thumbnailUrl: string | null;
  thumbnailFileName?: string | null;
  materials: FileData[];
  speakers: SpeakerState[];
  seminarStartDate: Date;
  seminarEndDate: Date;
  applicationStartDate: Date;
  applicationEndDate: Date;
}

export interface FormErrors {
  date?: string;
  thumbnail?: string;
  speakers?: Map<number, string>;
  general?: string;
}

export interface SeminarState {
  initialState: SeminarDetailState | null; // 원본 데이터
  currentState: SeminarDetailState | null; // 현재 데이터
  reviews: ReviewData[];
  isLoading: boolean;
  error: string | null;
  isDirty: boolean; // 수정 여부
  validationErrors: FormErrors;
  activationError: {
    seminar: string;
    application: string;
  };

  // 사용자가 업로드/삭제하여 변경된 파일
  pendingFiles: PendingFiles;
}
