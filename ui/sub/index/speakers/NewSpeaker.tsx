import React from "react";

interface CardProps {
  item : any;
  index: number;
}

const NewProfileCard: React.FC<CardProps> = ({ item, index }) => {
  return (
    <div key={index} className="relative w-64 h-96 bg-white rounded-lg shadow-md overflow-hidden transform hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-105 transition-all duration-300 ease-in-out">
      {/* Image */}
      <div className="w-full h-2/3 bg-blue-300 flex items-center justify-center">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-32 h-32 rounded-full border-4 border-white object-cover"
        />
      </div>
      {/* Info */}
      <div className="absolute bottom-0 w-full p-4 bg-black text-white">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-sm">{item.title}</p>
        <p className="text-sm text-blue-300">{item.company}</p>
      </div>
      {/* <div className="p-4 flex flex-col items-center text-center">
        <h3 className="text-xl font-bold text-gray-800 uppercase mb-2">
          {item.name}
        </h3>
        <p className="text-gray-600 text-base font-medium">{item.title}</p>
        <p className="text-gray-600 text-base font-medium">{item.company}</p>
        {item.com && <p className="text-gray-600 font-medium">{item.com}</p>}
      </div> */}
    </div>
  );
};

export default NewProfileCard;
