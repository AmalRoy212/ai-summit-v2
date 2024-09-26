// File: ScrollingCards.tsx
import React from 'react';

const ScrollingCards: React.FC = () => {
    return (
        <div className="flex overflow-x-scroll scrollbar-hide">
            {Array.from({ length: 10 }).map((_, index) => (
                <div
                    key={index}
                    className="min-w-[160px] h-[100px] bg-blue-500 text-white flex justify-center items-center m-2"
                >
                    Card {index + 1}
                </div>
            ))}
        </div>
    );
};

export default ScrollingCards;
