function SeminaDeailCard({ id }: { id: number }) {
  return (
    <div className="w-[375px] h-[449px] gap-20 p-20 flex flex-col">
      <div className="w-[335px] h-[404px] gap-31 flex flex-col items-center jusitfy-center">
        <div className="h-[68px] flex flex-col gap-8 justify-between">
          <div className="subhead-2-medium text-grey-100">{id}회차</div>
          <div className="text"></div>
        </div>
      </div>
    </div>
  );
}

export default SeminaDeailCard;
