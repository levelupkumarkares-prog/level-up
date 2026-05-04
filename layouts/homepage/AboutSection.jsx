import AnimatedFadeUp from "@/components/animations/AnimatedFadeUp";
import AnimatedText from "@/components/animations/AnimatedText";
import CardContainer from "@/components/animations/CardContainer";
import { CARDS } from "@/lib/content";

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-8xl px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimatedText
            text="Level Up Capital Advisors"
            className="text-4xl font-bold text-gray-900 mb-4"
          />
          <AnimatedFadeUp
            text="Level Up Capital Advisors is a corporate consulting and capital advisory firm dedicated to helping businesses grow, scale, and unlock long-term value through strategic financial solutions and expert guidance."
            className="text-gray-700 text-lg"
          />
        </div>
        <CardContainer cards={CARDS} />
      </div>
    </section>
  );
}
