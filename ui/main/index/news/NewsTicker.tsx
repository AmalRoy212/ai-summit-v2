// NewsTicker.tsx
import React, { useEffect, useState } from "react";

const newsItems = [
  { id: 1, title: "News 1", imageUrl: "https://images.moneycontrol.com/static-mcnews/2024/11/20241107080157_Harris-Lose-to-Trump-TT-770x433.jpg?impolicy=website&width=400&height=225g" },  // Sample image URL
  { id: 2, title: "News 2", imageUrl: "https://ichef.bbci.co.uk/news/480/cpsprodpb/081f/live/eef610f0-9c13-11ef-82c3-45a801b7330b.jpg.webp" },  // Sample image URL
  { id: 3, title: "News 3", imageUrl: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-36458,resizemode-75,msid-111870949/news/international/world-news/donald-trump-2024-the-unifier.jpg" }   // Sample image URL
];

const NewsTicker: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset - 100) % (newsItems.length * 100)); // Adjust for item height and reset point
    }, 2000); // Adjust timing
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden h-[450px] relative">
      <div
        className="transition-transform duration-300"
        style={{ transform: `translateY(${offset}px)` }}
      >
        {newsItems.map(item => (
          <div key={item.id} className="h-48 flex items-center justify-center text-white bg-cover bg-center" style={{ backgroundImage: `url(${item.imageUrl})` }}>
            <div className="bg-opacity-50 bg-black p-4">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
