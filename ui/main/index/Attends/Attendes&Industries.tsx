"use client";

import Typography from "@/ui/sub/headers/Typography";
import SummitAttendees from "../NumCounter/AttediesCounter";

export default function AttedeesAndIndustries() {
  return (
    <div id="attendies" className="max-w-6xl mx-auto px-4 sm:px-6 pt-20">
      <Typography first="ATTENDEES" middle="&" last="INDUSTRIES" />
      <div className="py-12 md:py-1 grid gap-20 border-gray-800">
        <SummitAttendees />
      </div>
    </div>
  );
}
