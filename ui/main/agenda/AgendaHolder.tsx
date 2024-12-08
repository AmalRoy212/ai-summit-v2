import React, { useEffect } from "react";
import "./agenta.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS for AOS

function Session({ session, isLast }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="200" // You can increase this delay for a slower start
      data-aos-duration="1200" // Increase duration for a slower fade
      className="flex items-start session-item"
    >
      <div
        className="w-[200px] flex justify-center items-center py-2 rounded-lg shadow-2xl
        text-white"
      >
        {session.time}
      </div>
      <div className="timeline mx-5">
        <div className="h-4 w-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
        {!isLast && <div className="line"></div>}
      </div>
      <div className="p-4 rounded-lg space-y-2 mb-4 flex-grow shadow-lg text-white">
        <h4 className="text-lg font-semibold">{session.title}</h4>
        <ul className="list-disc list-inside text-sm">
          {session.details.map((detail: any, index: any) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        {session.speaker && (
          <>
            <img
              className="w-[100px] h-[100px] object-cover rounded-full"
              src={session.speaker.img}
              alt={session.speaker.img}
            />
            <p className="text-gray-200 italic">
              Speaker: {session.speaker.name} - {session.speaker.position}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

function AgendaDay({ day, sessions }: any) {
  return (
    <div className="border-b border-gray-300 py-4">
      <h3 className="font-semibold text-2xl mb-5">{day}</h3>
      {sessions.map((session: any, index: any) => (
        <Session
          key={index}
          session={session}
          isLast={index === sessions.length - 1}
        />
      ))}
    </div>
  );
}

function AgendaHolder() {
  const agendaDetails = [
    {
      day: "Day 1",
      sessions: [
        {
          time: "8:30AM - 9:30AM",
          title: "Registration and Refreshments",
          details: [],
          logo: "/path/to/your/logo1.jpg",
        },
        {
          time: "9:30AM - 9:40AM",
          title: "Inauguration Ceremony",
          details: [],
          logo: "/path/to/your/logo2.jpg",
        },
        {
          time: "9:40AM - 10:00AM",
          title: "Embarking on the Kingdom's Data Oasis",
          details: [
            "Understanding the significance of Vision 2030",
            "Creating efficient policies and regulatory framework",
            "Empowering Data & AI institutions",
          ],
          speaker: {
            name: "Saeed Alzahrani",
            position: "Senior Advisor to Assistant Director",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmOgvs0vO-5Rsd9j4hwFfL8vc_QWTG5kG4w&s",
          },
          logo: "/path/to/your/logo3.jpg",
        },
        // Additional sessions and logos can be added similarly
      ],
    },
    // Additional days and sessions can be added similarly
  ];

  return (
    <div
      className="container mx-10 px-4 py-10 bg-cover border-[#3b3b3b] rounded-2xl bg-slate-200"
      style={{
        borderWidth: 1,
        backgroundImage: 'url("images/statics/delegate.jpg")',
      }}
    >
      {agendaDetails.map((agenda, index) => (
        <AgendaDay key={index} day={agenda.day} sessions={agenda.sessions} />
      ))}
    </div>
  );
}

export default AgendaHolder;
