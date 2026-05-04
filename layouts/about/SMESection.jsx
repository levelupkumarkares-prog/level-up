"use client";

import { DollarSign, FileText, Users, Briefcase } from "lucide-react";

const benefits = [
  {
    title: "Growth Financing Strategies",
    description:
      "Tailored financing solutions to help SMEs scale and expand efficiently.",
    icon: (
      <DollarSign className="w-10 h-10 mb-3" style={{ color: "#B5893A" }} />
    ),
  },
  {
    title: "Acquisition Support",
    description:
      "Expert guidance for mergers, acquisitions, and strategic partnerships.",
    icon: <FileText className="w-10 h-10 mb-3" style={{ color: "#B5893A" }} />,
  },
  {
    title: "Succession Planning",
    description:
      "Prepare leadership and ownership transitions for long-term stability.",
    icon: <Users className="w-10 h-10 mb-3" style={{ color: "#B5893A" }} />,
  },
  {
    title: "Capital Sourcing",
    description:
      "Access to funding and structured capital solutions for growth projects.",
    icon: <Briefcase className="w-10 h-10 mb-3" style={{ color: "#B5893A" }} />,
  },
];

const SMESection = () => {
  return (
    <section className="pt-10 pb-30" id="sme">
      <div className="mx-auto container max-w-8xl px-15">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Supporting SMEs
          </h2>
          <p className="text-gray-700 text-lg">
            Small and medium-sized businesses often face barriers in financing,
            acquisitions, or succession planning. Level Up Capital Advisors provides
            targeted solutions to unlock growth and long-term value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6  shadow-[0_8px_25px_rgba(181,137,58,0.5)] rounded-xl   transition-shadow duration-300 text-center flex flex-col items-center"
            >
              {benefit.icon}
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SMESection;
