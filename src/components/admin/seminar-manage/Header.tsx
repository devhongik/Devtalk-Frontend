interface HeaderProps {
  title: string;
  showDeleteButton: boolean;
  onDelete?: () => void;
}

const Header = ({ title, showDeleteButton, onDelete }: HeaderProps) => (
  <header className="sticky top-0 z-20 h-[70px] mb-10 bg-background/90 mx-auto flex justify-between items-center min-w-[850px] max-w-[1030px]">
    <h1 className="heading-1-bold text-white">{title}</h1>
    {showDeleteButton && (
      <button
        className="heading-3-semibold text-status-error hover:text-status-error/80 cursor-pointer"
        onClick={onDelete}
      >
        세미나 삭제하기
      </button>
    )}
  </header>
);

export default Header;
