// src/components/PageTransition.jsx
import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
  return (
    <motion.div
      // hilangkan y-axis agar tidak terasa jeda saat render
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{
        duration: 0.25, // lebih cepat agar terasa instan
        ease: [0.4, 0, 0.2, 1], // cubic-bezier seperti animasi Material Design
      }}
      className='min-h-screen flex flex-col justify-between'
    >
      {children}
    </motion.div>
  );
}
