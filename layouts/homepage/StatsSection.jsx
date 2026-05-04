"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function StatsSection() {
  return (
    <section className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-20 ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto px-6 sm:px-8 lg:px-0 max-w-6xl flex items-center"
      >
        <div className="grid w-full grid-cols-1 gap-12 text-center sm:grid-cols-3">
          <Stat
            value={50}
            suffix="+"
            label="Strategic Advisory Engagements"
          />
          <Stat
            value={200}
            prefix="$"
            suffix="M+"
            label="Capital Raising Transactions Advised"
          />
          <Stat value={100} suffix="+" label="Clients Supported Through Strategic Engagements" />
        </div>
      </motion.div>
    </section>
  );
}

function Stat({ value, label, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const step = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value]);

  return (
    <motion.div variants={statVariants} className="flex flex-col items-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-base sm:text-lg  font-medium text-gray-900">
        {label}
      </div>
    </motion.div>
  );
}
