import React from "react";

const ExecutiveRoundtable = () => {
  return (
    <section className="bg-darkBlue text-white py-10 mb-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-center">
        {/* Left Image Section */}
        <div className="flex justify-center lg:order-1 lg:w-1/3">
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
        </div>

        {/* Right Content Section */}
        <div className="lg:w-1/2 px-6 mt-10 lg:mt-0">
          <div className="text-center lg:text-left">
            <div className="mb-4">
              <span className="text-lightBlue uppercase tracking-wide text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Roundtable
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-end">
              The Executive <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Roundtable</span>{" "}
              Dialogue
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              The Executive Roundtable Discussion at our conference serves as a
              paramount platform for top-level decision-makers to converge and
              engage in high-level strategic dialogues. This exclusive session
              brings together C-suite executives, industry leaders, and
              visionaries to explore critical issues, share insights, and chart
              the course for the future of the industry. With a focus on
              fostering collaboration and driving innovation, the Executive
              Roundtable promises to deliver thought-provoking discussions,
              actionable insights, and unparalleled networking opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveRoundtable;
