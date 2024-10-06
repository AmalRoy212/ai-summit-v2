import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TechChampionsCarousel = () => {
  const champions = [
    {
      name: "RAMYA SANKARI",
      position: "Head of Information Technology",
      bio: "Zawawi Powertech Engineering LLC",
      image: "/images/speakers/remya.png",
    },
    {
      name: "RAMYA SANKARI",
      position: "Head of Information Technology",
      bio: "Zawawi Powertech Engineering LLC",
      image: "/images/speakers/remya.png",
    },
    {
      name: "RAMYA SANKARI",
      position: "Head of Information Technology",
      bio: "Zawawi Powertech Engineering LLC",
      image: "/images/speakers/remya.png",
    },
    // Add more champion entries here as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div
        data-aos="flip-down"
        className="w-full h-[10vh] flex justify-center items-center z-[19]"
      >
        <h1 className=" `md:text-[28px] lg:text-[34px] text-[21px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Meet the Women Tech Leaders Shaping the Digital Future of the
          Sultanate of Oman
        </h1>
      </div>
      <p className="text-center text-gray-300 mb-8 mt-8">
        Celebrating and honoring the women tech ambassadors in the fields of AI,
        Cybersecurity, Digital Transformation, Digital Integration, and
        Automation, for their incredible impact on technology and significant
        contributions to shaping the digital future of the Sultanate of Oman.
      </p>

      <Slider {...settings}>
        {champions.map((champion, index) => (
          <div key={index} className="text-center">
            <div className="flex gap-10 p-10 flex-col md:flex-row items-center justify-center">
              <div className="w-[200px] h-[200px] bg-white rounded-sm overflow-hidden mb-4">
                <Image
                  src={champion.image}
                  alt={champion.name}
                  width={300}
                  height={300}
                  className="object-cover bg-white"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">
                  {champion.name}
                </h3>
                <p className="text-gray-500 text-sm">{champion.position}</p>
                <p className="text-gray-700 text-base mt-2 max-w-xl">
                  {champion.bio}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TechChampionsCarousel;
