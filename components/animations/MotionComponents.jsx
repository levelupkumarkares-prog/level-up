"use client";
import { motion } from "framer-motion";

export const MotionDiv = ({ children, variants, className, ...props }) => (
  <motion.div
    variants={variants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.5 }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const MotionList = ({ children, variants, className }) => (
  <motion.ul
    variants={variants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.5 }}
    className={className}
  >
    {children}
  </motion.ul>
);

export const MotionItem = ({ children, variants, className }) => (
  <motion.li variants={variants} className={className}>
    {children}
  </motion.li>
);
