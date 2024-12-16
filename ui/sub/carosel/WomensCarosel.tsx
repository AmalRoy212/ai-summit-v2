import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TechChampionsCarousel = () => {
  const champions = [
    {
      name: "Ghadah Almalki",
      position: "Director of Data & AI",
      position_two: "",
      organisation: "Confidential Government",
      bio: "",
      image: "/images/speakers/img6.png",
    },
    {
      name: "Neeti Khatri",
      position: "AVP Data & Insights",
      organisation: "Public Investment Fund (PIF)",
      bio: "",
      image: "/images/speakers/speaker34.png",
    },
    {
      name: "Manal AlNemari",
      position: "Digital Technology Advisor",
      organisation: "Ministry of Health",
      bio: "",
      image: "/images/speakers/speaker45.png",
    },
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
    <div className="container mx-auto px-10 py-10 z-manage">
      <div
        data-aos="flip-down"
        className="w-full h-[10vh] flex justify-center items-center z-[19]"
      >
        <h1 className=" `md:text-[28px] lg:text-[34px] text-[21px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Meet the Women Tech Leaders Shaping the Digital Future of the Saudi
          Arabia
        </h1>
      </div>
      <p className="text-center text-gray-300 mb-8 mt-8">
        Celebrating and honoring the women tech ambassadors in the fields of AI,
        Cybersecurity, Digital Transformation, Digital Integration, and
        Automation, for their incredible impact on technology and significant
        contributions to shaping the digital future of the Saudi Arabia.
      </p>

      <Slider {...settings}>
        {champions.map((champion, index) => (
          <div key={index} className="text-center">
            <div className="flex gap-10 p-10 flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/3 h-full bg-white rounded-2xl overflow-hidden mb-4 flex justify-center">
                <Image
                  src={champion.image || "/images/alts/img1.jpg"}
                  alt={champion.name}
                  width={300}
                  height={300}
                  className="object-cover bg-white"
                />
              </div>
              <div className="md:w-1/2">
                <h3
                  className="text-2xl font-semibold text-blue-600"
                  style={{ textTransform: "uppercase" }}
                >
                  {champion.name || "Coming Soon"}
                </h3>
                <p className="text-gray-400 text-sm">{champion.position}</p>
                <p className="text-gray-400 text-sm">
                  {champion?.position_two}
                </p>
                <p className="text-gray-400 text-sm">
                  {champion?.organisation}
                </p>
                <p style={{}} className="text-gray-500 text-sm font-bold mt-2">
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
