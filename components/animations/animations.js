export const headingContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};

export const letterPop = {
  hidden: { opacity: 0, scale: 0.5, rotate: -15 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
};

export const fadeUpContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

export const fadeUpItem = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.6, 
      delayChildren: 0.15,  
    },
  },
};

export const card = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const buttonContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export const buttonItem = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};



export const imageVariants = {
  hidden: (dir) => ({
    opacity: 0,
    x: dir === "left" ? -80 : 80,
    scale: 0.92,
    rotateY: dir === "left" ? -12 : 12,
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const fadeSlide = (y = 30, x = 30, duration = 0.7, delay = 0) => ({
  hidden: (dir) => ({
    opacity: 0,
    y,
    x: dir === "left" ? -x : x,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

export const listItemVariants = {
  hidden: { opacity: 0, y: 12, x: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.45,
      delay: 0.3 + i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export const viewportOnce = { once: true, margin: "-100px" };

export const fadeInChoose = (direction = "up", duration = 0.5, distance = 20) => {
  let x = 0;
  let y = 0;

  if (direction === "left") x = -distance;
  if (direction === "right") x = distance;
  if (direction === "up") y = distance;
  if (direction === "down") y = -distance;

  return {
    hidden: { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease: "easeOut" },
    },
  };
};

export const staggerContainerChoose = (stagger = 0.25) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger },
  },
});




// ---faq---


export const fadeUpCard = {
  initial: { opacity: 0, y: 80, scale: 0.96 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
};

export const fadeUpCardTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

export const accordionContent = {
  initial: { height: 0, opacity: 0 },
  animate: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      opacity: { duration: 0.3, delay: 0.1 },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      opacity: { duration: 0.2 },
    },
  },
};

export const accordionInner = {
  initial: { y: -10 },
  animate: { y: 0 },
  exit: { y: -10 },
  transition: { duration: 0.3, ease: "easeOut" },
};





export const containerVariantsQuote = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

export const letterVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};