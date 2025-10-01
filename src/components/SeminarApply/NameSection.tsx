import { SectionHeader } from '../../components/SeminarApply/SectionHeader';

export const NameSection = () => (
  <div className="flex flex-col gap-12">
    <SectionHeader title="이름을 적어주세요" required />
    <input
      className="bg-grey-800 w-full h-14 rounded-8 placeholder:text-grey-300 px-16
                 outline-none border border-transparent focus:border-grey-500"
      placeholder="ex. 김홍익"
    />
  </div>
);
