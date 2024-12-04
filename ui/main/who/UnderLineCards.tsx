import React from "react";

const data = [
  {
    dis: "CIOs, CTOS, CAIOS, CDOs, CISOs, CXOs",
  },
  {
    dis: "VPs & Heads of Digital Transformation, Business Intelligence, Data Integration, Enterprise Architecture",
  },
  {
    dis: "VPs & Heads of Data Analytics, Governance, Data Science, Data Management, Data Modelling & Mining, Data Architecture & Engineering, CRM",
  },
  {
    dis: "VPs & Heads of Predictive Analytics, Marketing, Customer Experience, Digital & Strategy",
  },
  {
    dis: "VPs & Directors of Al, Machine Learning, Robotics, Predictive Analytics",
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
