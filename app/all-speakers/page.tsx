import Link from "next/link";
import React from "react";

const AllSpeakers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white flex flex-col items-center justify-center px-4">
      <main className="text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">SPEAKERS</h1>
        {/* <h2 className="text-6xl md:text-7xl font-bold mb-10">Speakers</h2> */}

        <p className="text-lg md:text-xl text-white mb-4">
          All Speakers/Advisory Board Members are password protected. Please{" "}
          <Link href="/speakers" className="text-red-500 underline">
            register here
          </Link>{" "}
          to get the password.
        </p>

        <p className="mb-4 text-md md:text-lg">
          To view, please enter your password below.
        </p>

        <form className="flex flex-col items-center space-y-4">
          <input
            type="password"
            placeholder="Enter Password"
            className="px-4 py-2 w-72 md:w-96 rounded-md text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold"
          >
            ENTER
          </button>
        </form>
        <div className="flex-row flex justify-center items-center p-5 w-full z-[999] gap-4">
          <Link
            href={"/sponsors"}
            className="cursor-pointer  w-autp px-10 py-2 shadow-md shadow-[#7042f861]/50 border rounded-xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 text-[10px] hover:from-cyan-500 hover:to-purple-500"
          >
            SPONSORS ENQUIRY
          </Link>
          <Link
            href={"/delegates"}
            className="cursor-pointer w-autp px-10 py-2 shadow-md shadow-[#7042f861]/50 border rounded-xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 text-[10px] hover:from-cyan-500 hover:to-purple-500"
          >
            DELEGATES ENQUIRY
          </Link>
          <Link
            href={"/speakers"}
            className="cursor-pointer w-autp px-10 py-2 shadow-md shadow-[#7042f861]/50 border rounded-xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 text-[10px] hover:from-cyan-500 hover:to-purple-500"
          >
            SPEAKERS ENQUIRY
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AllSpeakers;
