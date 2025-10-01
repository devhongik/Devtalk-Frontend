import DateTimeSelector from './DateTimeSelector';

interface ActiveDateProps {
  seminarStartDate: Date;
  seminarEndDate: Date;
  applicationStartDate: Date;
  applicationEndDate: Date;
  onChange: (
    dateType: 'seminarStartDate' | 'seminarEndDate' | 'applicationStartDate' | 'applicationEndDate',
    newDate: Date
  ) => void;
  error?: string;
}

const ActiveDateForm = ({
  seminarStartDate,
  seminarEndDate,
  applicationStartDate,
  applicationEndDate,
  onChange,
  error,
}: ActiveDateProps) => {
  return (
    <div className="space-y-6">
      {/* 현재 세미나 활성화 기간 */}
      <div className="bg-grey-900 p-6 rounded-10 min-h-[250px]">
        <h2 className="heading-2-bold text-white mb-6">현재 세미나 활성화 기간</h2>
        <div className="flex flex-col gap-y-9">
          <DateTimeSelector
            date={seminarStartDate}
            onDateChange={(newDate) => onChange('seminarStartDate', newDate)}
          />
          <div className="flex items-center gap-x-3 ml-auto">
            <span className="subhead-1-semibold text-white">~</span>
            <DateTimeSelector
              date={seminarEndDate}
              onDateChange={(newDate) => onChange('seminarEndDate', newDate)}
            />
          </div>
        </div>
      </div>

      {/* 세미나 신청 활성화 기간 */}
      <div className="bg-grey-900 p-6 rounded-10 min-h-[250px]">
        <h2 className="heading-2-bold text-white mb-6">세미나 신청 활성화 기간</h2>
        <div className="flex flex-col gap-y-9">
          <DateTimeSelector
            date={applicationStartDate}
            onDateChange={(newDate) => onChange('applicationStartDate', newDate)}
          />
          <div className="flex items-center gap-x-3 ml-auto">
            <span className="subhead-1-semibold text-white">~</span>
            <DateTimeSelector
              date={applicationEndDate}
              onDateChange={(newDate) => onChange('applicationEndDate', newDate)}
            />
          </div>
        </div>
        {error && <p className="text-status-error text-sm mt-3">{error}</p>}
      </div>
    </div>
  );
};

export default ActiveDateForm;
