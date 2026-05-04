"use client";

import { motion } from "framer-motion";
import { Card } from "./Card";
import { staggerContainer } from "./animations";

const CardContainer = ({ cards = [] }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.5,
      }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {cards.map((card, index) => (
        <Card key={card.id ?? index} {...card} />
      ))}
    </motion.div>
  );
};

export default CardContainer;
