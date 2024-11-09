"use client";

import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

function Counter() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [loading, setLoading] = useState(true); // New loading state

  const currentDate = Date.now(); // current timestamp in milliseconds
  const eventDate = new Date("2025-05-07").getTime(); // event date timestamp in milliseconds
  let timeDifference = eventDate - currentDate;

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = Date.now();
      timeDifference = eventDate - now;

      // Check if the event has ended
      if (timeDifference <= 0) {
        setLoading(false); // Event has ended, stop loading
        clearInterval(intervalId);
      } else {
        // Convert the time difference to days, hours, minutes, and seconds
        setDays(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          )
        );
        setMinutes(
          Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
        );
        setSeconds(Math.floor((timeDifference % (1000 * 60)) / 1000));
        setLoading(false); // Loading complete
      }
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [eventDate]);

  return (
    <div className="w-full md:w-1/2 h-auto flex justify-center items-center z-20 mt-3">
      {loading ? (
        // Spinner while loading
        <div className="w-full md:h-[130px] h-[120px] rounded-2xl bg-gradient-to-r from-purple-800 to-cyan-00 flex p-1">
          <div className="w-full h-full rounded-2xl flex flex-row gap-x-2 justify-center items-center">
            <ClipLoader color="#ffffff" loading={loading} size={20} />
            <div className="loader text-white">Loading...</div>
          </div>
        </div>
      ) : timeDifference > 0 ? (
        // Show the countdown timer
        <div className="w-full md:h-[130px] h-[120px] rounded-2xl bg-gradient-to-r from-purple-800 to-cyan-00 flex p-1 pb-4">
          <div className="w-[25%] h-full rounded-2xl flex flex-col justify-center items-center">
            <h1 className="text-white mb-5 md:text-[40px] text-[30px]">
              {days}
            </h1>
            <h1 className="text-white rounded-lg text-[10px] md:text-[15px] border p-2">
              DAYS
            </h1>
          </div>
          <div className="w-[25%] h-full rounded-2xl flex flex-col justify-center items-center">
            <h1 className="text-white mb-5 md:text-[40px] text-[30px]">
              {hours}
            </h1>
            <h1 className="text-white rounded-lg text-[10px] md:text-[15px] border p-2">
              HOURS
            </h1>
          </div>
          <div className="w-[25%] h-full rounded-2xl flex flex-col justify-center items-center">
            <h1 className="text-white mb-5 md:text-[40px] text-[30px]">
              {minutes}
            </h1>
            <h1 className="text-white rounded-lg text-[10px] border md:text-[15px] p-2">
              MINUTES
            </h1>
          </div>
          <div className="w-[25%] h-full rounded-2xl flex flex-col justify-center items-center">
            <h1 className="text-white mb-5 md:text-[40px] text-[30px]">
              {seconds}
            </h1>
            <h1 className="text-white rounded-lg text-[10px] border md:text-[15px] p-2">
              SECONDS
            </h1>
          </div>
        </div>
      ) : (
        // Show "EVENT STARTED" when the event has ended
        <div className="w-full md:h-[130px] h-[120px] rounded-2xl bg-gradient-to-r from-purple-800 to-cyan-00 flex p-1">
          <div className="w-full h-full rounded-2xl flex flex-col justify-center items-center">
            <h1 className="text-white rounded-lg text-[10px] md:text-[15px] border p-2">
              EVENT STARTED
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Counter;
