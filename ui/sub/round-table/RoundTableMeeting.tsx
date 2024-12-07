import { useRouter } from "next/navigation";
import React from "react";

const ExecutiveRoundtable = () => {
  const router = useRouter();
  return (
    <section className="bg-darkBlue text-white py-10 mb-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-center">
        {/* Left Image Section */}
        {/* <div className="flex justify-center lg:order-1 lg:w-1/3">
          <div
            className="p-6 rounded-lg shadow-lg w-64 lg:w-72 flex justify-center items-center"
            style={{ animationDelay: "0.2s" }}
          >
            <img
              src="/images/index/startup.png"
              alt="Idea"
              className="w-80 lg:w-96"
            />
          </div>
        </div> */}

        {/* Right Content Section */}
        <div className="relative lg:w-2/3 px-10 mt-10 lg:mt-0 rounded-2xl shadow-2xl overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/vidoe23.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="relative z-10  py-20 px-6 lg:px-10 rounded-2xl shadow-2xl">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                The Executive
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  Roundtable
                </span>{" "}
                Dialogue
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                The Executive Roundtable Discussion at our conference serves as
                a paramount platform for top-level decision-makers to converge
                and engage in high-level strategic dialogues. This exclusive
                session brings together C-suite executives, industry leaders,
                and visionaries to explore critical issues, share insights, and
                chart the course for the future of the industry. With a focus on
                fostering collaboration and driving innovation, the Executive
                Roundtable promises to deliver thought-provoking discussions,
                actionable insights, and unparalleled networking opportunities.
              </p>
              <div className="w-full flex justify-center">
                <button
                  onClick={() => router.push("/sponsors")}
                  className="cursor-pointer  w-auto px-10 py-2 shadow-md shadow-[#7042f861]/50 border rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 text-[10px] hover:from-cyan-500 hover:to-purple-500"
                >
                  Register now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveRoundtable;
