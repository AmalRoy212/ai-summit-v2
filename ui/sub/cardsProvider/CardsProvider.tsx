import { BsBank2 } from "react-icons/bs";
import SubHeadings from "../headers/SubHeadings";
import { RiGovernmentFill, RiMentalHealthFill } from "react-icons/ri";
import { AiFillInsurance } from "react-icons/ai";
import { SiCashapp, SiDsautomobiles } from "react-icons/si";
import { GiMining, GiOilRig } from "react-icons/gi";
import { FaOilCan } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { PiVideoCameraFill } from "react-icons/pi";
import { FaAvianex, FaStumbleuponCircle } from "react-icons/fa6";
import { TbTruckDelivery, TbVacuumCleaner } from "react-icons/tb";
import { IoMdConstruct } from "react-icons/io";
import { MdAgriculture, MdCastForEducation } from "react-icons/md";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const items = [
  {
    title: "GOVERNMENT",
    element: <RiGovernmentFill size={45} />,
  },
  {
    title: "BANK",
    element: <BsBank2 size={40} />,
  },
  {
    title: "INSURANCE",
    element: <AiFillInsurance size={45} />,
  },
  {
    title: "E-COMMERCE",
    element: <SiCashapp size={45} />,
  },
  {
    title: "TELECOM",
    element: <GiOilRig size={45} />,
  },
  {
    title: "OIL & GAS",
    element: <FaOilCan size={45} />,
  },
];

const itemsOne = [
  {
    title: "RETAIL",
    element: <HiShoppingCart size={45} />,
  },
  {
    title: "HEALTHCARE",
    element: <RiMentalHealthFill size={40} />,
  },
  {
    title: "MINING",
    element: <GiMining size={45} />,
  },
  {
    title: "FMCG",
    element: <FaStumbleuponCircle size={45} />,
  },
  {
    title: "MEDIA",
    element: <PiVideoCameraFill size={45} />,
  },
  {
    title: "AVIATION",
    element: <FaAvianex size={45} />,
  },
];
const itemsTwo = [
  {
    title: "LOGISTICS",
    element: <TbTruckDelivery size={45} />,
  },
  {
    title: "CONSTRUCTION",
    element: <IoMdConstruct size={40} />,
  },
  {
    title: "EDUCATION",
    element: <MdCastForEducation size={45} />,
  },
  {
    title: "AGRICULTURE",
    element: <MdAgriculture size={45} />,
  },
  {
    title: "HOSPITALITY",
    element: <TbVacuumCleaner size={45} />,
  },
  {
    title: "AUTOMOBILE",
    element: <SiDsautomobiles size={45} />,
  },
];

function BlockHelper({ title, element }: any) {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #8a34cc 0%, #6a34cc 50%, #345dcc 100%)",
      }}
      className="relative flex flex-col items-center w-full p-2 rounded-2xl"
      data-aos="fade-up"
      data-aos-anchor="[data-aos-id-blocks]"
    >
      <div className="w-20 h-20 mb-4 bg-white rounded-full flex justify-center items-center">
        {element}
      </div>
      <h3 className="mb-2 text-center text-white">{title}</h3>
    </div>
  );
}

export default function Blocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* <SubHeadings fontSize={28} heading="INDUSTRY" /> */}
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200 mb-10"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            BY{" "}
          </span>
          JOB TITLE
        </motion.div>
        <div className="py-12 md:py-20 border-gray-800">
          {/* Section header */}
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="mb-4">Empower Your Industry Knowledge</h2>
            <p className="text-xl text-gray-400">Cultivate your expertise and join us as an active participant in shaping the future of education.</p>
          </div> */}

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-6 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {items.map((data) => (
              <BlockHelper element={data.element} title={data.title} />
            ))}
            {/* <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-20 h-20 mb-4 bg-white rounded-full p-3">
                <img className="w-full h-full" src="/images/cards/flowchart.png" alt="" />
              </div>
              <h3 className="mb-2">Ministries & Authorities</h3>
              <p className="text-base text-gray-400 text-center">Government institutions and regulators responsible for setting standards and framework for the education eco-system</p>
            </div>

            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-20 h-20 mb-4 bg-white rounded-full p-3">
                <img className="w-full h-full" src="/images/cards/collage.png" alt="" />
              </div>
              <h3 className="mb-2">Head of Educational Institutions</h3>
              <p className="text-base text-gray-400 text-center">Executive Principal, Principal, Head Taeacher, Deputy Head, Head of Primary & Secondary, Head of Universities etc</p>
            </div>

            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-20 h-20 mb-4 bg-white rounded-full p-3">
                <img className="w-full h-full" src="/images/cards/Inversiones.png" alt="" />
              </div>
              <h3 className="mb-2">Investors & Owners</h3>
              <p className="text-base text-gray-400 text-center">Private Equity, Venture Capital, Impact Investors, Family Businesses & Investment Authorities</p>
            </div>

            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-20 h-20 mb-4 bg-white rounded-full p-3">
                <img className="w-full h-full" src="/images/cards/network.png" alt="" />
              </div>
              <h3 className="mb-2">Key Stakeholders</h3>
              <p className="text-base text-gray-400 text-center">Active players in the education ecosystem</p>
            </div>

            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-20 h-20 mb-4 bg-white rounded-full p-3">
                <img className="w-full h-full" src="/images/cards/flowchart.png" alt="" />
              </div>
              <h3 className="mb-2">Head of Departments</h3>
              <p className="text-base text-gray-400 text-center">Service / Solution providers, product suppliers, consultants, technology vendors & companies supporting the education eco-system</p>
            </div>

            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-20 h-20 mb-4 bg-white rounded-full p-3">
                <img className="w-full h-full" src="/images/cards/enterpriser.png" alt="" />
              </div>
              <h3 className="mb-2">Enterprise Organizations</h3>
              <p className="text-base text-gray-400 text-center">Government institutions and regulators responsible for setting standards and framework for the education eco-system</p>
            </div> */}
          </div>
          <div
            className="max-w-sm m-2 grid gap-8 md:grid-cols-2 lg:grid-cols-6 lg:gap-2 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {itemsOne.map((data) => (
              <BlockHelper element={data.element} title={data.title} />
            ))}
          </div>
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-6 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {itemsTwo.map((data) => (
              <BlockHelper element={data.element} title={data.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
