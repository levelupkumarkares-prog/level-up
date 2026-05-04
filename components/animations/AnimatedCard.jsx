"use client";

import { motion, AnimatePresence } from "motion/react";
import { accordion } from "./motions";

export default function AnimatedAccordion({
  isOpen,
  children,
  className = "",
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div {...accordion} className={`overflow-hidden ${className}`}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
