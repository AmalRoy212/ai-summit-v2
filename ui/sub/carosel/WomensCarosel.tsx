import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TechChampionsCarousel = () => {
  const champions = [
    // {
    //   name: "Ghadah Almalki",
    //   position: "Director of Data & AI",
    //   position_two: "",
    //   organisation: "Confidential Government",
    //   bio: "",
    //   image: "/images/speakers/img6.png",
    // },
    {
      name: "Neeti Khatri",
      position: "AVP Data & Insights",
      position_two: "",
      organisation: "Public Investment Fund (PIF)",
      bio: "",
      image: "/images/speakers/speaker34.png",
    },
    {
      name: "DR. Manal AlNemari",
      position: "Digital Technology Advisor",
      organisation: "Ministry of Health",
      bio: `Manal Mansour Al Nemari is a visionary leader in digital health transformation, Manal Mansour Al Nemari has nearly two decades of experience driving healthcare innovation. A recognized Women Leader 2030 honoree, she has pioneered projects such as the Middle East’s first centralized robotic system and managed initiatives with budgets exceeding 33 million riyals.
        Currently pursuing an Executive MBA at Prince Mohammed Bin Salman College, Manal blends her technical expertise with strategic business insights, focusing on entrepreneurship and leadership in healthcare. Her leadership spans digital transformation, AI integration, and robotic technology to improve patient outcomes and healthcare efficiency. Notable projects include the NPHIES Project, enhancing patient data accessibility across Saudi Arabia, and the Telehealth Initiative for SEHA Virtual Hospital, expanding critical care via telemedicine.
        Manal has received multiple awards for excellence in pharmacy automation and innovation and frequently shares her thought leadership as a speaker at top industry conferences.
        `,
      image: "/images/speakers/speaker45.png",
    },
    {
      name: "Suzan Katamoura",
      position: "Head of Data Management",
      organisation:
        "King Abdullah City for Atomic and Renewable Energy (KACARE)",
      bio: `Suzan Katamoura is the Head of the Data Management Office at King Abdullah City for Atomic and Renewable Energy (K.A.CARE), where she leads strategic initiatives in data management and governance, fostering collaboration with both national and international stakeholders. With over a decade of experience in data science spanning measurement, analysis, quality, and automation—she has made significant contributions to transformative projects such as the Saudi Arabia Renewable Resource Atlas and the Uranium Program. Her diverse career includes impactful roles in academia, healthcare, and the energy sector.
        Suzan holds a bachelor’s degree in computer science from Effat University and a master’s degree in computer science from King Abdullah University of Science and Technology (KAUST). She is currently pursuing a Ph.D. in Data Science at King Saud University.
        A passionate advocate for empowering women in technology, Suzan has represented Saudi Arabia at numerous international forums. She is dedicated to fostering diversity and innovation, inspiring the next generation of women leaders in intelligent data and automation.
        `,
      image: "/images/speakers/speaker_plc.png",
    },
    {
      name: "Ruba Al Dhalaan",
      position: "Director of Data Management & Statistics",
      organisation: "King Saud Medical City (KSMC)",
      bio: "",
      image: "/images/speakers/speaker_plc.png",
    },
    {
      name: "Sarah Koshak",
      position: "Data Expert",
      organisation: "General Authority For Statistics",
      bio: `Sarah Koshak is an experienced Senior Data Manager with over 10 years of expertise in data analytics and business optimization. Holding an MBA, she excels in translating complex data into actionable insights and driving business growth through data-driven strategies. Sarah has a proven track record of leading cross-functional teams and collaborating with key stakeholders to identify KPIs and align strategies with organizational goals.
        Notable achievements include leading the innovative API project at the Royal Commission for Riyadh City (RCRC), enabling data access within the SDAIA framework and contributing to the comprehensive job forecast for Riyadh city by 2030. She also directed the establishment of the Open Innovation sector, utilizing open data to address social challenges in Riyadh.
        With expertise in statistical analysis, data modeling, and machine learning, Sarah is proficient in data governance, open data policy development, and managing data models, architectures, and ETL processes. Her collaborative approach and strategic mindset have consistently driven transformative outcomes.
        `,
      image: "/images/speakers/speaker49.png",
    },
    {
      name: "ENG. DAUAA SHALABI",
      position: " Digital Transformation Advisor",
      organisation: "Confidential Government",
      bio: "With over 18 years of experience, Dauaa is a seasoned technology leader with deep expertise in AI, Data Science, and emerging technologies. Holding two Master's degrees, she has consistently led the implementation of cutting-edge solutions across multiple sectors. Dauaa is also a passionate advocate for women in STEM, frequently sharing her knowledge and insights through publications and on various online platforms. Her commitment to driving innovation and empowering others is at the core of her work.",
      image: "/images/speakers/speaker52.png",
    },
  ];

  const settings = {
    dots: false,
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
