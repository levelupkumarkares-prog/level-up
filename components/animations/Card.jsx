"use client";

import { motion } from "motion/react";
import { Briefcase, Users, TrendingUp, Lightbulb, PieChart, Rocket } from "lucide-react";
import { card } from "./animations";

const iconMap = {
  Briefcase: Briefcase,
  Users: Users,
  TrendingUp: TrendingUp,
  Lightbulb: Lightbulb,
  PieChart: PieChart,
  Rocket: Rocket,
};

export const Card = ({ iconName, title, description }) => {
  const Icon = iconMap[iconName];

  return (
    <motion.div
      variants={card} 
      className="bg-white p-6 rounded-xl shadow-[0_10px_30px_rgba(181,137,58,0.3)] text-center"
    >
      {Icon && <Icon className="mx-auto w-12 h-12 mb-4 text-[#B5893A]" />}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};
