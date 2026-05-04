import { Mail } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-28 text-black">
      <div className="container mx-auto max-w-8xl px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Let’s Build Your Next Stage of Growth
        </h2>

        <p className="text-black max-w-2xl mx-auto mb-10">
          Connect with Level Up Capital Advisors to explore strategic advisory and
          capital solutions tailored to your objectives.
        </p>

        <a
          href="/contact"
          className="inline-flex items-center justify-center gap-2 bg-[#B5893A] text-white px-8 py-3 rounded-sm font-medium shadow-[0_8px_25px_rgba(181,137,58,0.4)] hover:shadow-[0_12px_35px_rgba(181,137,58,0.5)] hover:bg-[#d4a43f] transition-all duration-300"
        >
          <Mail className="w-5 h-5" />
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
