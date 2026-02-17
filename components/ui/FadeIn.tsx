import React from 'react';
import { motion, Variants } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = "", 
  direction = 'up' 
}) => {
  const getVariants = (): Variants => {
    const distance = 20;
    const initial: any = { opacity: 0 };
    
    if (direction === 'up') initial.y = distance;
    if (direction === 'down') initial.y = -distance;
    if (direction === 'left') initial.x = distance;
    if (direction === 'right') initial.x = -distance;

    return {
      hidden: initial,
      visible: { 
        opacity: 1, 
        y: 0, 
        x: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number], // Cubic bezier for "Apple-like" smoothing
          delay: delay
        }
      }
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;