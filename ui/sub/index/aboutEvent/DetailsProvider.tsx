import Image from "next/image";
import React from "react";

function DetailsProvider() {
  return (
    <div className="md:flex flex-row w-full h-auto py-10 md:py-0">
      <div
        data-aos="fade-up-right"
        className="flex p-3 flex-col md:w-2/4 w-full md:h-screen justify-center items-center"
      >
        <img
          src="/images/statics/abt-con.jpeg"
          className="rounded-xl"
        />
        {/* <div className='flex justify-center items-center p-0 m-0 h-full w-full top-0 relative'>
          <Image
            src="/images/PNGs/AI_no_Bg.png"
            alt="Lock top"
            width={300}
            height={300}
            className="absolute"
          />
          <video
              loop
              muted
              autoPlay
              playsInline
              preload="false"
              className="w-full md:h-[70%] object-cover"
              src="/videos/about_background.mp4/"
            />
        </div> */}
      </div>
      <div
        data-aos="fade-up-left"
        className="flex flex-col md:w-2/4 w-full md:h-screen h-auto justify-center items-center p-5"
      >
        <p className="text-[15px] text-gray-400 dark:text-gray-400 md:p-5 text-justify">
          The Intelligent Data, AI & Automation Summit is a premier
          business-centric event driven by thought leadership, focusing on the
          latest challenges and technological trends in Oman's innovation
          landscape. This summit stands as a hallmark of technological progress
          in the Sultanate, bringing together global technology experts,
          innovators, and startups with pre-qualified executives. These include
          CEOs, CTOs, CIOs, Heads of Business Transformation, Chief Digital
          Officers, Heads of Innovation, government authorities, and technology
          investors in Oman. The summit features a diverse range of engaging
          activities, such as insightful keynotes, enterprise use-case
          presentations, product showcases, panel discussions, and informative
          tech talks. Attendees will have the unique opportunity to explore
          cutting-edge technological solutions from global tech leaders and
          understand their relevance and impact on their organizations.
        </p>
      </div>
    </div>
  );
}

export default DetailsProvider;
