"use client";

import { sections } from "@/lib/content";
import ButtonGroup from "@/components/animations/ButtonGroup";
import AnimatedButton from "@/components/animations/AnimatedButton";
import SectionItem from "@/components/animations/SectionItem";

const RealEstateSection = () => (
  <section className="py-10">
    <div className="container mx-auto max-w-8xl px-12 space-y-20">
      {sections.map((section, i) => (
        <SectionItem key={section.id} {...section} reverse={i % 2 !== 0} />
      ))}
    </div>

    <div className="mt-8 text-lg">
      <ButtonGroup>
        <AnimatedButton href="/services">Learn More</AnimatedButton>
      </ButtonGroup>
    </div>
  </section>
);

export default RealEstateSection;
