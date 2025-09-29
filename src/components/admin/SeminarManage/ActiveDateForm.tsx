import DateTimeSelector from './DateTimeSelector';

interface ActiveDateProps {
  seminarDate: Date;
  applicationDate: Date;
  onChange: (dateType: 'seminarDate' | 'applicationDate', newDate: Date) => void;
  error?: string;
}

const ActiveDateForm: React.FC<ActiveDateProps> = ({
  seminarDate,
  applicationDate,
  onChange,
  error,
}) => {
  return (
    <div className="space-y-6">
      {/* 현재 세미나 활성화 기간 */}
      <div className="bg-grey-900 p-6 rounded-10 h-[170px]">
        <h2 className="heading-2-bold text-white mb-6">현재 세미나 활성화 기간</h2>
        <DateTimeSelector
          date={seminarDate}
          onDateChange={(newDate) => onChange('seminarDate', newDate)}
        />
      </div>

      {/* 세미나 신청 활성화 기간 */}
      <div className="bg-grey-900 p-6 rounded-10 h-[170px]">
        <h2 className="heading-2-bold text-white mb-6">세미나 신청 활성화 기간</h2>
        <DateTimeSelector
          date={applicationDate}
          onDateChange={(newDate) => onChange('applicationDate', newDate)}
        />
        {error && <p className="text-status-error text-sm mt-3">{error}</p>}
      </div>
    </div>
  );
};

export default ActiveDateForm;
