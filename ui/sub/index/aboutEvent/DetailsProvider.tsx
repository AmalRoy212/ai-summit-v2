import React from "react";

function DetailsProvider() {
  return (
    <div className="md:flex flex-row w-full h-auto py-10 md:py-0">
      <div
        data-aos="fade-up-right"
        className="flex p-3 flex-col md:w-2/4 w-full md:h-screen justify-center items-center"
      >
        <img
          src="/images/alts/bg-1.png"
          style={{ height: "400px" }}
          className="rounded-xl w-full object-cover"
        />
      </div>
      <div
        data-aos="fade-up-left"
        className="flex flex-col md:w-2/4 w-full md:h-screen h-auto justify-center items-center p-5"
      >
        <p className="text-[15px] text-gray-400 dark:text-gray-400 md:p-5 text-justify">
          Fintech is at the heart of Bahrain’s financial evolution, driving
          advancements in digital payments, blockchain, open banking, and
          AI-powered financial services. As a leading financial hub in the Gulf
          region, Bahrain is embracing these innovations to enhance efficiency,
          promote financial inclusion, and accelerate economic diversification.{" "}
          <br />
          <div className="mt-2">
            With a progressive regulatory framework, Bahrain has positioned
            itself as a launchpad for Fintech startups and global players
            looking to expand in the MENA region. The Bahrain Fintech Bay, a key
            enabler of this transformation, fosters collaboration between
            financial institutions, regulators, and innovators to build a
            resilient and future-ready financial ecosystem. <br />{" "}
          </div>
          <div className="mt-2">
            The <strong>Bahrain Fintech Summit 2025</strong> will bring together
            global leaders, innovators, and policymakers to showcase
            cutting-edge Fintech solutions, explore pressing industry
            challenges, and facilitate strategic collaborations that will shape
            the future of finance in Bahrain and beyond. Through insightful
            discussions, visionary keynotes, and high-impact networking
            opportunities, the summit aims to catalyse the next wave of
            financial innovation and support Bahrain’s vision of becoming a
            Fintech powerhouse. Join us in Bahrain to discover the latest
            trends, engage with industry pioneers, and contribute to the dynamic
            evolution of financial services in the region.
          </div>
        </p>
      </div>
    </div>
  );
}

export default DetailsProvider;
