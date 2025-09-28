import { useState } from 'react';
import FormField from '../SeminarManage/FormField';
import AdminPresentationUpload from '../upload/AdminPresentationUpload';

interface FormErrors {
  date?: string;
}

const SeminarForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    topic: '',
  });
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});

  // Input 이벤트 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 유효성 검사
  const validate = (): FormErrors => {
    const newErros: FormErrors = {};
    const dateRegex = /^\d{4}\.\d{1,2}\.\d{1,2}\.\d{1,2}:\d{2}$/;

    if (formData.date && !dateRegex.test(formData.date)) {
      newErros.date = '올바른 형식(YYYY.MM.DD.HH:mm)으로 입력해주세요';
    }

    return newErros;
  };

  // Blur 이벤트 핸들러
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const validationErrors = validate();
    if (e.target.name === 'date') {
      setErrors((prev) => ({ ...prev, date: validationErrors.date }));
    }
  };

  // 파일 업로드 핸들러
  const handleFileUpload = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  // 파일 제거 핸들러
  const handleFileRemove = (indexToRemove: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="bg-grey-900 p-6 rounded-10">
      <h2 className="heading-2-bold text-white mb-[24px]">세미나 상세정보</h2>

      <form>
        <FormField
          label="제목"
          id="title"
          placeholder="제목을 입력해주세요."
          value={formData.title}
          onChange={handleInputChange}
        />
        <FormField
          label="일정"
          id="date"
          placeholder="일정을 입력해주세요. (ex: 2025.10.8.18:00)"
          value={formData.date}
          onChange={handleInputChange}
          onBlur={handleBlur}
          error={errors.date}
        />
        <FormField
          label="장소"
          id="location"
          placeholder="장소를 입력해주세요."
          value={formData.location}
          onChange={handleInputChange}
        />
        <FormField
          label="주제"
          id="topic"
          placeholder="주제를 입력해주세요. (20자 이내)"
          value={formData.topic}
          onChange={handleInputChange}
          maxLength={20}
        />

        <p className='subhead-1-medium text-white mb-[16px]'>발표자료</p>
        <AdminPresentationUpload onUpload={handleFileUpload} onRemove={handleFileRemove} />
      </form>
    </div>
  );
};

export default SeminarForm;
