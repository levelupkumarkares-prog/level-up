import AnimatedFadeUp from "@/components/animations/AnimatedFadeUp";
import AnimatedQuote from "@/components/animations/AnimatedQuote";
import AnimatedText from "@/components/animations/AnimatedText";
import CardContainer from "@/components/animations/CardContainer";
import { approach } from "@/lib/content";

const ApproachSection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto max-w-8xl px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimatedText
            text="Our Approach"
            className="text-4xl font-bold text-gray-900 mb-4"
          />
          <AnimatedFadeUp
            text="We take a strategic, integrated approach combining financial expertise with operational insight to create long-term value for our clients."
            className="text-gray-700 text-lg"
          />
        </div>

        <CardContainer cards={approach} />

        <div className="pt-10">
          <AnimatedQuote
            text='“Capital + Consulting = Stronger Business Outcomes”'
            highlightWords={["Stronger", "Business", "Outcomes"]}
            highlightColor="#B5893A"
          />
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
