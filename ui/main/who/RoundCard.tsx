import React from "react";

interface RoundCardProps {
  bgColor: string;
  number: string;
  title: string;
  animation: string;
}

function RoundCard({ bgColor, number, title, animation }: RoundCardProps) {
  return (
    <div
      className={`w-full rounded-full flex justify-between items-center px-5 h-[60px] mt-5 ${bgColor}`}
        data-aos={animation}
    >
      <div className="font-bold text-2xl">{number}</div>{" "}
      <div className="text-sm font-light">{title}</div>
    </div>
  );
}

export default RoundCard;
