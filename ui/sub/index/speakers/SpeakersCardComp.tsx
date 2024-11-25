import React from "react";

const ProfileCard: React.FC<any> = ({ item, index }) => {
  return (
    <div
      className="flex flex-col items-center w-full md:w-1/4 max-w-xs m-4 rounded-lg overflow-hidden"
      key={index}
    >
      <div
        className="w-[97%] rounded-lg mt-1"
        style={{
          backgroundImage: `url(/images/bg/speaker.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          className={`w-full h-64 pt-${item?.marginTP} object-${item?.fit || "contain"}`}
          // style={{ objectFit: "contain", maxHeight: "250px" }}
        />
      </div>
      <div className="p-4 flex flex-col items-center text-center">
        <h3 className="text-xl font-bold text-gray-800 uppercase mb-2">
          {item.name}
        </h3>
        <p className="text-gray-600 text-base font-medium">{item.title}</p>
        <p className="text-gray-600 text-base font-medium">{item.company}</p>
        {item.com && <p className="text-gray-600 font-medium">{item.com}</p>}
      </div>
    </div>
  );
};

export default ProfileCard;
