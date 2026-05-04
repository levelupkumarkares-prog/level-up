"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { buttonItem } from "./animations";

const AnimatedButton = ({
  href,
  children,
  variant = "primary",
  className = "",
}) => {
  const baseStyles =
    "cursor-pointer px-8 py-2 rounded-md transition-all duration-300 hover:scale-105 active:scale-95";

  const variants = {
    primary: "bg-[#B5893A] text-white hover:bg-[#D4A73F]",
    secondary: "bg-white/80 text-black hover:bg-white",
  };

  const button = (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );

  return (
    <motion.div variants={buttonItem}>
      {href ? <Link href={href}>{button}</Link> : button}
    </motion.div>
  );
};

export default AnimatedButton;
