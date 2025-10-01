import { useState } from 'react';
import { SectionHeader } from '../../components/SeminarApply/SectionHeader';
import { formatStudentId, validateStudentId } from '../../utils/formatStudentId';

export const StudentIdSection = () => {
  const [studentId, setStudentId] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = formatStudentId(e.target.value);
    setStudentId(value);

    if (value && !validateStudentId(value)) {
      setError('학번은 알파벳 1자리 + 숫자 6자리여야 합니다.');
    } else {
      setError('');
    }
  };

  return (
    <div className="flex flex-col gap-12">
      <SectionHeader title="학번을 적어주세요" required />

      {/* relative 컨테이너 */}
      <div className="relative">
        <input
          value={studentId}
          onChange={handleChange}
          placeholder="ex. C012345"
          className={`bg-grey-800 w-full h-14 rounded-8 placeholder:text-grey-300 px-16
                      outline-none border border-transparent focus:border-grey-500`}
        />
        {error && <p className="absolute left-0 top-full mt-1 text-red-500 text-sm">{error}</p>}
      </div>
    </div>
  );
};
