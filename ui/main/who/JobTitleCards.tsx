interface JobTitleCardsProps {
  bgColor: string;
  number: string;
  title: string;
  animation: string;
}

export default function JobTitleCards({
  bgColor,
  number,
  title,
  animation,
}: JobTitleCardsProps) {
  return (
    <div
      className={`w-full rounded-2xl shadow-2xl flex justify-between items-center px-5 min-h-[50px]  mt-5 ${bgColor}`}
      data-aos={animation}
    >
      <div className="font-bold text-lg">{number}</div>
      <div className="text-xs font-medium border border-black px-3 py-1 rounded-lg">
        {title}
      </div>
    </div>
  );
}
