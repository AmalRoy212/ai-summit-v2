import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TechChampionsCarousel = () => {
  const champions = [
    {
      name: "Kawthar Ali Al Hinai",
      position: "Head of Digital Transformation Programs",
      position_two:
        "General Directorate of Digital Transformation and Empowerment Sector",
      organisation:
        "Ministry of Transport, Communication and Information Technology",
      bio: "Kawthar Ali Al Hinai is a dynamic leader in digital transformation at the Ministry of Transport, Communication and Information Technology in Oman. With a decade of experience in the tech industry, she has expertise in e-business management, deep analysis, research, digital marketing, and event management. An alumnus of the University of Leeds, UK, with an MSc in data science and analytics, she is a certified scrum master who has completed numerous professional courses in automation of government services and digital marketing. In her current role, she leads projects and initiatives that empower government digital transformation leaders. She also provides consultation and advisory services to government entities, helping them manage their digital transformation roadmap. Her work is shaping the future of Oman and inspiring a new generation of digital enthusiasts worldwide.",
      image: "/images/speakers/kawthar.png",
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
    <div className="container mx-auto px-10 py-10 z-manage">
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
              <div className="md:w-1/3 h-full bg-white rounded-2xl overflow-hidden mb-4 flex justify-center">
                <Image
                  src={champion.image}
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
                  {champion.name}
                </h3>
                <p className="text-gray-400 text-xl">{champion.position}</p>
                <p className="text-gray-400 text-xl">
                  {champion?.position_two}
                </p>
                <p className="text-gray-400 text-xl">
                  {champion?.organisation}
                </p>
                <p className="text-gray-500 text-base font-medium mt-2">
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
