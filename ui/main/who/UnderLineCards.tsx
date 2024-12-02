import React from "react";

const data = [
  {
    dis: "CXOs - CIOs, CTOs, CAIOs, CDOs, CISOs",
  },
  {
    dis: "VPs & Heads of Digital Transformation, Business Intelligence, Data Science, Data Engineering",
  },
  {
    dis: "VPs & Heads of Data Analytics, Governance, Modeling & Mining, Architects, CRM, Privacy & Analysts",
  },
  {
    dis: "VPs & Heads of Predictive Analytics, Marketing, Customer Experience, Digital & Strategy",
  },
  {
    dis: "Directors of AI, Machine Learning, Robotics, Predictive Analytics",
  },
];

function UnderLineCards() {
  return data.map((item) => (
    <div
      data-aos="zoom-in"
      className="w-full text-white mt-5"
      style={{ borderBottom: "1px solid gray" }}
    >
      {item.dis}
    </div>
  ));
}

export default UnderLineCards;
