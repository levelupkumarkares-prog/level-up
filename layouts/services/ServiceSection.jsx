import Image from "next/image";

const serviceSections = [
  {
    title: "SME Advisory & Business Growth Solutions",
    desc: "We partner with small and medium-sized enterprises to deliver strategic financial guidance, capital solutions, and growth planning across every stage of the business lifecycle.",
    points: [
      "Growth and expansion financing strategies",
      "Capital sourcing and structuring",
      "Mergers and acquisition advisory",
      "Exit planning and business sale preparation",
      "Succession and transition strategies",
      "Project development funding support",
    ],
    img: "/services-page/img.webp",
  },
  {
    title: "Capital Structuring & Financial Advisory",
    desc: "Our financial advisory team delivers disciplined, objective strategies for capital structuring, funding, and long-term value creation.",
    points: [
      "Equity and debt structuring",
      "Growth capital sourcing",
      "Transaction advisory",
      "Financial modeling and feasibility analysis",
      "Risk mitigation strategies",
    ],
    img: "/services-page/img1.webp",
  },
  {
    title: "Real Estate Financing & Development Advisory",
    desc: "We provide end-to-end financing and advisory services for real estate developments across multiple asset classes and markets.",
    points: [
      "Construction and development financing",
      "Commercial and mixed-use properties",
      "Hospitality and hotel developments",
      "Condominium projects",
      "International real estate investments",
    ],
    img: "/services-page/img2.webp",
  },
  {
    title: "Affordable Housing Advisory & Funding",
    desc: "Specialized advisory and financing solutions to support scalable, compliant affordable housing developments globally.",
    points: [
      "Structured funding strategies",
      "Government & institutional partnerships",
      "Regulatory and approval guidance",
      "Project feasibility planning",
      "Approved building systems",
    ],
    img: "/services-page/img3.webp",
  },
  {
    title: "Mergers, Acquisitions & Exit Advisory",
    desc: "Strategic transaction advisory designed to maximize value and ensure smooth execution across acquisitions, mergers, and exits.",
    points: [
      "Acquisition strategy and evaluation",
      "Financial due diligence",
      "Transaction structuring",
      "Exit readiness preparation",
      "Negotiation support",
    ],
    img: "/services-page/img4.webp",
  },
];

const ServiceSection = () => {
  return (
    <>
      <section className="relative py-12">
        <div className="container mx-auto max-w-8xl px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Strategic Advisory & Capital Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Level Up Capital Advisors delivers integrated consulting and financial
            advisory services to help businesses scale, secure capital, and
            unlock long-term value.
          </p>
        </div>
      </section>

      <section className="py-8 space-y-12">
        {serviceSections.map((service, index) => (
          <div
            key={index}
            className={`container mx-auto max-w-8xl px-6 md:px-12 grid gap-16 items-center ${
              index % 2 === 0
                ? "md:grid-cols-2"
                : "md:grid-cols-2 md:flex-row-reverse"
            }`}
          >
            <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
              <div className="relative w-full aspect-16/10 max-h-100 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(181,137,58,0.5)]">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold">
                {service.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✔</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ServiceSection;
