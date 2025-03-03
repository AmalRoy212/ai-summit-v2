"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sponsor.css";
import { managingSponsors } from "@/constants/sponsorsDataProvider";
import SponsordsData from "@/ui/sub/index/sponsors/SponsordsData";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { Button, Modal } from "antd";

function ModalComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        onClick={showModal}
        style={{ zIndex: 99 }}
        className="w-full flex items-center md:flex-row flex-col justify-center min-h-52 cursor-pointer"
      >
        <SponsordsData imgSrc="uic.jpg" />
      </div>
      <Modal
        title="UIC"
        footer={false}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <p>
          Utrecht IT Consulting is an IT consulting and services company
          headquartered in the Netherlands, with a global presence in the United
          States, Saudi Arabia, Oman, the UAE, and India. We offer a wide range
          of IT solutions, specializing in data management, digital
          transformation, and enterprise IT services. UIC is Technology Partner
          with Denodo, a leader in data management. The award-winning Denodo
          Platform is the leading logical data management platform, delivering
          data in the language of business, at the speed of business, for all
          data-related initiatives. With customers achieving over 400% ROI and
          realizing millions in benefits, Denodo's solutions enable payback in
          less than six months. Enterprises across 30+ industries globally rely
          on Denodo to accelerate their digital transformation.
        </p>
        <p>
          To learn more, please visit:{" "}
          <a
            target="_blank"
            className="text-blue-600"
            href="https://utrechtitconsulting.com/"
          >
            https://utrechtitconsulting.com/
          </a>
        </p>
      </Modal>
    </>
  );
}

function Sponsors() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div id="sponsors&partners" className="mainContainer">
      <motion.div
        variants={slideInFromTop}
        className="text-[40px] font-medium text-center text-gray-200 mb-10"
      >
        {/* Some of the  */}
        SPONSORS
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          &{" "}
        </span>
        PARTNERS
        {/* from the Recent Past */}
      </motion.div>
      <h3 className="text-transparent text-xl text-center text-white">
        MANAGED BY
      </h3>
      <div className="w-full flex md:flex-row flex-col justify-center min-h-52">
        {managingSponsors.map((img) => img && <SponsordsData imgSrc={img} />)}
      </div>
      <div className="w-full flex flex-row justify-center items-center gap-x-6">
        <div>
          <h3 className="text-transparent text-xl text-center text-white">
            HOST PARTNER
          </h3>
          <SponsordsData imgSrc="almena.jpg" />
        </div>
      </div>
      <div className="w-full flex flex-row justify-center items-center gap-x-6">
        <div>
          <h3 className="text-xl text-center text-white">GOLD SPONSOR</h3>
          <ModalComponent />
        </div>
      </div>
      <div className="w-full flex flex-row justify-center items-center gap-x-6">
        <div>
          <h3 className="text-xl text-center text-white">EXHIBITING SPONSOR</h3>
          <div className="ml-2">
            <SponsordsData imgSrc="zoho.jpg" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-x-6">
        <h3 className="text-transparent text-xl text-center text-white">
          MEDIA PARTNER
        </h3>
        <div className="w-full flex flex-row justify-center items-center gap-x-6">
          <SponsordsData imgSrc="mid.jpg" />
          <SponsordsData imgSrc="ai-time.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
