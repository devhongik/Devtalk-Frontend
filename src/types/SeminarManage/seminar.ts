export interface Speaker {
  profileUrl: File | null;
  name: string;
  organization: string;
  history: string;
  title: string;
  description: string;
}

export interface Review {
  reviewId: number;
  score: number;
  department: string;
  grade: number;
  content: string;
  nextTopic: string;
  isPublic: boolean;
  isFeatured?: boolean;
  createdAt: string;
}

export interface SeminarFormData {
  title: string;
  date: string;
  location: string;
  topic: string;
  presentationFiles: File[];
}

export interface SeminarDetails {
  mainImageUrl: File | null;
  title: string;
  date: string;
  location: string;
  topic: string;
  presentationFiles: File[];
  speakers: Speaker[];
  liveLink: string;
  reviews: Review[];
  seminarStartDate: Date;
  seminarEndDate: Date;
  applicationStartDate: Date;
  applicationEndDate: Date;
}

export interface FormErrors {
  date?: string;
}

export interface SeminarState {
  initialState: SeminarDetails | null;
  currentState: SeminarDetails | null;
  isLoading: boolean;
  error: string | null;
  isDirty: boolean;
  validationErrors: FormErrors;
  activationError: string;
}
