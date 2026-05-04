"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeSlide,
  imageVariants,
  listItemVariants,
  viewportOnce,
} from "./animations";

const inView = {
  initial: "hidden",
  whileInView: "visible",
  viewport: viewportOnce,
};

const SectionItem = ({
  title,
  description,
  expertise,
  image,
  imagePosition,
  reverse,
}) => {
  const direction = reverse ? "left" : "right";

  return (
    <div
      className={`flex flex-col lg:flex-row gap-10 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* TEXT */}
      <div className="lg:w-1/2 flex flex-col justify-center">
        <motion.h2
          custom={direction}
          variants={fadeSlide(30, 30, 0.7)}
          {...inView}
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          {title}
        </motion.h2>

        <motion.p
          custom={direction}
          variants={fadeSlide(20, 20, 0.6, 0.15)}
          {...inView}
          className="text-gray-700 text-lg mb-4"
        >
          {description}
        </motion.p>

        <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
          {expertise.map((item, i) => (
            <motion.li
              key={item}
              custom={i}
              variants={listItemVariants}
              {...inView}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="lg:w-1/2 h-[43vh] relative">
        <motion.div
          custom={direction}
          variants={imageVariants}
          {...inView}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          className="absolute inset-0 rounded-xl shadow-[0_25px_80px_rgba(181,137,58,0.3)] will-change-transform"
          style={{ perspective: 1000 }}
        >
          <div className="relative w-full h-full overflow-hidden rounded-xl bg-gray-100">
            <Image
              src={image}
              alt={title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              className={`object-cover object-${imagePosition}`}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionItem;
