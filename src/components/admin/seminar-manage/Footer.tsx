interface FooterProps {
  saveButtonText: string;
  isDirty: boolean;
  hasErrors: boolean;
  onSave: () => void;
  onCancel: () => void;
}

const Footer = ({ saveButtonText, isDirty, hasErrors, onSave, onCancel }: FooterProps) => (
  <footer className="max-w-[1030px] min-w-[850px] mx-auto">
    <div className="flex justify-end gap-3 px-8">
      <button
        className="w-56 h-[68px] px-6 py-3 heading-3-semibold bg-grey-700 text-black rounded-10 hover:bg-grey-600 cursor-pointer"
        onClick={onCancel}
      >
        취소하기
      </button>
      <button
        disabled={!isDirty || hasErrors}
        className="w-56 h-[68px] px-6 py-3 heading-3-semibold bg-green-300 text-black rounded-10 
                  hover:bg-green-400 disabled:bg-grey-500 disabled:cursor-not-allowed cursor-pointer"
        onClick={onSave}
      >
        {saveButtonText}
      </button>
    </div>
  </footer>
);

export default Footer;
