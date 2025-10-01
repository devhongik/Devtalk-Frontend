import { useState } from 'react';
import { SectionHeader } from '../../components/SeminarApply/SectionHeader';
import { formatPhoneNumber } from '../../utils/formatPhoneNumber';

export const PhoneSection = () => {
  const [phone, setPhone] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhoneNumber(e.target.value));
  };

  return (
    <div className="flex flex-col gap-12">
      <SectionHeader title="연락처를 적어주세요" required />
      <input
        value={phone}
        onChange={handleChange}
        className="bg-grey-800 w-full h-14 rounded-8 placeholder:text-grey-300 px-16
                   outline-none border border-transparent focus:border-grey-500"
        placeholder="ex. 010-0000-0000"
        maxLength={13} // 010-1234-5678 → 최대 13자리
      />
    </div>
  );
};
