import {
  Target,
  ShieldCheck,
  Crosshair,
  Users,
  TrendingUp,
} from "lucide-react";

export default function MissionAndValues() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-8xl px-6 md:px-12">
        <div className="mb-10 text-center w-full flex  flex-col justify-center items-center">
          <h3 className="text-3xl font-semibold text-gray-900">
            Mission & Values
          </h3>
          <p className="mt-4 max-w-3xl leading-relaxed text-gray-600">
            Our mission and values guide every engagement, shaping how we
            advise, collaborate, and deliver outcomes for our clients. They
            define our decision-making framework, inform how we allocate capital
            and resources.
          </p>
        </div>
        <div className="mb-10 rounded-2xl border border-[#b88a3b]/20 bg-gray-50 p-10 shadow-[0_20px_50px_rgba(184,138,59,0.15)]">
          <div className=" flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b88a3b]/10">
              <Target className="h-6 w-6 text-[#b88a3b]" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900">Our Mission</h4>
          </div>
          <p className="text-lg font-medium text-[#b88a3b]">
            Survive and Thrive
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            We exist to help businesses build resilience while achieving
            measurable, sustainable financial advancement. In an increasingly
            complex and competitive environment, our role is to provide
            disciplined strategy, experienced guidance, and structured capital
            solutions that enable clients not only to endure challenges, but to
            grow with confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {[
            {
              title: "Integrity",
              text: "We provide independent, objective advice grounded in transparency, accountability, and ethical decision-making. Our clients trust us to act in their best interests at every stage.",
              icon: ShieldCheck,
            },
            {
              title: "Precision",
              text: "Capital and strategic decisions demand accuracy and discipline. We apply rigorous analysis, structured frameworks, and attention to detail to ensure decisions are well-informed and execution-ready.",
              icon: Crosshair,
            },
            {
              title: "Partnership",
              text: "We work as long-term strategic partners, collaborating closely with business owners, management teams, and stakeholders to align strategy, capital, and outcomes.",
              icon: Users,
            },
            {
              title: "Long-Term Value",
              text: "Every recommendation we make is evaluated through the lens of durability and future impact. We prioritize sustainable growth and compounding value over short-term gains.",
              icon: TrendingUp,
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-[#b88a3b]/20 bg-white p-8 shadow-[0_20px_50px_rgba(184,138,59,0.12)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(184,138,59,0.2)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#b88a3b]/10">
                  <Icon className="h-6 w-6 text-[#b88a3b]" />
                </div>

                <h5 className="mb-2 text-lg font-semibold text-gray-900">
                  {item.title}
                </h5>
                <p className="leading-relaxed text-gray-700">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
