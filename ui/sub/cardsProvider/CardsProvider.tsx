import { BsBank2 } from "react-icons/bs";
import { AiFillInsurance } from "react-icons/ai";
import { SiCashapp } from "react-icons/si";
import { GiMining, GiOilRig } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCartCheckFill } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbPigMoney } from "react-icons/tb";
import { BiSolidInstitution } from "react-icons/bi";
import { PiCassetteTapeFill } from "react-icons/pi";
import { GiDecapitation } from "react-icons/gi";
import { RiGovernmentFill, RiMentalHealthFill } from "react-icons/ri";

const items = [
  // {
  //   title: "Government & Regulatory",
  //   element: <RiGovernmentFill size={45} />,
  // },
  {
    title: "Venture Capitalist",
    element: <GiDecapitation size={45} />,
  },
  {
    title: "Banks & Financial",
    element: <BsBank2 size={40} />,
  },
  {
    title: "Insurance",
    element: <AiFillInsurance size={45} />,
  },
  {
    title: "Telecom",
    element: <GiOilRig size={45} />,
  },
  {
    title: "Private Fundraising",
    element: <PiCassetteTapeFill size={48} />,
  },
];

const itemsOne = [
  {
    title: "Healthcare & MedTech",
    element: <RiMentalHealthFill size={45} />,
  },
  {
    title: "Utilities & Public Services",
    element: <TbTruckDelivery size={45} />,
  },
  {
    title: "Financial Advisory Services",
    element: <TbPigMoney size={45} />,
  },
  {
    title: "SME Financial Institutions",
    element: <BiSolidInstitution size={45} />,
  },
  {
    title: "Retail & E-commerce",
    element: <SiCashapp size={45} />,
  },
];
const itemsTwo = [
  {
    title: "FMCG & Consumer Goods ",
    element: <BsCartCheckFill size={45} />,
  },
  {
    title: "Corporate Treasury & Large Enterprises",
    element: <GiMining size={43} />,
  },
  {
    title: "Finance & Treasury Management",
    element: <GiTakeMyMoney size={48} />,
  },
];

function BlockHelper({ title, element }: any) {
  return (
    <div
      className="flex flex-col items-center md:w-1/5 w-full"
      data-aos="fade-up"
      data-aos-anchor="[data-aos-id-blocks]"
    >
      <div className="w-20 h-20 bg-white rounded-full flex justify-center items-center">
        {element}
      </div>
      <h3 className="mb-2 text-center shadow-2xl text-white mt-4 border border-slate-400 py-1  rounded-xl w-full flex justify-center items-center">
        {title}
      </h3>
    </div>
  );
}

export default function Blocks() {
  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto">
      <div
        className="flex md:flex-row flex-col gap-x-3 gap-y-2"
        data-aos-id-blocks
      >
        {items.map((data) => (
          <BlockHelper element={data.element} title={data.title} />
        ))}
      </div>
      <div
        className="flex md:flex-row flex-col gap-x-3 mt-3 gap-y-2"
        data-aos-id-blocks
      >
        {itemsOne.map((data) => (
          <BlockHelper element={data.element} title={data.title} />
        ))}
      </div>
      <div
        className="flex md:flex-row flex-col gap-x-3 mt-3 gap-y-2 justify-center"
        data-aos-id-blocks
      >
        {itemsTwo.map((data) => (
          <BlockHelper element={data.element} title={data.title} />
        ))}
      </div>
    </div>
  );
}
