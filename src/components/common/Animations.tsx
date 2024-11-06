import { motion } from 'framer-motion';

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

export const slideIn = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 20, opacity: 0 }
};

export const FadeInView = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    exit="exit"
    variants={fadeIn}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export const SlideInView = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    exit="exit"
    variants={slideIn}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
); 