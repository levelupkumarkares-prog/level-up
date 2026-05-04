"use client";

import { motion } from "motion/react";
import { fadeUpContainer, fadeUpItem } from "./animations";

export default function AnimatedFadeUp({ text, className = "" }) {
  const sentences = text
    .split(". ")
    .map(s => s.trim())
    .filter(Boolean);

  return (
    <motion.div
      variants={fadeUpContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}
    >
      {sentences.map((sentence, i) => (
        <motion.p key={i} variants={fadeUpItem} className="mb-2">
          {sentence.endsWith(".") ? sentence : `${sentence}.`}
        </motion.p>
      ))}
    </motion.div>
  );
}
