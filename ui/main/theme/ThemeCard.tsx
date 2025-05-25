// ThemeCard.tsx
import { FC } from "react";
import * as Icons from "@heroicons/react/24/outline";

interface ThemeCardProps {
  title: string;
  icon: keyof typeof Icons;
}

export const ThemeCard: FC<ThemeCardProps> = ({ title, icon }) => {
  const IconComponent = Icons[icon];
  return (
    <div data-aos="zoom-in" className="relative flex justify-center items-center w-52 flex-col mt-32">
      <div className="bg-[#ac00e6] border border-dark-100 shadow-2xl p-5 rounded-xl mb-4 z-10">
        {IconComponent && <IconComponent className="h-10 w-10 text-white" />}
      </div>
      <div className="bg-[#0d0622] absolute top-10 z-0 border border-dark-100 rounded-2xl shadow-2xl p-6 flex flex-col items-center w-52 h-44 text-center">
        <p className="font-semibold text-lg my-auto text-white">{title}</p>
      </div>
    </div>
  );
};
