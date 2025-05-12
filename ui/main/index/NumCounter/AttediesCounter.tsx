import { Counter } from "@/ui/sub/index/counter/Counter";
import { attendies_Data } from "@/constants/attendies";

export default function SummitAttendees() {
  return (
    <div className="container py-10 z-11 w-full h-auto mb-10">
      <div className="flex flex-wrap justify-center items-center mx-2">
        {attendies_Data.map((attend, index) => (
          <Counter
            key={index}
            index={index}
            label={attend.label}
            countTo={attend.toCount}
            duration={8000}
          />
        ))}
      </div>
    </div>
  );
}
