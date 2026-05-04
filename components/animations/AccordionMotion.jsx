"use client";

import { motion, AnimatePresence } from "motion/react";
import { accordionContent, accordionInner } from "./animations";


export function AccordionMotion({ isOpen, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={accordionContent}
          initial="initial"
          animate="animate"
          exit="exit"
          className="overflow-hidden"
        >
          <motion.div {...accordionInner}>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
