"use client";

import { motion } from "motion/react";
import { headingContainer, letterPop } from "./animations";

export default function AnimatedText({ text, className = "" }) {
  return (
    <motion.span
      variants={headingContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`inline-block ${className}`}
    >
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-flex whitespace-nowrap mr-2">
          {[...word].map((char, j) => (
            <motion.span key={j} variants={letterPop} className="inline-block">
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}
