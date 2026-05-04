"use client";

import { motion } from "motion/react";
import { containerVariantsQuote, letterVariants } from "./animations";

const AnimatedQuote = ({
  text,
  highlightWords = [],
  highlightColor = "#B5893A",
  className = "",
}) => {
  const words = text.split(" ");

  return (
    <motion.div
      variants={containerVariantsQuote}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="w-full flex justify-center"
    >
      <p
        className={`text-2xl font-bold text-gray-900 text-center flex flex-wrap justify-center ${className}`}
      >
        {words.map((word, wordIndex) => {
          const cleanWord = word.replace(/[“”]/g, "");
          const isHighlight = highlightWords.includes(cleanWord);

          return (
            <span key={wordIndex} className="mx-1">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={letterVariants}
                  style={isHighlight ? { color: highlightColor } : {}}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          );
        })}
      </p>
    </motion.div>
  );
};

export default AnimatedQuote;
