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
        <br />
        {session?.header}
      </div>
      <div className="timeline mx-5">
        <div className="h-4 w-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
        {!isLast && <div className="line"></div>}
      </div>
      <div className="p-4 rounded-lg space-y-2 mb-4 flex-grow shadow-lg text-white">
        <h4 className="text-lg font-semibold">{session.title}</h4>
        <ul className="list-disc list-inside text-sm">
          {session?.details?.map((detail: any, index: any) => (
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
        },
        {
          time: "09:30 AM - 09:40 AM",
          title: "Welcome Address by Organizer",
        },
        {
          time: "09:40 AM – 10:00 AM",
          title: "Opening Keynote Address",
        },
        {
          time: "10:00 AM - 10:30 AM",
          header: "TECH SPOTLIGHT",
          title:
            "Seamlessly Connect, Intelligently Automate, and Powerfully Scale AI-Driven Experiences",
          details: [
            "Why is achieving operational efficiency critical for business success in today’s fast-changing world?",
            "What factors should organizations consider when developing digital platforms for scalability?",
            "How can businesses ensure the longevity of their digital platforms in unpredictable environments?",
            "What role do reusable APIs play in creating flexible and scalable digital platforms?",
            "How can integrated platforms help organizations adapt and thrive in a rapidly evolving landscape?",
          ],
        },
        {
          time: "10:30 AM - 11:00 AM",
          header: "PANEL DISCUSSION",
          title:
            "Harnessing the Synergy of Integration, Data Orchestration, and Intelligent Automation: Pioneering the Next-Gen Digital Transformation Era",
          details: [
            "How can businesses adapt their operations to thrive in a digitally interconnected world?",
            "What are the key benefits of breaking silos and enabling real-time data insights for organizations?",
            "How do technologies like iPaaS and AI-powered automation drive innovation and scalability?",
            "In what ways can integrated systems enhance customer experiences and operational efficiency?",
            "What strategies ensure resilience and sustainable growth in the face of rapid digital evolution?",
          ],
        },
        {
          time: "11:00 AM - 11:30 AM",
          header: "TECH SPOTLIGHT",
          title:
            "Data Management and Virtualization – Enhancing Data Access and Agility",
          details: [
            "How do data management and virtualization solutions help businesses access, integrate, and manage data effectively?",
            "In what ways does data virtualization enhance agility and streamline operations?",
            "How can simplifying data access across diverse systems reduce complexity for organizations?",
            "What impact does improved data integration have on supporting better decision-making?",
            "How can businesses leverage data virtualization to remain competitive in a dynamic environment?",
          ],
        },
        {
          time: "11:30 AM - 12:00 PM",
          header: "TECH SPOTLIGHT",
          title:
            "Unlocking the Potential of Generative AI: Enhanced Interactivity, Market Growth, and Overcoming Implementation Barriers",
          details: [
            "How does Generative AI enhance interactivity and personalization through advanced chatbots and recommendation systems?",
            "What role does GenAI play in driving innovation and economic growth across various industries?",
            "What are the primary challenges associated with the widespread implementation of Generative AI?",
            "How can organizations address data privacy, security, and governance concerns to ensure effective GenAI deployment?",
            "What steps are necessary to unlock the full potential of Generative AI in transforming business and society?",
          ],
        },
        {
          time: "12:00 PM – 12:30 PM",
          title: "Networking Coffee Break",
        },
        {
          time: "12:30 PM – 01:00 PM",
          header: "PANEL DISCUSSION",
          title:
            "How can Companies Leverage Intelligent Automation to Align Strategy, Navigate Technological Landscapes, Ensure Compliance, and Deliver Optimal Solutions?",
          details: [
            "What are the primary challenges companies face when implementing intelligent automation strategies?",
            "How can organizations develop and adapt their strategies to leverage machine learning and automation technologies effectively?",
            "What are the key considerations for selecting and implementing automation technologies, considering the vast amount of data and regulatory requirements?",
            "How can companies ensure regulations compliance while delivering AI-driven solutions tailored to department’s needs?",
            "What criteria should be used to choose the most suitable technology for each automation problem, ensuring alignment with company goals and objectives?",
          ],
        },
        {
          time: "01:00 PM – 1:30 PM",
          header: "TECH SPOTLIGHT",
          title:
            "Transforming Backlog Chaos into Seamless Solutions with Low-Code and No-Code Magic",
          details: [
            "What challenges do CIOs face in managing the growing backlog of internal applications and processes?",
            "Why are many enterprises still reliant on manual methods like Excel sheets and emails for tasks that could be automated?",
            "How do inefficient workflows and delayed app launches impact employee productivity and satisfaction?",
            "What are the limitations of many tools available in the market for addressing app and process backlogs?",
            "What strategies can enterprises adopt to effectively overcome app and process backlogs while enabling teams to focus on innovation and growth?",
          ],
        },
        {
          time: "01:30 PM – 2:00 PM",
          header: "TECH SPOTLIGHT",
          title:
            "Enterprise Integration: Harnessing the Power of a Real-Time, Composable Data Architecture",
          details: [
            "How are integration technologies redefining the landscape of Business Process Management and real-time business intelligence?",
            "What tools and strategies ensure seamless system connectivity and scalability across diverse environments?",
            "How does the 'build once, deploy anywhere' capability transform multi-cloud deployment for enterprises?",
            "In what ways can actionable insights derived from integration technologies drive strategic decision-making?",
            "How can businesses leverage integration technologies to stay competitive and future-ready in a dynamic market?",
          ],
        },
        {
          time: "02:00 PM – 2:30 PM",
          header: "FIRESIDE CHAT",
          title:
            "How Can Organizations Drive Digital Transformation to Enhance Customer Experience and Operational Efficiency?",
          details: [
            "What are the common challenges in adopting digital transformation initiatives?",
            "How can end-to-end digitization of operational models improve customer satisfaction and streamline internal processes?",
            "What strategies are effective in integrating technology into existing processes to drive ongoing improvement?",
            "How can collaboration with a diverse range of stakeholders accelerate the transition to digitalization and change management?",
          ],
        },
        {
          time: "02:30 PM – 4:00 PM",
          title: "Closing Note & Networking Luncheon",
        },
      ],
    },
    {
      day: "Day 2",
      sessions: [
        {
          time: "8:30 AM - 09:30 AM",
          title: "Registration and Networking",
        },
        {
          time: "09:30 AM - 10:00 AM",
          header: "PANEL DISCUSSION",
          title:
            "How Artificial Intelligence Is Driving Process Automation and Digital Transformation - Or is it just Hype?",
          details: [
            "In which aspects are the performance and benefits of AI overestimated or unrealistically presented?",
            "Where can AI create concrete and demonstrable added value and improve the efficiency and quality of processes?",
            "What best practices can you present from your industry?",
            "What plans and strategies do you have for the further introduction and use of AI in your company?",
          ],
        },
        {
          time: "10:00 AM – 10:30 AM",
          header: "TECH SPOTLIGHT",
          title:
            "Redefining Data Management: Harnessing Advanced Analytics, Applied AI, and Generative AI to Revolutionize the Digital Landscape",
          details: [
            "How is Saudi Arabia positioning itself as a leader in AI-driven data management on a global scale?",
            "What opportunities does generative AI create for enhancing decision-making and innovation in KSA enterprises?",
            "How can businesses in KSA utilize advanced analytics to unlock the full potential of their data?",
            "What challenges do organizations in Saudi Arabia face when implementing AI and data management solutions, and how can they overcome them?",
            "How is the adoption of applied AI shaping the future of digital transformation in the Kingdom?",
            "What role does data management play in achieving sustainability goals through technology in Saudi Arabia?",
            "How are advancements in AI influencing the development of robust data ecosystems in KSA?",
            "What strategies are most effective for fostering collaboration between AI and data management technologies in Saudi Arabia?",
          ],
        },
        {
          time: "10:30 AM - 11:00 AM",
          header: "TECH SPOTLIGHT",
          title:
            "Optimizing Decision-Making with Seamless AI and BI Integration: Empowering the Workforce with Actionable Insights and Governed, Secure Data",
          details: [
            "How does integrating AI with Business Intelligence (BI) tools enhance decision-making?",
            "In what ways do real-time, data-driven insights optimize strategic choices across all levels of an organization?",
            "How can combining the power of AI with BI empower a workforce with actionable insights?",
            "How does AI and BI integration contribute to more informed, efficient, and agile operations?",
            "Why is leveraging governed and secure data essential for ensuring decisions are based on accurate, reliable, and compliant information?",
            "How does the fusion of AI, BI, and data governance drive innovation, optimize workflows, and enable sustainable business growth?",
          ],
        },
        {
          time: "11:00 AM - 11:30 AM",
          header: "PANEL DISCUSSION",
          title:
            "Empowering Women in Tech: Leading the Charge in Intelligent Data, AI, and Automation",
          details: [
            "What pivotal role do women play in shaping the future of technology, particularly in intelligent data, AI, and automation?",
            "What unique challenges and opportunities do women face in the tech industry?",
            "How can inspiring success stories of women in tech be showcased to motivate others?",
            "What strategies can be implemented to foster inclusivity and diversity within the technology industry?",
            "How can women's perspectives drive innovation and ethical practices in technology development?",
            "In what ways can women's contributions lead to more equitable solutions in tech?",
            "How can we empower the next generation of female leaders in the rapidly evolving tech landscape?",
          ],
        },
        {
          time: "11:30 AM - 12:00 PM",
          title: "Networking Coffee Break",
        },
        {
          time: "12:00 PM – 12:30 PM",
          header: "FIRESIDE CHAT",
          title:
            "Revolutionizing Enterprise AI: How AI and Data Cloud are Transforming Businesses in the Kingdom of Saudi Arabia",
          details: [
            "How are AI-powered data ecosystems reshaping enterprise strategies in the Kingdom of Saudi Arabia?",
            "What are the key innovations in AI and cloud technologies driving hyper-scalability for enterprises?",
            "How can organizations harness intelligent data clouds to achieve real-time decision-making and predictive insights?",
            "What role does generative AI play in revolutionizing operational efficiency and customer experiences in KSA enterprises?",
            "How are businesses addressing challenges related to data sovereignty and compliance in a rapidly evolving AI-driven ecosystem?",
            "What future trends in AI and cloud integration will define the next wave of enterprise transformation in Saudi Arabia?",
          ],
        },
        {
          time: "12:30 PM – 12:30 PM",
          header: "TECH SPOTLIGHT",
          title:
            "Streamlining Manual Workflows through Automation and Enhancing Data Integrity with Contextual Menu Integration",
          details: [
            "How does incorporating automation into traditionally manual workflows boost efficiency and reduce human error?",
            "In what ways can intelligent automation tools help businesses expedite repetitive tasks while ensuring higher accuracy and faster execution?",
            "How does integrating a robust context menu system enhance confidence in data handling?",
            "What intuitive options can a context menu system provide for users to interact with data, troubleshoot inconsistencies, and access essential actions?",
            "How does the combination of automation and context menus optimize operational workflows and reinforce the reliability and security of data-driven decisions?",
          ],
        },
        {
          time: "12:00 PM – 12:30 PM",
          header: "Philosophy of AI",
          title:
            "Navigating Current Trends and Future Directions",
          details: [
            "What does the philosophy of AI encompass?",
            "How do current trends in AI reflect its evolution toward more advanced and autonomous systems?",
            "What are the key areas of emphasis in AI, such as machine learning, neural networks, and natural language processing?",
            "In which directions is AI headed, and what industries are seeing greater integration?",
            "What opportunities and challenges arise from AI’s growth, particularly in terms of ethics, transparency, and accountability?",
            "Why is it important to explore the philosophical implications of AI trends?",
            "How can AI coexist with human values and contribute to shaping the future?",
          ],
        },
        {
          time: "12:30 PM – 1:30 PM",
          header: "Orchestrating Privacy at Scale",
          title:
            "Unveiling Risks, Seizing Opportunities, and Tackling Challenges within Saudi Arabia's Personal Data Protection Landscape",
          details: [
            "How can organizations effectively scale their privacy management frameworks to align with Saudi Arabia’s Personal Data Protection Law?",
            "What are the key risks businesses face in ensuring compliance with privacy regulations, and how can they mitigate them?",
            "How can enterprises balance innovation and data privacy while unlocking new opportunities in the digital era?",
            "What strategies are most effective in addressing challenges related to data breaches and privacy violations at scale?",
            "How does the Saudi Personal Data Protection Law influence the adoption of advanced technologies like AI and cloud computing in data management?",
          ],
        },
        {
          time: "1:30 PM – 2:00 PM",
          title: "Awards presentation & Closing Remarks",
        },
        {
          time: "2:30 PM – 4:00 PM",
          title: "Networking Luncheon and Exhibitor Booth Interactions",
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
