"use client";

import { motion } from "motion/react";
import {
  fadeUpCard,
  fadeUpCardTransition,
} from "./animations";

export default function FadeUpCard({ children, className = "" }) {
  return (
    <motion.div
      variants={fadeUpCard}
      initial="initial"
      whileInView="whileInView"
      transition={fadeUpCardTransition}
      viewport={{ once: true, amount: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
