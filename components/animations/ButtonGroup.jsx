"use client";

import { motion } from "motion/react";
import { buttonContainer } from "./animations";

const ButtonGroup = ({ children }) => {
  return (
    <motion.div
      variants={buttonContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex justify-center gap-4 flex-wrap"
    >
      {children}
    </motion.div>
  );
};

export default ButtonGroup;
