"use client";

import Image from "next/image";
import {
  MotionDiv,
  MotionItem,
  MotionList,
} from "@/components/animations/MotionComponents";
import {
  fadeInChoose,
  staggerContainerChoose,
} from "@/components/animations/animations";
import { reasons } from "@/lib/content";
import AnimatedText from "@/components/animations/AnimatedText";
import AnimatedFadeUp from "@/components/animations/AnimatedFadeUp";

export default function WhyChooseUsHome() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-8xl px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimatedText
            text="Why Choose Level Up Capital"
            className="text-4xl font-bold text-gray-900 mb-4"
          />
          <AnimatedFadeUp
            text="Strategic advisory and capital solutions designed to help businesses
            grow with confidence."
            className="text-gray-700 text-lg"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MotionList
            variants={staggerContainerChoose(0.25)}
            className="rounded-xl p-8 space-y-4 list-disc list-inside text-gray-700"
          >
            {reasons.map((item, index) => (
              <MotionItem key={index} variants={fadeInChoose("left", 0.5, 20)}>
                {item}
              </MotionItem>
            ))}
          </MotionList>

          <MotionDiv
            variants={fadeInChoose("right", 0.6, 40)}
            className="relative w-full h-80 md:h-96 rounded-xl shadow-sm"
          >
            <div className="absolute shadow-[0_25px_80px_rgba(181,137,58,0.3)] inset-0 overflow-hidden rounded-xl">
              <Image
                src="/unnamed.webp"
                alt="Business advisory meeting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                priority
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
