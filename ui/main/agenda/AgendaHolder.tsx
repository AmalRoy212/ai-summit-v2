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
        className="max-w-[300px] min-w-[300px] flex justify-center items-center py-2 rounded-lg shadow-2xl
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
  // const agendaDetails = [
  //   {
  //     day: "Day 1",
  //     sessions: [
  //       {
  //         time: "8:30 AM - 09:30 AM",
  //         title: "Registration and Networking",
  //         details: [],
  //         logo: "/path/to/your/logo1.jpg",
  //       },
  //       {
  //         time: "09:30 AM - 09:40 AM",
  //         title: "Welcome Address by Organizer",
  //         details: [],
  //         logo: "/path/to/your/logo2.jpg",
  //       },
  //       {
  //         time: "09:40 AM – 10:00 AM",
  //         title: "Opening Keynote Address",
  //         details: [],
  //         logo: "/path/to/your/logo2.jpg",
  //       },
  //       {
  //         time: "9:40AM - 10:00AM",
  //         title: "Embarking on the Kingdom's Data Oasis",
  //         details: [
  //           "Understanding the significance of Vision 2030",
  //           "Creating efficient policies and regulatory framework",
  //           "Empowering Data & AI institutions",
  //         ],
  //         speaker: {
  //           name: "Saeed Alzahrani",
  //           position: "Senior Advisor to Assistant Director",
  //           img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmOgvs0vO-5Rsd9j4hwFfL8vc_QWTG5kG4w&s",
  //         },
  //         logo: "/path/to/your/logo3.jpg",
  //       },
  //       // Additional sessions and logos can be added similarly
  //     ],
  //   },
  //   // Additional days and sessions can be added similarly
  // ];

  const agendaDetails = [
    {
      day: "Day 1",
      sessions: [
        {
          time: "8:30 AM - 09:30 AM",
          title: "Registration and Networking",
          details: [],
          logo: "/path/to/your/logo1.jpg",
        },
        {
          time: "09:30 AM - 09:40 AM",
          title: "Welcome Address by Organizer",
          details: [],
          logo: "/path/to/your/logo2.jpg",
        },
        {
          time: "09:40 AM – 10:00 AM",
          title: "Opening Keynote Address",
          details: [],
          logo: "/path/to/your/logo2.jpg",
        },
        {
          time: "10:00 AM - 10:30 AM",
          title:
            "TECH SPOTLIGHT: Seamlessly Connect, Intelligently Automate, and Powerfully Scale AI-Driven Experiences",
          details: [
            "Why is achieving operational efficiency critical for business success in today’s fast-changing world?",
            "What factors should organizations consider when developing digital platforms for scalability?",
            "How can businesses ensure the longevity of their digital platforms in unpredictable environments?",
            "What role do reusable APIs play in creating flexible and scalable digital platforms?",
            "How can integrated platforms help organizations adapt and thrive in a rapidly evolving landscape?",
          ],
          logo: "/path/to/your/logo3.jpg",
        },
        {
          time: "10:30 AM - 11:00 AM",
          title:
            "PANEL DISCUSSION: Harnessing the Synergy of Integration, Data Orchestration, and Intelligent Automation",
          details: [
            "How can businesses adapt their operations to thrive in a digitally interconnected world?",
            "What are the key benefits of breaking silos and enabling real-time data insights for organizations?",
            "How do technologies like iPaaS and AI-powered automation drive innovation and scalability?",
            "In what ways can integrated systems enhance customer experiences and operational efficiency?",
            "What strategies ensure resilience and sustainable growth in the face of rapid digital evolution?",
          ],
          logo: "/path/to/your/logo3.jpg",
        },
        {
          time: "11:00 AM - 11:30 AM",
          title:
            "TECH SPOTLIGHT: Data Management and Virtualization – Enhancing Data Access and Agility",
          details: [
            "How do data management and virtualization solutions help businesses access, integrate, and manage data effectively?",
            "In what ways does data virtualization enhance agility and streamline operations?",
            "How can simplifying data access across diverse systems reduce complexity for organizations?",
            "What impact does improved data integration have on supporting better decision-making?",
            "How can businesses leverage data virtualization to remain competitive in a dynamic environment?",
          ],
          logo: "/path/to/your/logo3.jpg",
        },
        {
          time: "11:30 AM - 12:00 PM",
          title: "TECH SPOTLIGHT: Unlocking the Potential of Generative AI",
          details: [
            "How does Generative AI enhance interactivity and personalization through advanced chatbots and recommendation systems?",
            "What role does GenAI play in driving innovation and economic growth across various industries?",
            "What are the primary challenges associated with the widespread implementation of Generative AI?",
            "How can organizations address data privacy, security, and governance concerns to ensure effective GenAI deployment?",
            "What steps are necessary to unlock the full potential of Generative AI in transforming business and society?",
          ],
          logo: "/path/to/your/logo3.jpg",
        },
        {
          time: "12:00 PM – 12:30 PM",
          title: "Networking Coffee Break",
          details: [],
          logo: "/path/to/your/logo1.jpg",
        },
        {
          time: "12:30 PM – 01:00 PM",
          title:
            "PANEL DISCUSSION: How can Companies Leverage Intelligent Automation to Align Strategy",
          details: [
            "What are the primary challenges companies face when implementing intelligent automation strategies?",
            "How can organizations develop and adapt their strategies to leverage machine learning and automation technologies effectively?",
            "What are the key considerations for selecting and implementing automation technologies, considering the vast amount of data and regulatory requirements?",
            "How can companies ensure regulations compliance while delivering AI-driven solutions tailored to department’s needs?",
            "What criteria should be used to choose the most suitable technology for each automation problem, ensuring alignment with company goals and objectives?",
          ],
          logo: "/path/to/your/logo3.jpg",
        },
        {
          time: "01:00 PM – 1:30 PM",
          title:
            "TECH SPOTLIGHT: Transforming Backlog Chaos into Seamless Solutions with Low-Code and No-Code Magic",
          details: [
            "What challenges do CIOs face in managing the growing backlog of internal applications and processes?",
            "Why are many enterprises still reliant on manual methods like Excel sheets and emails for tasks that could be automated?",
            "How do inefficient workflows and delayed app launches impact employee productivity and satisfaction?",
            "What are the limitations of many tools available in the market for addressing app and process backlogs?",
            "What strategies can enterprises adopt to effectively overcome app and process backlogs while enabling teams to focus on innovation and growth?",
          ],
          logo: "/path/to/your/logo3.jpg",
        },
        {
          time: "01:30 PM – 2:00 PM",
          title:
            "TECH SPOTLIGHT: Enterprise Integration: Harnessing the Power of a Real-Time, Composable Data Architecture",
          details: [
            "How are integration technologies redefining the landscape of Business Process Management and real-time business intelligence?",
            "What tools and strategies ensure seamless system connectivity and scalability across diverse environments?",
            "How does the 'build once, deploy anywhere' capability transform multi-cloud deployment for enterprises?",
            "In what ways can actionable insights derived from integration technologies drive strategic decision-making?",
            "How can businesses leverage integration technologies to stay competitive and future-ready in a dynamic market?",
          ],
          logo: "/path/to/your/logo3.jpg",
        },
        {
          time: "02:00 PM – 2:30 PM",
          title:
            "FIRESIDE CHAT: How Can Organizations Drive Digital Transformation to Enhance Customer Experience and Operational Efficiency?",
          details: [
            "What are the common challenges in adopting digital transformation initiatives?",
            "How can end-to-end digitization of operational models improve customer satisfaction and streamline internal processes?",
            "What strategies are effective in integrating technology into existing processes to drive ongoing improvement?",
            "How can collaboration with a diverse range of stakeholders accelerate the transition to digitalization and change management?",
          ],
          logo: "/path/to/your/logo3.jpg",
        },
        {
          time: "02:30 PM – 4:00 PM",
          title: "Closing Note & Networking Lunch",
          details: [],
          logo: "/path/to/your/logo1.jpg",
        },
      ],
    },
    {
      day: "Day 2",
      sessions: [
        {
          time: "8:30 AM - 09:30 AM",
          title: "Registration and Networking",
          details: [],
          logo: "/path/to/your/logo1.jpg",
        },
        {
          time: "09:30 AM - 10:00 AM",
          title:
            "How Artificial Intelligence Is Driving Process Automation and Digital Transformation - Or is it just Hype?",
          details: [
            "In which aspects are the performance and benefits of AI overestimated or unrealistically presented?",
            "Where can AI create concrete and demonstrable added value and improve the efficiency and quality of processes?",
            "What best practices can you present from your industry?",
            "What plans and strategies do you have for the further introduction and use of AI in your company?",
          ],
          logo: "/path/to/your/logo2.jpg",
        },
        {
          time: "10:00 AM - 10:30 AM",
          title:
            "TECH SPOTLIGHT: Streamlining Manual Workflows through Automation and Enhancing Data Integrity with Contextual Menu Integration",
          details: [
            "How does incorporating automation into traditionally manual workflows boost efficiency and reduce human error?",
            "In what ways can intelligent automation tools help businesses expedite repetitive tasks while ensuring higher accuracy and faster execution?",
            "How does integrating a robust context menu system enhance confidence in data handling?",
            "What intuitive options can a context menu system provide for users to interact with data, troubleshoot inconsistencies, and access essential actions?",
            "How does the combination of automation and context menus optimize operational workflows and reinforce the reliability and security of data-driven decisions?",
          ],
          logo: "/path/to/your/logo3.jpg",
        },
        {
          time: "10:30 AM - 11:00 AM",
          title:
            "PANEL DISCUSSION: Empowering Women in Tech: Leading the Charge in Intelligent Data, AI, and Automation",
          details: [
            "What pivotal role do women play in shaping the future of technology, particularly in intelligent data, AI, and automation?",
            "What unique challenges and opportunities do women face in the tech industry?",
            "How can inspiring success stories of women in tech be showcased to motivate others?",
            "What strategies can be implemented to foster inclusivity and diversity within the technology industry?",
            "How can women's perspectives drive innovation and ethical practices in technology development?",
            "In what ways can women's contributions lead to more equitable solutions in tech?",
            "How can we empower the next generation of female leaders in the rapidly evolving tech landscape?",
          ],
          logo: "/path/to/your/logo3.jpg",
        },
        {
          time: "11:00 AM - 11:30 AM",
          title:
            "FIRESIDE CHAT: Philosophy of AI: Navigating Current Trends and Future Directions",
          details: [
            "What does the philosophy of AI encompass?",
            "How do current trends in AI reflect its evolution toward more advanced and autonomous systems?",
            "What are the key areas of emphasis in AI, such as machine learning, neural networks, and natural language processing?",
            "In which directions is AI headed, and what industries are seeing greater integration?",
            "What opportunities and challenges arise from AI’s growth, particularly in terms of ethics, transparency, and accountability?",
            "Why is it important to explore the philosophical implications of AI trends?",
            "How can AI coexist with human values and contribute to shaping the future?",
          ],
          logo: "/path/to/your/logo3.jpg",
        },
        {
          time: "11:30 AM - 12:00 PM",
          title:
            "AI-Driven Data Lifecycle Management: Revolutionizing Efficiency and Insights Across Every Stage",
          details: [
            "How does the management of data lifecycle with AI tools streamline processes and enhance efficiency?",
            "What role does AI play in generating deeper insights from data at each stage of its lifecycle?",
            "How can organizations leverage AI to manage and analyze data more effectively throughout its lifecycle?",
          ],
          logo: "/path/to/your/logo3.jpg",
        },
        {
          time: "12:00 PM – 12:30 PM",
          title: "Networking Coffee Break",
          details: [],
          logo: "/path/to/your/logo1.jpg",
        },
        {
          time: "12:30 PM – 1:30 PM",
          title: "FIRESIDE CHAT: To be finalized",
          details: [],
          logo: "/path/to/your/logo3.jpg",
        },
        {
          time: "1:30 PM – 2:15 PM",
          title: "To be finalized",
          details: [],
          logo: "/path/to/your/logo3.jpg",
        },
        {
          time: "2:15 PM – 2:45 PM",
          title: "To be finalized",
          details: [],
          logo: "/path/to/your/logo3.jpg",
        },
        {
          time: "2:45 PM – 3:15 PM",
          title: "To be finalized",
          details: [],
          logo: "/path/to/your/logo3.jpg",
        },
        {
          time: "3:15 PM – 3:20 PM",
          title: "Closing Note & End of the Conference",
          details: [],
          logo: "/path/to/your/logo1.jpg",
        },
      ],
    },
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
