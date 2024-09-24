import DelegateRegistration from "@/ui/main/deletegate-form/DeletegateForm";
import Headers from "@/ui/sub/headers/Headers";
import Link from "next/link";
import React from "react";

const EventsPage: React.FC = () => {
  return (
    <div className="bg-contain bg-center flex flex-col justify-center items-center">
      <div
        style={{
          backgroundImage: 'url("images/statics/delegates-bg-1.jpg")',
        }}
        className="bg-black bg-opacity-60 w-full md:h-[400px] h-[300px] flex justify-center"
      >
        <div className="bg-black bg-opacity-60 w-full md:py-24 flex justify-center">
          <Headers first="" middle="DELEGATE" last="ENQUIRY" />
        </div>
      </div>

      <div
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("images/statics/bg.jpg")',
          backgroundBlendMode: "overlay",
          backgroundColor:"rgba(0, 0, 0, 0.53)"
        }}
        className="w-full bg-contain py-20 flex flex-col md:flex-row justify-center items-start"
      >
        <DelegateRegistration />
        {/* <div
          className="w-1/3 h-[300px] object-contain rounded-2xl m-5 flex flex-col justify-center items-center"
          style={{
            backgroundImage: 'url("images/statics/delegate.jpg")',
            borderTopLeftRadius: 100,
            borderBottomLeftRadius: 100,
          }}
        >
          <Link
            href={"/sponsors"}
            className="cursor-pointer w-autp px-10 py-2 shadow-md shadow-[#7042f861]/50 border rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 text-[18px] hover:from-cyan-500 hover:to-purple-500"
          >
            Sponsors
          </Link>
          <Link
            href={"/delegates"}
            className="cursor-pointer w-autp px-10 py-2 shadow-md shadow-[#7042f861]/50 border rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 text-[18px] hover:from-cyan-500 hover:to-purple-500"
          >
            Deleagtes
          </Link>
          <Link
            href={"/speakers"}
            className="cursor-pointer w-autp px-10 py-2 shadow-md shadow-[#7042f861]/50 border rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 text-[18px] hover:from-cyan-500 hover:to-purple-500"
          >
            Speakers
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default EventsPage;
