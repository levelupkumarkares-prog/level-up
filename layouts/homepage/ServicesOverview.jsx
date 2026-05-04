import { services } from "@/lib/content";
import AnimatedText from "@/components/animations/AnimatedText";
import AnimatedFadeUp from "@/components/animations/AnimatedFadeUp";
import ServiceContainer from "@/components/animations/ServiceContainer";



export default function ServicesOverview() {
  return (
    <section className="py-20" id="services">
      <div className="container mx-auto max-w-8xl px-6 md:px-12">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <AnimatedText
            text="Our Services"
            className="mb-4 text-4xl font-bold text-gray-900"
          />
          <AnimatedFadeUp
            text="We provide strategic advisory and capital solutions across multiple
            sectors to help businesses grow, scale, and create long-term value."
            className="text-lg text-gray-700"
          />
        </div>
        <ServiceContainer services={services}/>
      </div>
    </section>
  );
}
