type ChipSeminarProps = {
  seminarNumber: number;
};

const ChipSeminar = ({ seminarNumber }: ChipSeminarProps) => {
  return (
    <button className="w-[84px] h-[25px] bg-grey-900 rounded-4">
      <p className="caption-semibold text-gradient">{seminarNumber}회차 세미나</p>
    </button>
  );
};

export default ChipSeminar;
