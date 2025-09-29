import FormField from './FormField';
import AdminPresentationUpload from '../../upload/AdminPresentationUpload';
import type { SeminarFormData } from '../../../../types/SeminarManage/seminar';

interface SeminarFormProps {
  data: SeminarFormData;
  onChange: (updatedData: Partial<SeminarFormData>) => void;
  errors: { date?: string };
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const SeminarForm: React.FC<SeminarFormProps> = ({ data, onChange, errors, onBlur }) => {
  // Input 이벤트 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  // 파일 업로드 핸들러
  const handleFileUpload = (newFiles: File[]) => {
    onChange({ presentationFiles: [...data.presentationFiles, ...newFiles] });
  };

  // 파일 제거 핸들러
  const handleFileRemove = (indexToRemove: number) => {
    const updatedFiles = data.presentationFiles.filter((_, index) => index !== indexToRemove);
    onChange({ presentationFiles: updatedFiles });
  };

  return (
    <div className="bg-grey-900 p-6 rounded-10">
      <h2 className="heading-2-bold text-white mb-[24px]">세미나 상세정보</h2>

      <form>
        <FormField
          label="제목"
          id="title"
          placeholder="제목을 입력해주세요."
          value={data.title}
          onChange={handleInputChange}
        />
        <FormField
          label="일정"
          id="date"
          placeholder="일정을 입력해주세요. (ex: 2025.10.8.18:00)"
          value={data.date}
          onChange={handleInputChange}
          onBlur={onBlur}
          error={errors.date}
        />
        <FormField
          label="장소"
          id="location"
          placeholder="장소를 입력해주세요."
          value={data.location}
          onChange={handleInputChange}
        />
        <FormField
          label="주제"
          id="topic"
          placeholder="주제를 입력해주세요. (20자 이내)"
          value={data.topic}
          onChange={handleInputChange}
          maxLength={20}
        />

        <p className="subhead-1-medium text-white mb-[16px]">발표자료</p>
        <AdminPresentationUpload onUpload={handleFileUpload} onRemove={handleFileRemove} />
      </form>
    </div>
  );
};

export default SeminarForm;
