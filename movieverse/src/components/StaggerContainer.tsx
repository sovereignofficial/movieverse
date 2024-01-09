import { motion } from "framer-motion";
import { ReactNode } from "react";

type StaggerContainerProps = {
  children:ReactNode;
  className?:string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};


export const StaggerContainer: React.FC<StaggerContainerProps> = ({ className, children }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
    {children}
    </motion.div>
  );
};