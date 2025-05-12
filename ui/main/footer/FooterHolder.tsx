import Footer from "./Footer";
import React from "react";

function FooterHolder() {
  return (
    <div className="w-full flex flex-col md:mx-auto pt-5">
      <div className="flex flex-col md:mt-20 z-10 gap-x-5 bg-slate-900">
        <Footer />
      </div>
    </div>
  );
}

export default FooterHolder;
