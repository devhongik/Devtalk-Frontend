interface HeaderProps {
  title: string;
  showDeleteButton: boolean;
  onDelete?: () => void;
}

const Header = ({ title, showDeleteButton, onDelete }: HeaderProps) => (
  <header className="sticky top-0 z-20 h-[70px] mb-10 bg-background/90">
    <div className="max-w-[1030px] min-w-[850px] h-full mx-auto flex justify-between items-center">
      <h1 className="heading-1-bold text-white">{title}</h1>
      {showDeleteButton && (
        <button
          className="heading-3-semibold text-status-error hover:text-status-error/80 cursor-pointer"
          onClick={onDelete}
        >
          세미나 삭제하기
        </button>
      )}
    </div>
  </header>
);

export default Header;
