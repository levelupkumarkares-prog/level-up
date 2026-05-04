"use client";

import { ChevronDown } from "lucide-react";
import { useState, useCallback } from "react";
import { faqs } from "@/lib/content";
import AnimatedText from "./animations/AnimatedText";
import AnimatedFadeUp from "./animations/AnimatedFadeUp";
import FadeUpCard from "./animations/FadeUpCard";
import { AccordionMotion } from "./animations/AccordionMotion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = useCallback((i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  }, []);

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="mx-auto mb-10 sm:mb-12 max-w-full sm:max-w-3xl text-center">
          <AnimatedText
            text="Frequently Asked Questions"
            className="mb-3 text-2xl sm:text-4xl font-bold text-gray-900"
          />
          <AnimatedFadeUp
            text="Clear answers to common questions about our advisory and capital services."
            className="text-base sm:text-lg text-gray-700"
          />
        </div>

        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <FadeUpCard
                key={i}
                className={`rounded-xl border transition-all duration-500 ease-out ${
                  isOpen
                    ? "border-[#B38A3A] shadow-[0_12px_45px_rgba(179,138,58,0.35)]"
                    : "border-gray-200 shadow-sm hover:border-gray-300 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="group flex w-full items-center justify-between px-4 sm:px-6 py-4 sm:py-6 text-left"
                >
                  <span
                    className={`font-medium transition-colors duration-300 ${
                      isOpen
                        ? "text-[#B38A3A]"
                        : "text-gray-900 group-hover:text-[#B38A3A]"
                    } text-sm sm:text-base`}
                  >
                    {faq.q}
                  </span>

                  <span
                    className={`transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-[#B38A3A]" />
                  </span>
                </button>

                <AccordionMotion isOpen={isOpen}>
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 leading-relaxed text-gray-600 text-sm sm:text-base">
                    {faq.a}
                  </div>
                </AccordionMotion>
              </FadeUpCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
