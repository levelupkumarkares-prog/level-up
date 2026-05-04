"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cardVariants, containerVariants } from "./animations";

const ServiceContainer = ({ services }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-0"
    >
      {services.map((service, index) => (
        <motion.article
          key={service.title}
          variants={cardVariants}
          whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(181,137,58,0.2)" }}
          className="group flex flex-col rounded-2xl border border-gray-200 bg-white shadow-md transition-shadow will-change-transform overflow-hidden"
        >
          {service.image && (
            <div className="relative w-full h-56 sm:h-64 lg:h-72">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                  className="object-cover object-center"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.06),transparent_60%)]" />
            </div>
          )}

          <div className="flex flex-1 flex-col p-4 sm:p-6">
            <h3 className="mb-2 text-base sm:text-lg font-semibold text-gray-900">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-600">
              {service.description}
            </p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
};

export default ServiceContainer;
