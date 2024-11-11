import React, { useEffect, useState } from "react";

const items = [
  {
    id: 1,
    title: "Google is opening an AI hub in oil-rich Saudi Arabia",
    content: `Google might be lagging in its climate goals, but that isn’t stopping the tech giant from building a new AI-focused data center in fossil fuel-dependent Saudi Arabia.
     The new AI hub will support research into Arab language AI models and “Saudi-specific AI applications,” according to an announcement from the Saudi Public Investment fund and Google. Aramco, the state-owned petroleum company, says it currently uses AI throughout its operations. At one oil field, the technology has helped boost production by 15%.`,
    imageUrl:
      "https://techcrunch.com/wp-content/uploads/2024/04/IMG_3912.jpg?resize=1536,1152",
    link: "https://techcrunch.com/2024/11/05/google-is-opening-an-ai-hub-in-oil-rich-saudi-arabia/",
  },
  {
    id: 2,
    title: "Saudi’s $100b AI project challenges UAE’s tech leadership",
    content: `Saudi Arabia is reportedly developing a plan for an AI initiative called “Project Transcendence.”
      Anonymous sources claim the project may involve an investment of up to US$100 billion and aims to establish a technological hub challenging the United Arab Emirates’ regional role.
      The initiative is expected to focus on infrastructure development, data centers, startup investments, and talent acquisition to strengthen the local AI sector.`,
    imageUrl:
      "https://cdn.techinasia.com/wp-content/uploads/2024/11/1730960934_shutterstock_2214315035-scaled.jpg",
    link: "https://www.techinasia.com/news/saudis-100b-ai-project-challenges-uaes-tech-leadership",
  },
  {
    id: 3,
    title:
      "‘To the Future’: Saudi Arabia spends big to become an AI superpower",
    content: `More than 200,000 people converged at the conference, including Adam Selipsky, CEO of Amazon’s cloud computing division, who announced a $5.3 billion investment in Saudi Arabia for data centers and artificial intelligence technology.`,
    imageUrl:
      "https://images.deccanherald.com/deccanherald%2F2024-04%2F1ee87693-3cb6-4188-a3a0-5a21e520a5cc%2F2022newsmlRC2H8X9QJ95S27591129.jpeg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=900&dpr=1.5",
    link: "https://www.deccanherald.com//world/to-the-future-saudi-arabia-spends-big-to-become-an-ai-superpower-2993869",
  },
  {
    id: 4,
    title: "Saudi Arabia highlights AI, data efforts at UN meeting",
    content: `RIYADH: The Saudi Data and Artificial Intelligence Authority participated in a dialogue session on AI capabilities at the 79th UN General Assembly in New York, the Saudi Press Agency reported on Wednesday.
      The authority’s general manager of strategic partnerships, Rehab Alarfaj, highlighted the Kingdom’s efforts in data and AI, focusing on building national human capacities and its global contributions.`,
    imageUrl:
      "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2024/09/25/4527997-288834617.jpg?itok=0UB1JEDl",
    link: "https://www.arabnews.com/node/2572737/saudi-arabia",
  },
  {
    id: 5,
    title:
      "Saudi Arabia Big Data Market Outlook, Trends by Offerings, Data Type, Enterprise Size, Application, and End User 2024-2030",
    content: `Report Ocean has released a new report on the Saudi Arabia Big Data market, offering a comprehensive analysis of various factors, including market restraints, drivers, and opportunities. The report provides an in-depth review of industry developments and trends that are influencing the growth of the Saudi Arabia Big Data market. Additionally, the report includes a thorough analysis and estimation of the Saudi Arabia Big Data market.`,
    imageUrl:
      "https://nz.eragroup.com/wp-content/uploads/2018/01/business-meeting-with-iPad-1.jpg",
    link: "https://taiwannews.com.tw/news/5919330",
  },
  {
    id: 6,
    title:
      "Saudi Arabia Plans $40 Billion Push Into Artificial Intelligence",
    content: `The Middle Eastern country is creating a gigantic fund to invest in A.I. technology, potentially becoming the largest player in the hot market.`,
    imageUrl:
      "https://static01.nyt.com/images/2024/03/19/multimedia/00SAUDI-AI-FUND-01-mtjb/00SAUDI-AI-FUND-01-mtjb-jumbo.jpg?quality=75&auto=webp",
    link: "https://www.nytimes.com/2024/03/19/business/saudi-arabia-investment-artificial-intelligence.html",
  },
  {
    id: 7,
    title:
      "‘To the Future’: Saudi Arabia Spends Big to Become an A.I. Superpower",
    content: `The oil-rich kingdom is plowing money into glitzy events, computing power and artificial intelligence research, putting it in the middle of an escalating U.S.-China struggle for technological influence.`,
    imageUrl:
      "https://static01.nyt.com/images/2024/04/19/multimedia/SAUDI-AI-09-vtlj/SAUDI-AI-09-vtlj-superJumbo.jpg?quality=75&auto=webp",
    link: "https://www.nytimes.com/2024/04/25/technology/saudi-arabia-ai.html",
  },
  {
    id: 8,
    title:
      "Saudi Arabia’s AI adoption ignites technological advancement and economic growth",
    content: `RIYADH: As artificial intelligence gains global attention and becomes a buzzword, Saudi Arabia is positioned for accelerated adoption to enhance efficiency across its industries.`,
    imageUrl:
      "https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2024/04/18/4324406-212207675.jpg?itok=t9zfm1pP",
    link: "https://www.arabnews.pk/node/2495391/business-economy",
  },
  {
    id: 7,
    title:
      "‘To the Future’: Saudi Arabia Spends Big to Become an A.I. Superpower",
    content: `The oil-rich kingdom is plowing money into glitzy events, computing power and artificial intelligence research, putting it in the middle of an escalating U.S.-China struggle for technological influence.`,
    imageUrl:
      "https://static01.nyt.com/images/2024/04/19/multimedia/SAUDI-AI-09-vtlj/SAUDI-AI-09-vtlj-superJumbo.jpg?quality=75&auto=webp",
    link: "https://www.nytimes.com/2024/04/25/technology/saudi-arabia-ai.html",
  },
];

const Carousel: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        const maxOffset = -(items.length - 1) * 100;
        return prevOffset <= maxOffset ? 0 : prevOffset - 100;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(${offset}%)` }}
      >
        {items.map((item) => (
          <div
            key={item?.id}
            className="w-full h-[70vh] md:h-[450px] flex-none bg-cover bg-center text-white relative"
            style={{ backgroundImage: `url(${item?.imageUrl})` }}
          >
            <div className="bg-opacity-70 text-sm font-thin bg-black p-4">
              {item?.content}
            </div>
            <div className="bg-opacity-70 text-3xl md:text-5xl max-w-[90%] bg-white p-4 text-black absolute bottom-0 right-0 font-bold">
              {item?.title}
              <a
                className="text-sm z-10 px-5 py-2 rounded-xl absolute bottom-1 right-1"
                style={{
                  border: "1px solid black",
                  cursor: "pointer",
                  backgroundColor: "white",
                }}
                href={item?.link}
                target="_blank"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
