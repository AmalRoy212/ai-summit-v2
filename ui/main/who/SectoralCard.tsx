const data = [
  {
    dis: ["CIOs", "CTOS", "CAIOS", "CDOs", "CISOs", "CXOs"],
  },
  {
    dis: [
      "Director’s",
      "VP’s & Heads of Finance",
      "Anti Money Laundering",
      "Financial Regulatory",
      "Compliance",
      "Treasury",
    ],
  },
  {
    dis: [
      "Director’s",
      "VP’s & Heads of Payments",
      "Retail Banking",
      "Mobile Banking",
      "Digital Banking",
      "Data Modelling & Mining",
      "Data Architecture & Engineering",
      "CRM",
    ],
  },
  {
    dis: [
      "Director’s",
      "VP’s & Heads of Digital Transformation",
      "Customer Experience",
      "Product Development",
      "Information Security",
    ],
  },
];

export default function SectoralCard() {
  return data.map((item) => (
    <div data-aos="zoom-in" className="w-full text-white mt-2 pb-2">
      <div className="flex flex-wrap gap-x-1 gap-y-1 justify-start items-center">
        {item.dis?.map((item) => (
          <div className="border text-sm border-slate-500 rounded-xl px-5 py-1">
            {item}
          </div>
        ))}
      </div>
    </div>
  ));
}
