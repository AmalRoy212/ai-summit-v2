import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

function Counter() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [loading, setLoading] = useState(true);

  const currentDate = Date.now();
  const eventDate = new Date("2025-07-02").getTime();
  let timeDifference = eventDate - currentDate;

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = Date.now();
      timeDifference = eventDate - now;

      if (timeDifference <= 0) {
        setLoading(false);
        clearInterval(intervalId);
      } else {
        setDays(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((timeDifference % (1000 * 60)) / 1000));
        setLoading(false);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [eventDate]);

  return (
    <div className="flex justify-center items-center w-full h-auto mt-3">
      {loading ? (
        <div className="flex items-center justify-center w-1/3 h-[120px] p-1 rounded-2xl gap-x-3">
          <ClipLoader color="#ffffff" loading={loading} size={20} />
          <div className="text-white">Loading...</div>
        </div>
      ) : timeDifference > 0 ? (
        <div className="flex w-4/5 h-[120px] p-1 rounded-2xl">
          {[days, hours, minutes, seconds].map((time, index) => (
            <div key={index} className="flex flex-col items-center justify-center w-1/4">
              <h1 className="text-white text-tick md:text-[50px] text-[30px] mb-2">{time}</h1>
              <h1 className="text-white text-tick  text-[15px]">{["DAYS", "HOURS", "MINUTES", "SECONDS"][index]}</h1>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-[120px] p-1 rounded-2xl">
          <h1 className="text-white text-[15px] border p-2">EVENT STARTED</h1>
        </div>
      )}
    </div>
  );
}

export default Counter;
