import {
  Sparkles,
  Globe,
  Puzzle,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

const features = [
  { title: "Cross-industry expertise", icon: Sparkles },
  { title: "Global capital networks", icon: Globe },
  { title: "Integrated advisory model", icon: Puzzle },
  { title: "Independent strategic guidance", icon: ShieldCheck },
  { title: "Long-term value creation focus", icon: TrendingUp },
  { title: "Results-driven execution", icon: Zap },
];

const OurAdvantagesSection = () => {
  return (
    <section className="py-24 ">
      <div className="container mx-auto max-w-8xl px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-14">
          Why Choose Level Up Capital
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-2xl shadow-[0_15px_50px_rgba(181,137,58,0.25)] hover:shadow-[0_25px_60px_rgba(181,137,58,0.35)] transition-all duration-300"
            >
              <item.icon className="w-18 h-18 mx-auto mb-6 text-[#B5893A]" />
              <p className="font-medium text-2xl text-gray-800">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAdvantagesSection;
