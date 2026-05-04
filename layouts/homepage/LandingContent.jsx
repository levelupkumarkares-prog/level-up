import AnimatedButton from "@/components/animations/AnimatedButton";
import AnimatedText from "@/components/animations/AnimatedText";
import ButtonGroup from "@/components/animations/ButtonGroup";
import StatsSection from "./StatsSection";

const LandingContent = () => {
  return (
    <div className="space-y-12 md:space-y-20 px-4 sm:px-6 lg:px-0">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug sm:leading-tight">
          <AnimatedText text="Real Estate Capital Strategies for Business Scaling." />
        </h1>
        <AnimatedText
          text="From growth financing to mergers and acquisitions, we provide expert guidance to unlock long-term value."
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-800 max-w-xl mx-auto"
        />
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 text-base">
          <ButtonGroup className="flex flex-col sm:flex-row gap-3">
            <AnimatedButton href="/contact" className="w-full sm:w-auto">
              Get Started
            </AnimatedButton>
            <AnimatedButton href="/services" variant="secondary" className="w-full sm:w-auto">
              Explore Our Services
            </AnimatedButton>
          </ButtonGroup>
        </div>
      </div>

      <StatsSection />
    </div>
  );
};

export default LandingContent;
