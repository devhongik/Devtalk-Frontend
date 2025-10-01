import { useState } from 'react';
import { SectionHeader } from '../../components/SeminarApply/SectionHeader';
import { formatStudentId } from '../../utils/formatStudentId';

export const StudentIdSection = () => {
  const [studentId, setStudentId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = formatStudentId(e.target.value);
    setStudentId(value);
  };

  return (
    <div className="flex flex-col gap-12">
      <SectionHeader title="학번을 적어주세요" required />
      <input
        value={studentId}
        onChange={handleChange}
        placeholder="ex. C012345"
        className="bg-grey-800 w-full h-14 rounded-8 placeholder:text-grey-300 px-16
                   outline-none border border-transparent focus:border-grey-500"
      />
    </div>
  );
};
