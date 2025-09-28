interface ChipProps {
  text: string;
  className?: string;
}

export const Chip = ({ text, className = '' }: ChipProps) => {
  return (
    <button
      className={`
        flex justify-center items-center gap-[8px]
        px-[12px] py-[8px]
        bg-grey-800 rounded-8
        ${className}
      `}
    >
      <p className="body-2-semibold text-gradient">{text}</p>
    </button>
  );
};
