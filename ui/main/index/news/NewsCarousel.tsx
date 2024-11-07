// Carousel.tsx
import React, { useEffect, useState } from "react";

// Updated example data for the carousel to include image URLs
const items = [
  {
    id: 1,
    content: "First Item Content - Some interesting text or image here.",
    imageUrl:
      "https://images.moneycontrol.com/static-mcnews/2024/11/20241107080157_Harris-Lose-to-Trump-TT-770x433.jpg?impolicy=website&width=400&height=225", // Sample image URL
  },
  {
    id: 2,
    content: "Second Item Content - More fascinating details or visuals.",
    imageUrl:
      "https://ichef.bbci.co.uk/news/480/cpsprodpb/081f/live/eef610f0-9c13-11ef-82c3-45a801b7330b.jpg.webp", // Sample image URL
  },
  {
    id: 3,
    content:
      "Third Item Content - Yet another compelling piece of information.",
    imageUrl:
      "https://img.etimg.com/thumb/width-1600,height-900,imgsize-36458,resizemode-75,msid-111870949/news/international/world-news/donald-trump-2024-the-unifier.jpg", // Sample image URL
  },
];

const Carousel: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move the carousel left and reset after the last item
      setOffset((prevOffset) => {
        // Each item is 100% of the view width
        const maxOffset = -(items.length - 1) * 100;
        return prevOffset <= maxOffset ? 0 : prevOffset - 100;
      });
    }, 3000); // Change every 3 seconds
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
            key={item.id}
            className="w-full md:h-[450px] flex-none bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <div className="bg-opacity-50 bg-black p-4">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
