import React, { useEffect, useState } from "react";

const newsItems = [
  {
    id: 1,
    title: "Informatica launches AI-powered Data Management Cloud in Saudi Arabia",
    imageUrl: "https://w.media/wp-content/uploads/2022/12/saudi-1.jpg",
    link: "https://w.media/informatica-launches-ai-powered-data-management-cloud-in-saudi-arabia/",
  },
  {
    id: 2,
    title: "LinkedIn data shows KSA workforce rapidly adopting digital skills as the hiring.",
    imageUrl: "https://etimg.etb2bimg.com/photo/110784908.cms",
    link: "https://hrme.economictimes.indiatimes.com/news/linkedin-data-shows-ksa-workforce-rapidly-adopting-digital-skills-as-the-hiring-of-ai-talent-grows-24-in-one-year/110784895",
  },
  {
    id: 3,
    title: "AI, analytics and the future of Saudi Arabia’s workforce",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGSh1AKmDllp5VjcBc2IvRS8fT1ymYQjdrLQWg-fQeLq8TFRssCgjKriasyVs6ml1cpjA&usqp=CAU",
    link: "https://www.arabnews.com/node/2530096",
  },
  {
    id: 4,
    title: "Presight signs deal to enhance emergency management through AI, Big Data analytics",
    imageUrl:
      "https://static.zawya.com/view/acePublic/alias/contentid/Nzc2NmRkMjgtOWZiZC00/37/1464561797.webp?f=3%3A2&q=0.75&w=1080",
    link: "https://www.zawya.com/en/business/technology-and-telecom/presight-signs-deal-to-enhance-emergency-management-through-ai-big-data-analytics-q3s6428u",
  },
];

const NewsTicker: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset - 100) % (newsItems.length * 100));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden h-[450px] relative z-10">
      <div
        className="transition-transform duration-300"
        style={{ transform: `translateY(${offset}px)` }}
      >
        {newsItems.map((item) => (
          <a
            key={item.id} // Move key here
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{cursor:"pointer"}}
          >
            <div
              className="h-48 flex items-center justify-center text-white bg-cover bg-center"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className="bg-opacity-50 bg-black p-4">{item.title}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
